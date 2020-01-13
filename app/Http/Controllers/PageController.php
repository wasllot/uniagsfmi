<?php

namespace App\Http\Controllers;

use App\Repositories\CategoryRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Http\Requests\PageRequest;
use App\Repositories\PageRepository;
use App\Repositories\ActivityLogRepository;
use Illuminate\Support\Facades\File;

class PageController extends Controller{
    /**
     * @var Request
     */
    protected $request;

    /**
     * @var PageRepository
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
    protected $module = 'page';

    /**
     * Instantiate a new controller instance.
     *
     * @param Request $request
     * @param PageRepository $repo
     * @param ActivityLogRepository $activity
     * @param CategoryRepository $category
     */
    public function __construct(Request $request, PageRepository $repo, ActivityLogRepository $activity, CategoryRepository $category)
    {
        $this->request = $request;
        $this->repo = $repo;
        $this->activity = $activity;
        $this->category = $category;
        $this->middleware('permission:access-page')->except(['getPublicPages', 'getPublicPage', 'getMainPage']);
    }

    /**
     * Display all public pages
     *
     * @return JsonResponse
     */
    public function getPublicPages()
    {
        $pages = $this->repo->getPublished();

        return $this->success(compact('pages'));
    }


    /**
     * Display a public page
     *
     * @param string $slug
     *
     * @return JsonResponse
     */
    public function getPublicPage($slug)
    {
        $categories = $this->category->getAll();

        $page = $this->repo->getBySlugForGuests($slug);

        return $this->success(compact('categories', 'page'));

    }

    /**
     * Display components
     *
     * @return JsonResponse
     */
    public function getComponents()
    {
        $pages = $this->repo->getComponents();

        return $this->success(compact('pages'));
    }


    /**
     * Display the main page content
     *
     * @return JsonResponse
     */

    public function getMainPage()
    {

        $page = $this->repo->mainPage(1);

        return $this->success(compact('page'));
    }

    /**
     * Store page
     *
     * @param PageRequest $request
     *
     * @return JsonResponse
     * @throws ValidationException
     */
    public function store(PageRequest $request)
    {
        $page = $this->repo->create($this->request->all());

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $page->id,
            'activity' => 'published'
        ]);

        return $this->success(['page' => trans('page.page_processed', ['action' => trans('page.published')])]);
    }      

    /**
     * update default page
     *
     * @param PageRequest $request
     *
     * @return JsonResponse
     * @throws ValidationException
     */
    public function updateDefaultPage(PageRequest $request)
    {
        $page = $this->repo->storeDefaultPage($this->request->all());

        return $this->success(['page' => trans('page.page_updated', ['action' => trans('page.update')])]);
      
    }    

    /**
     * Store main page
     *
     * @param PageRequest $request
     *
     * @return JsonResponse
     * @throws ValidationException
     */
    public function storeMainPage(Request $request)
    {
        $page = $this->repo->storeMainPage($this->request->all());

        return $this->success(['page' => trans('page.page_updated', ['action' => trans('page.update')])]);
    }

    /**
     * Upload image in Summernote editor
     *
     * @param PageRequest $request
     *
     * @return JsonResponse
     */
    public function uploadImage(PageRequest $request)
    {
        $upload_path = config('system.upload_path.images');
        $extension = request()->file('file')->getClientOriginalExtension();
        $filename = uniqid();
        request()->file('file')->move($upload_path, $filename . "." . $extension);
        $image_url = '/' . $upload_path . '/' . $filename . '.' . $extension;

        return $this->success(compact('image_url'));
    }

        /**
     * Update page cover image
     *
     * @param int $id
     *
     * @return JsonResponse
     * @throws AuthorizationException
     * @throws ValidationException
     */
    public function uploadCover($id)
    {
        $page = $this->repo->findOrFail($id);

        // $this->authorize('update', $page);

        $image_path = config('system.upload_path.images') . '/';
        $image = $page->cover;

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
        $img->crop(500, 530);
        $img->save($image_path . $filename . "." . $extension);
        $page->cover = $image_path . $filename . "." . $extension;
        $page->save();

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $page->id,
            'sub_module' => 'cover',
            'activity' => 'uploaded'
        ]);

        return $this->success(['message' => trans('page.cover_uploaded'), 'image' => $image_path . $filename . "." . $extension]);
    }


    /**
     * Fetch statistics
     *
     * @return JsonResponse
     */
    public function statistics()
    {
        $published = $this->repo->getPublished()->count();

        return $this->success(compact('published'));
    }

    /**
     * Get all published pages
     *
     * @return JsonResponse
     */
    public function getPublishedList()
    {
        $pages = $this->repo->getPublishedList($this->request->all());

        return $this->success(compact('pages'));
    }    


    /**
     * Get all default pages
     *
     * @return JsonResponse
     */
    public function getDefaultList()
    {
        $pages = $this->repo->getDefaultList();

        return $this->success(compact('pages'));
    }

    /**
     * Get page details
     *
     * @param string $slug
     *
     * @return JsonResponse
     * @throws ValidationException
     */
    public function show($slug)
    {
        $page = $this->repo->getBySlug($slug);

       // $this->authorize('show', $page);

        return $this->success(compact('page'));
    }    


    /**
     * Get default page details
     *
     * @param string $slug
     *
     * @return JsonResponse
     * @throws ValidationException
     */
    public function defaultPage($slug)
    {
        $page = $this->repo->getDefaultBySlug($slug);

        return $this->success(compact('page'));
    }

    /**
     * Delete page
     *
     * @param string $slug
     *
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy($slug)
    {
        $page = $this->repo->getBySlug($slug);

        $this->activity->record([
            'module' => 'page',
            'sub_module' => 'page',
            'module_id' => $page->id,
            'activity' => 'deleted'
        ]);

        $page->delete();

        return $this->success(['page' => trans('page.deleted', ['type' => trans('page.page')])]);
    }
}