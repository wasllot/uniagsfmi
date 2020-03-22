<?php

namespace App\Repositories;

use App\Menu;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;

class MenuRepository
{
    /**
     * @var Menu
     */
    protected $menu;

    /**
     * Instantiate a new Repository instance.
     *
     * @param Menu $menu
     */
    public function __construct(Menu $menu)
    {
        $this->Menu = $menu;
    }

    /**
     * Get all menus
     *
     * @return array
     */
    public function getAll()
    {
        return $this->Menu->with('parent')->get();
    }


    /**
     * Get all parent menus
     *
     * @return array
     */
    public function getParents()
    {
        return $this->Menu->where('parent_id', 0)->get();
    }    

    /**
     * Get all children menus
     *
     * @return array
     */
    public function getChildren()
    {
        return $this->Menu->where('parent_id !=', 0)->get();
    }

    /**
     * List all Menu names
     *
     * @return array
     */
    public function list()
    {
        return $this->Menu->pluck('name', 'id')->all();
    }

    /**
     * Get Menu by name
     *
     * @param string|null $name
     *
     * @return Menu
     */
    public function findByName($name = null)
    {
        return $this->Menu->filterByName($name)->first();
    }

    /**
     * List all menus by name where given name is not included
     *
     * @param array|null $names
     *
     * @return array
     */
    public function listExceptName($names = [])
    {
        return $this->Menu->whereNotIn('name', $names)->get()->pluck('name', 'id')->all();
    }

    /**
     * List all menus by ids
     *
     * @param array $ids
     *
     * @return array
     */
    public function listNameById($ids = [])
    {
        $ids = is_array($ids) ? $ids : ($ids) ? [$ids] : [];

        return $this->Menu->whereIn('id', $ids)->get()->pluck('name')->all();
    }

    /**
     * List all Menu names only
     *
     * @return array
     */
    public function listName()
    {
        return $this->Menu->all()->pluck('name')->all();
    }

    /**
     * Find activity log with given id or throw an error.
     *
     * @param int $id
     *
     * @return Menu
     * @throws ValidationException
     */
    public function findOrFail($id)
    {
        $menu = $this->Menu->find($id);

        if (!$menu) {
            return '-';
        }

        return $menu;
    }

    /**
     * Paginate all activity logs using given params.
     *
     * @param array $params
     *
     * @return LengthAwarePaginator
     */
    public function paginate($params)
    {
        $sort_by = isset($params['sort_by']) ? $params['sort_by'] : 'created_at';
        $order = isset($params['order']) ? $params['order'] : 'desc';
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');

        return $this->Menu->with('parent')->orderBy($sort_by, $order)->paginate($page_length);
    }   

     /**
     * get all menu pages
     *
     * @param array $params
     *
     * @return LengthAwarePaginator
     */
    public function getAllPages($params)
    {
        $sort_by = isset($params['sort_by']) ? $params['sort_by'] : 'created_at';
        $order = isset($params['order']) ? $params['order'] : 'desc';


        return $this->Menu->with('pages', 'parent')->where('parent_id', 0)->orderBy($sort_by, $order)->get();
    }

    /**
     * Find Menu and check if it can be deleted or not.
     *
     * @param int $id
     *
     * @return Menu
     * @throws ValidationException
     */
    public function deletable($id)
    {
        $menu = $this->findOrFail($id);


        return $menu;
    }

    /**
     * Delete activity log.
     *
     * @param Menu $menu
     *
     * @return bool|null
     * @throws \Exception
     */
    public function delete(Menu $menu)
    {
        try {
            Menu::where('parent_id', $menu->id);
            return $menu->delete();
        } catch (QueryException $e) {
            if ($e->errorInfo[1] === 1451) {
                throw ValidationException::withMessages(['message' => trans('Menu.integrity_constraint_violation')]);
            } else {
                throw $e;
            }
        }
    }

    /**
     * Delete multiple activity logs.
     *
     * @param array $ids
     *
     * @return bool|null
     * @throws \Exception
     */
    public function deleteMultiple($ids = array())
    {
        return $this->Menu->whereIn('id', $ids)->delete();
    }
}
