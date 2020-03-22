<?php

namespace App\Repositories;

use App\Page;
use App\MainPage;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use DB;

class PageRepository
{
    /**
     * @var Page
     */
    protected $page;

    /**
     * Instantiate a new controller instance.
     *
     * @param Page $page
     */
    public function __construct(Page $page)
    {
        $this->page = $page;
    }

    /**
     * Count pages
     *
     * @return int
     */
    public function count()
    {
        return $this->page->count();
    }

    /**
     * Get valid page by slug.
     *
     * @param string $slug
     *
     * @return Page
     * @throws ValidationException
     */
    public function getBySlug($slug)
    {
        $page = $this->page
            ->filterBySlug($slug)
            ->first();

        if (!$page) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_link')]);
        }

        

        return $page;
    }    

    /**
     * Get default valid page by slug.
     *
     * @param string $slug
     *
     * @return Page
     * @throws ValidationException
     */
    public function getDefaultBySlug($slug)
    {
        $page = DB::table('static_pages')->where('slug', $slug)->first();


        if (!$page) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_link')]);
        }

        return $page;
    }

    /**
     * Get valid page by slug for guests.
     *
     * @param string $slug
     *
     * @return Page
     */
    public function getBySlugForGuests($slug)
    {
        $page = $this->page
            ->filterBySlug($slug)
            ->first();

        if (!$page) {
            return null;
        }

        return $page;
    }

    /**
     * Find page by Id
     *
     * @param int|null $id
     *
     * @return Page
     * @throws ValidationException
     */
    public function findOrFail($id = null)
    {
        $page = $this->page->find($id);

        if (!$page) {
            throw ValidationException::withMessages(['message' => trans('page.could_not_find')]);
        }

        return $page;
    }

    /**
     * Find main page by Id
     *
     * @param int|null $id
     *
     * @return Page
     * @throws ValidationException
     */
    public function mainPage($id = null)
    {
        $page = DB::table('main_pages')->where('id', $id)->first();

        if (!$page) {
            throw ValidationException::withMessages(['message' => trans('page.could_not_find')]);
        }

        return $page;
    }

    /**
     * Publish page.
     *
     * @param array $params
     *
     * @return Page
     * @throws ValidationException
     */
    public function create($params = [])
    {
        $id = isset($params['id']) ? $params['id'] : null;

        if ($id) {
            $page = $this->page->filterById($id)->first();
            if (!$page) {
                throw ValidationException::withMessages(['message' => trans('page.invalid_action')]);
            }
        }
        $page = ($id) ? $this->page->find($id) : $this->page;
        $page->fill([
            'title' => $params['title'],
            'slug' => str_slug($params['title']),
            'body' => $params['body'],
            'menu_id' => $params['menu_id'], 
        ]);

        if (!$id) {
            $slug = str_slug($params['title']);
            if (Page::whereSlug($slug)->exists()) {
                throw ValidationException::withMessages(['message' => trans('page.slug_exists')]);
            }
            $page->fill([
                'slug' => $slug,
            ]);
        }

        $page->save();

        return $page;
    }

    public function page_count($id){
        $page = $this->page->findOrFail($id);
        $page->count = $page->count + 1; 
        $page->save();
    }    


    /**
     * update main page.
     *
     * @param array $params
     *
     * @return Page
     * @throws ValidationException
     */
    public function storeDefaultPage($params = [])
    {
        $id = isset($params['id']) ? $params['id'] : null;

        if ($id) {

            $page = DB::table('static_pages')->where('id', $id)->update([
            'title' => $params['title'],
            'body' => $params['body'],
            'slug' => str_slug($params['title'])
            ]);    
        }

        return $page;
    }    

    /**
     * update main page.
     *
     * @param array $params
     *
     * @return Page
     * @throws ValidationException
     */
    public function storeMainPage($params = [])
    {
            $page = DB::table('main_pages')->where('id', 1)->update([
                'section_1' => $params['section_1'],
                'section_2' => $params['section_2'],
                'section_3' => $params['section_3'],
                'section_4' => $params['section_4'],
                'section_5' => $params['section_5'],
                'section_6' => $params['section_6']
            ]);    
  
        return $page;
    }

    /**
     * Get published pages.
     *
     * @return Page[]|Collection
     */
    public function getPublished()
    {
        return $this->page->get();
    }

    /**
     * Get published pages.
     *
     * @param array $params
     *
     * @return Page[]|Collection
     */
    public function getPublishedList($params = [])
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');

        $published = $this->page;

        if (!isset($params['page_length'])) {
            return $published->get();
        }

        return $published->orderBy('created_at', 'desc')->paginate($page_length);
    }

       /**
     * Get latest pages.
     *
     * @param array $params
     *
     * @return Post[]|Collection
     */
    public function getlatest($length)
    {         
        return $this->page->orderBy('created_at', 'desc')->paginate($length);
    }
       

    /**
     * Get related pages.
     *
     * @param array $params
     *
     * @return Post[]|Collection
     */
    public function getRelatedPages($menu_id, $length)
    {         
        return $this->page->where('menu_id', $menu_id)->orderBy('created_at', 'desc')->paginate($length);
    }

    /**
     * Get most views pages.
     *
     * @param array $params
     *
     * @return Post[]|Collection
     */
    public function getMostViews($length)
    {         
        return $this->page->orderBy('count', 'desc')->paginate($length);
    }


    /**
     * Get default pages.
     *
     * @param array $params
     *
     * @return Page[]|Collection
     */
    public function getDefaultList()
    {

      return $page = DB::table('static_pages')->get();
        
    }    

    /**
     * Get components.
     *
     * @param array $params
     *
     * @return Page[]|Collection
     */
    public function getComponents()
    {

      return $page = DB::table('components')->get();
        
    }
}
