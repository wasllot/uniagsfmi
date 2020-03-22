<?php

namespace App\Http\Controllers;

use App\Menu;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\MenuRequest;
use Illuminate\Validation\ValidationException;
use App\Repositories\MenuRepository;
use App\Repositories\ActivityLogRepository;

class MenuController extends Controller
{
        /**
     * @var Request
     */
    protected $request;

    /**
     * @var MenuRepository
     */
    protected $repo;

    /**
     * @var ActivityLogRepository
     */
    protected $activity;

    /**
     * @var string
     */
    protected $module = 'menu';

    /**
     * Instantiate a new controller instance
     *
     * @param Request $request
     * @param MenuRepository $repo
     * @param ActivityLogRepository $activity
     */
    public function __construct(Request $request, MenuRepository $repo, ActivityLogRepository $activity)
    {
        $this->request = $request;
        $this->repo = $repo;
        $this->activity = $activity;

        //$this->middleware('permission:access-Menu');
        $this->middleware('permission:access-page')->except(['preRequisite', 'index', 'getAllPages']);
    }


    /**
     * Get pre-requisites for menu module
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */


    public function preRequisite()
    {
        //$this->authorize('create', Team::class);

        return generateSelect($this->repo->list());
    }

    /**
     * Get all menus
     *
     * @return LengthAwarePaginator
     */
    public function index()
    {
        return $this->repo->paginate($this->request->all());
    }    

    /**
     * Get all menu pages
     *
     * @return LengthAwarePaginator
     */
    public function getAllPages()
    {
        return $this->repo->getAllPages($this->request->all());
    }

    /**
     * Store Menu
     *
     * @param MenuRequest $request
     *
     * @return JsonResponse
     */
    public function store(MenuRequest $request)
    {
        if (Menu::where('slug', str_slug(request('name')))->exists()) {
            return $this->error(['message' => trans('Menu.exists')]);
        }
        $menu = Menu::create([
            'name' => request('name'),
            'slug' => str_slug(request('name')),
            'parent_id'=> request('parent_id')
        ]);

        $this->activity->record([
            'module' => $this->module,
            'module_id' => $menu->id,
            'activity' => 'added'
        ]);

        return $this->success(['message' => trans('Menu.added')]);
    }

    /**
     * @param int $id
     *
     * @return \App\Menu
     * @throws ValidationException
     */
    public function show($id)
    {
        return $this->repo->findOrFail($id);
    }

    /**
     * Delete Menu
     *
     * @param int $id
     *
     * @return JsonResponse
     * @throws ValidationException
     * @throws \Exception
     */
    public function destroy($id)
    {
        $menu = $this->repo->deletable($id);
        $this->activity->record([
            'module' => $this->module,
            'module_id' => $menu->id,
            'activity' => 'deleted'
        ]);

        $this->repo->delete($menu);

        return $this->success(['message' => trans('Menu.deleted')]);
    }

    public function test(){

        $menus = $this->repo->getAll();

        foreach ($menus as $key => $value) {
            
            var_dump($value->parent);
        }
    }
}
