<?php

namespace App\Http\Controllers;

use App\PortfolioItem;
use App\Repositories\CategoryRepository;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Repositories\UserRepository;
use App\Http\Requests\PortfolioItemRequest;
use App\Repositories\PortfolioItemRepository;
use App\Repositories\ActivityLogRepository;
use Illuminate\Support\Facades\File;

class PortfolioItemController extends Controller
{

        /**
     * @var Request
     */
    protected $request;

    /**
     * @var PostRepository
     */
    protected $repo;

    /**
     * @var ActivityLogRepository
     */
    protected $activity;

    /**
     * @var UserRepository
     */
    protected $user;

    /**
     * @var CategoryRepository
     */
    protected $category;

    /**
     * @var string
     */
    protected $module = 'portfolioItem';

     public function __construct(Request $request, PortfolioItemRepository $repo, ActivityLogRepository $activity, UserRepository $user, CategoryRepository $category)
    {
        $this->request = $request;
        $this->repo = $repo;
        $this->activity = $activity;
        $this->user = $user;
        $this->category = $category;
        $this->middleware('permission:access-post')->except(['getPublicPortfolioItems', 'getPublicPost', 'getBlog', 'blogPagination', 'getLatest','pagination', 'preRequisite']);
    }


    /**
     * Display all public PortfolioItem
     *
     * @return JsonResponse
     */
    public function getPublicPortfolioItems()
    {
        $categories = $this->category->getAll();

        $portfolioItems = $this->repo->getPortfolioItem($this->request->all());

        return $this->success(compact('categories', 'portfolioItem'));
    }      

    /**
     * Display all public PortfolioItem
     *
     * @return JsonResponse
     */
    public function getBlog()
    {

        $portfolioItems = $this->repo->pagination();
        $blog = $this->repo->getBlog();

        return $this->success(compact('blog', 'portfolioItem'));
    }    

    /**
     * Display all public PortfolioItem
     *
     * @return JsonResponse
     */
    public function getLatest()
    {
        $categories = $this->category->getAll();

        $portfolioItems = $this->repo->getLatest(3);


        return $this->success(compact('categories', 'portfolioItem'));
    }

    /**
     * Display a public post
     *
     * @param string $category
     * @param string $slug
     *
     * @return JsonResponse
     */
    public function getPublicPost($category, $slug)
    {
        $categories = $this->category->getAll();

        $portfolioItem = $this->repo->getByCategoryAndSlug($category, $slug);

        return $this->success(compact('categories', 'post'));
    }

    /**
     * Get pre-requisites for post module
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function preRequisite()
    {

        return generateSelect($this->category->list());
    }

    /**
     * Store post
     *
     * @param PortfolioItemRequest $request
     *
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function store(PortfolioItemRequest $request)
    {

        $portfolioItem = $this->repo->create($this->request->all());

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $portfolioItem->id,
            'activity' => $request->is_draft ? 'drafted' : 'published'
        ]);

        return $this->success(['post' => trans('post.post_processed', ['action' => request('is_draft') ? trans('post.drafted') : trans('post.published')])]);
    }

    /**
     * Upload image in Summernote editor
     *
     * @param PortfolioItemRequest $request
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function uploadImage()
    {

        $upload_path = config('system.upload_path.images');
        $extension = request()->file('image')->getClientOriginalExtension();
        $filename = uniqid();
        request()->file('image')->move($upload_path, $filename . "." . $extension);
        $image = '/' . $upload_path . '/' . $filename . '.' . $extension;

        return $this->success(compact('image'));
    }

    /**
     * Fetch statistics
     *
     * @return JsonResponse
     */
    public function statistics()
    {
        $published = $this->repo->getPublished()->count();
        $draft = $this->repo->getDraft()->count();

        return $this->success(compact('published', 'draft'));
    }


    /**
     * Infinite loading
     *
     * @return JsonResponse
     */
    public function pagination()
    {
    

        $portfolioItems =  $this->repo->pagination(3); 
        $categories = $this->category->getPortfolioCategories();


        return $this->success(compact('portfolioItems', 'categories'));
        

    }

    /**
     * Get all draft PortfolioItem
     *
     * @return JsonResponse
     */
    public function getDraftList()
    {
        $categories = $this->category->getAll();

        $portfolioItems = $this->repo->getDraftList($this->request->all());

        return $this->success(compact('categories', 'portfolioItem'));
    }

    /**
     * Get all published PortfolioItem
     *
     * @return JsonResponse
     */
    public function getPublishedList()
    {
        $categories = $this->category->getAll();

        $portfolioItems = $this->repo->getPublishedList($this->request->all());

        return $this->success(compact('categories', 'portfolioItem'));
    }    

    /**
     * Get slider published PortfolioItem
     *
     * @return JsonResponse
     */
    public function getPortfolioItemSlider()
    {
        $grid = $this->repo->getPortfolioItemSlider(4);

        $portfolioItems = $this->repo->getPortfolioItemSlider(6);

        return $this->success(compact('grid', 'portfolioItem'));
    }    

    /**
     * Get post details
     *
     * @param string $slug
     *
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function show($slug)
    {
        $portfolioItem = $this->repo->getBySlug($slug);

        $this->authorize('show', $portfolioItem);

        return $this->success(compact('post'));
    }

    /**
     * Update post cover image
     *
     * @param int $id
     *
     * @return JsonResponse
     * @throws AuthorizationException
     * @throws ValidationException
     */
    public function uploadCover($id)
    {
        $portfolioItem = $this->repo->findOrFail($id);

       // $this->authorize('update', $portfolioItem);

        $image_path = config('system.upload_path.images') . '/';
        $image = $portfolioItem->cover;

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
        $img->crop(500, 250);
        $img->save($image_path . $filename . "." . $extension);
        $portfolioItem->cover = $image_path . $filename . "." . $extension;
        $portfolioItem->save();

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $portfolioItem->id,
            'sub_module' => 'cover',
            'activity' => 'uploaded'
        ]);

        return $this->success(['message' => trans('post.cover_uploaded'), 'image' => $image_path . $filename . "." . $extension]);
    }

    /**
     * Remove post cover image
     *
     * @param int $id
     *
     * @return JsonResponse
     * @throws AuthorizationException
     * @throws ValidationException
     */
    public function removeCover($id)
    {
        $portfolioItem = $this->repo->findOrFail($id);

       // $this->authorize('update', $portfolioItem);

        $image = $portfolioItem->img;

        if ($image && File::exists($image) && $image != config('config.default_cover')) {
            File::delete($image);
        }

       
        $portfolioItem->delete();

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $portfolioItem->id,
            'sub_module' => 'img ',
            'activity' => 'removed'
        ]);

        return $this->success(['message' => trans('post.cover_removed')]);
    }

    /**
     * Delete post
     *
     * @param string $slug
     *
     * @return JsonResponse
     * @throws \Exception
     * @throws AuthorizationException
     */
    public function destroy($slug)
    {
        $portfolioItem = $this->repo->getBySlug($slug);

        $this->authorize('delete', $portfolioItem);

        $this->activity->record([
            'module' => 'post',
            'sub_module' => $portfolioItem->is_draft ? 'draft' : 'post',
            'module_id' => $portfolioItem->id,
            'activity' => 'deleted'
        ]);

        $image = $portfolioItem->cover;

        if ($image && File::exists($image) && $image != config('config.default_cover')) {
            File::delete($image);
        }

        $portfolioItem->delete();

        return $this->success(['post' => trans('post.deleted', ['type' => trans('post.post')])]);
    }
}
