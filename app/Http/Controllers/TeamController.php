<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;
use App\Repositories\CategoryRepository;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use App\Repositories\UserRepository;
use App\Http\Requests\TeamRequest;
use App\Repositories\TeamRepository;
use App\Repositories\ActivityLogRepository;
use Illuminate\Support\Facades\File;

class TeamController extends Controller
{
   
   /**
     * @var Request
     */
    protected $request;

    /**
     * @var TeamRepository
     */
    protected $repo;

    /**
     * @var ActivityLogRepository
     */
    protected $activity;

    /**
     * @var CategoryRepository
     */
    protected $category;

    /**
     * @var string
     */
    protected $module = 'team';

    /**
     * Instantiate a new controller instance.
     *
     * @param Request $request
     * @param PostRepository $repo
     * @param ActivityLogRepository $activity
     * @param UserRepository $user
     * @param CategoryRepository $category
     */

    public function __construct(Request $request, TeamRepository $repo, ActivityLogRepository $activity, CategoryRepository $category)
    {
        $this->request = $request;
        $this->repo = $repo;
        $this->activity = $activity;
        $this->category = $category;
        $this->middleware('permission:access-page')->except(['getTeams', 'preRequisite', 'getPublishedList', 'show']);
    }

    /**
     * Display all teams
     *
     * @return JsonResponse
     */

    public function getTeams()
    {
        $categories = $this->category->getAll();

        $teams = $this->repo->getTeams($this->request->all());

        return $this->success(compact( 'teams', 'categories'));
    }


    /**
     * Get pre-requisites for team module
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function preRequisite()
    {
        //$this->authorize('create', Team::class);

        return generateSelect($this->category->list());
    }

    /**
     * Store team
     *
     * @param PostRequest $request
     *
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */

    public function store(TeamRequest $request)
    {
        //$this->authorize('create', Team::class);

        $team = $this->repo->create($this->request->all());

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $team->id,
            'activity' => $request->is_draft ? 'drafted' : 'published'
        ]);

        return $this->success(['team' => trans('team.team_processed', ['action' => request('is_draft') ? trans('team.drafted') : trans('team.published')])]);
    }

    /**
     * Upload image in Summernote editor
     *
     * @param PostRequest $request
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function uploadImage(PostRequest $request)
    {
        /*$this->authorize('create', Post::class);*/

        $upload_path = config('system.upload_path.images');
        $extension = request()->file('file')->getClientOriginalExtension();
        $filename = uniqid();
        request()->file('file')->move($upload_path, $filename . "." . $extension);
        $image_url = '/' . $upload_path . '/' . $filename . '.' . $extension;

        return $this->success(compact('image_url'));
    }

    /**
     * Fetch statistics
     *
     * @return JsonResponse
     */
    public function statistics()
    {
        $published = $this->repo->getPublishedList()->count();
        $draft = $this->repo->getDraft()->count();

        return $this->success(compact('published', 'draft'));
    }

    /**
     * Get all draft posts
     *
     * @return JsonResponse
     */
    public function getDraftList()
    {
        $categories = $this->category->getAll();

        $posts = $this->repo->getDraftList($this->request->all());

        return $this->success(compact('categories', 'posts'));
    }

    /**
     * Get all published teams
     *
     * @return JsonResponse
     */
    public function getPublishedList()
    {
        $categories = $this->category->getAll();

        $teams = $this->repo->getPublishedList($this->request->all());

        return $this->success(compact('categories', 'teams'));
    }    

    /**
     * Get team details
     *
     * @param string $slug
     *
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function show($slug)
    {
        $team = $this->repo->getBySlug($slug);

        //$this->authorize('show', $team);

        return $this->success(compact('team'));
    }

    /**
     * Update team cover image
     *
     * @param int $id
     *
     * @return JsonResponse
     * @throws AuthorizationException
     * @throws ValidationException
     */
    public function uploadCover($id)
    {
        $team = $this->repo->findOrFail($id);

        /*$this->authorize('update', $team);*/

        $image_path = config('system.upload_path.images') . '/';
        $image = $team->cover;

        if ($image && File::exists($image) && $image != config('config.default_cover')) {
            File::delete($image);
        }

        $extension = request()->file('image')->getClientOriginalExtension();
        $filename = uniqid();
        request()->file('image')->move($image_path, $filename . "." . $extension);
        $img = \Image::make($image_path . $filename . "." . $extension);
        $img->resize(500, null, function ($constraint) {
            $constraint->aspectRatio();
        });
        $img->crop(500, 500);
        $img->save($image_path . $filename . "." . $extension);
        $team->cover = $image_path . $filename . "." . $extension;
        $team->save();

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $team->id,
            'sub_module' => 'cover',
            'activity' => 'uploaded'
        ]);

        return $this->success(['message' => trans('team.cover_uploaded'), 'image' => $image_path . $filename . "." . $extension]);
    }

    /**
     * Remove team cover image
     *
     * @param int $id
     *
     * @return JsonResponse
     * @throws AuthorizationException
     * @throws ValidationException
     */
    public function removeCover($id)
    {
        $team = $this->repo->findOrFail($id);

        $this->authorize('update', $team);

        $image = $team->cover;

        if ($image && File::exists($image) && $image != config('config.default_cover')) {
            File::delete($image);
        }

        $team->cover = null;
        $team->save();

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $team->id,
            'sub_module' => 'cover',
            'activity' => 'removed'
        ]);

        return $this->success(['message' => trans('team.cover_removed')]);
    }

    /**
     * Delete team
     *
     * @param string $slug
     *
     * @return JsonResponse
     * @throws \Exception
     * @throws AuthorizationException
     */
    public function destroy($slug)
    {
        $team = $this->repo->getBySlug($slug);

        $this->authorize('delete', $team);

        $this->activity->record([
            'module' => 'team',
            'sub_module' => $team->is_draft ? 'draft' : 'team',
            'module_id' => $team->id,
            'activity' => 'deleted'
        ]);

        $image = $team->cover;

        if ($image && File::exists($image) && $image != config('config.default_cover')) {
            File::delete($image);
        }

        $team->delete();

        return $this->success(['team' => trans('team.deleted', ['type' => trans('team.team')])]);
    }
}
