<?php

namespace App\Repositories;

use App\Category;
use App\PortfolioItem;
use App\StaticPage;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use DB;

class PortfolioItemRepository
{
    /**
     * @var PortfolioItem
     */
    protected $portfolioItem;

    /**
     * Instantiate a new controller instance.
     *
     * @param PortfolioItem $portfolioItem
     */
    public function __construct(PortfolioItem $portfolioItem)
    {
        $this->PortfolioItem = $portfolioItem;
    }

    /**
     * Get published PortfolioItems.
     *
     * @param array $params
     *
     * @return PortfolioItem[]|Collection
     */
    public function getPortfolioItems($params = [])
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');
        $search_query = isset($params['search_query']) ? $params['search_query'] : null;
        $category_id = isset($params['category_id']) ? $params['category_id'] : null;
        $created_at_start_date = isset($params['created_at_start_date']) ? $params['created_at_start_date'] : null;
        $created_at_end_date = isset($params['created_at_end_date']) ? $params['created_at_end_date'] : null;

        $published = $this->PortfolioItem
            ->with('user', 'user.profile', 'category')
            ->filterByIsDraft(0)
            ->filterBySearchQuery($search_query)
            ->filterByCategoryId($category_id)
            ->createdAtDateBetween([
                'start_date' => $created_at_start_date,
                'end_date' => $created_at_end_date
            ]);

        if (!isset($params['page_length'])) {
            return $published->get();
        }

        return $published->orderBy('created_at', 'desc')->paginate(2);
    }    

    /**
     * Get latest PortfolioItems.
     *
     * @param array $params
     *
     * @return PortfolioItem[]|Collection
     */
    public function getlatest($length)
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');
        $search_query = isset($params['search_query']) ? $params['search_query'] : null;
        $category_id = isset($params['category_id']) ? $params['category_id'] : null;
        $created_at_start_date = isset($params['created_at_start_date']) ? $params['created_at_start_date'] : null;
        $created_at_end_date = isset($params['created_at_end_date']) ? $params['created_at_end_date'] : null;

        $published = $this->PortfolioItem
            ->with('user', 'user.profile', 'category')
            ->filterByIsDraft(0)
            ->filterBySearchQuery($search_query)
            ->filterByCategoryId($category_id)
            ->createdAtDateBetween([
                'start_date' => $created_at_start_date,
                'end_date' => $created_at_end_date
            ]);
            
        return $published->orderBy('created_at', 'desc')->paginate($length);
    }

    /**
     * Get published PortfolioItems grid.
     *
     * @param array $params
     *
     * @return PortfolioItem[]|Collection
     */
    public function getPortfolioItemsSlider($qty)
    {
       $published = $this->PortfolioItem
            ->with('user', 'user.profile', 'category')
            ->filterByIsDraft(0);

        return $published->orderBy(DB::raw('RAND()'))->take($qty)->get();
    }

    /**
     * Get PortfolioItem query.
     *
     * @return PortfolioItem
     */
    public function getQuery()
    {
        return $this->PortfolioItem->with('user', 'user.profile')->filterByIsDraft(0);
    }

    /**
     * Count PortfolioItems
     *
     * @return int
     */
    public function count()
    {
        return $this->PortfolioItem->filterByIsDraft(0)->count();
    }

    /**
     * Count PortfolioItem published between dates
     *
     * @param string $start_date
     * @param string $end_date
     *
     * @return int
     */
    public function countDateBetween($start_date, $end_date)
    {
        return $this->PortfolioItem->filterByIsDraft(0)->createdAtDateBetween(['start_date' => $start_date, 'end_date' => $end_date])->count();
    }

    /**
     * Get valid PortfolioItem by slug.
     *
     * @param string $slug
     *
     * @return PortfolioItem
     * @throws ValidationException
     */
    public function getBySlug($slug)
    {
        $portfolioItem = $this->PortfolioItem->with('user', 'user.profile', 'category')
            ->filterBySlug($slug)
            ->filterByUserId(\Auth::user()->id)
            ->first();

        if (!$portfolioItem) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_link')]);
        }

        return $portfolioItem;
    }

    /**
     * Get valid PortfolioItem by category and slug.
     *
     * @param string $category
     * @param string $slug
     *
     * @return PortfolioItem
     */
    public function getByCategoryAndSlug($category, $slug)
    {
        $category = Category::where('slug', $category)->first();

        if (!$category) {
            return null;
        }

        $portfolioItem = $this->PortfolioItem->with('user', 'user.profile', 'category')
            ->filterByCategoryAndSlug($category, $slug)
            ->first();

        if (!$portfolioItem) {
            return null;
        }

        return $portfolioItem;
    }

    /**
     * Find PortfolioItem by Id
     *
     * @param int|null $id
     *
     * @return PortfolioItem
     * @throws ValidationException
     */
    public function findOrFail($id = null)
    {
        $portfolioItem = $this->PortfolioItem->find($id);

        if (!$portfolioItem) {
            throw ValidationException::withMessages(['message' => trans('PortfolioItem.could_not_find')]);
        }

        return $portfolioItem;
    }    

    /**
     * Find blog by slug
     *
     * @param int|null $id
     *
     * @return PortfolioItem
     * @throws ValidationException
     */
    public function getBlog($slug = null)
    {
        //$blog = StaticPage::where('slug', $slug)->first();

        $blog = StaticPage::filterBySlug($slug)
            ->first();

        if (!$blog) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_link')]);
        }

        return $blog;

    }

    /**
     * Publish PortfolioItem or save draft.
     *
     * @param array $params
     *
     * @return PortfolioItem
     * @throws ValidationException
     */
    public function create($params = [])
    {

        $id = isset($params['id']) ? $params['id'] : null;
        $is_draft = (isset($params['is_draft']) && $params['is_draft']) ? $params['is_draft'] : 0;

        if ($id) {
            $portfolioItem = $this->PortfolioItem->filterByUserId(\Auth::user()->id)->first();
            if (!$portfolioItem) {
                throw ValidationException::withMessages(['message' => trans('PortfolioItem.invalid_action')]);
            }
        }
        $portfolioItem = ($id) ? $this->PortfolioItem->find($id) : $this->PortfolioItem;
        $portfolioItem->fill([
            'title' => $params['title'],
            'subtitle' => $params['subtitle'],
            'img' => $params['img'],
            'category_id' => $params['category_id'],
        ]);

        if (!$id) {
            $portfolioItem->user_id = \Auth::user()->id;
        }

        $portfolioItem->save();

        return $portfolioItem;
    }

    /**
     * Get published PortfolioItems.
     *
     * @return PortfolioItem[]|Collection
     */
    public function getPublished()
    {
        return $this->PortfolioItem->filterByUserId(\Auth::user()->id)->filterByIsDraft(0)->get();
    }

    /**
     * Get draft PortfolioItems.
     *
     * @return PortfolioItem[]|Collection
     */
    public function getDraft()
    {
        return $this->PortfolioItem->filterByUserId(\Auth::user()->id)->filterByIsDraft(1)->get();
    }

    /**
     * Get draft PortfolioItems.
     *
     * @param array $params
     *
     * @return PortfolioItem[]|Collection
     */
    public function getDraftList($params = [])
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');
        $search_query = isset($params['search_query']) ? $params['search_query'] : null;
        $category_id = isset($params['category_id']) ? $params['category_id'] : null;
        $created_at_start_date = isset($params['created_at_start_date']) ? $params['created_at_start_date'] : null;
        $created_at_end_date = isset($params['created_at_end_date']) ? $params['created_at_end_date'] : null;

        $draft = $this->PortfolioItem
            ->with('user', 'user.profile', 'category')
            ->filterByUserId(\Auth::user()->id)
            ->filterByIsDraft(1)
            ->filterBySearchQuery($search_query)
            ->filterByCategoryId($category_id)
            ->createdAtDateBetween([
                'start_date' => $created_at_start_date,
                'end_date' => $created_at_end_date
            ]);

        if (!isset($params['page_length'])) {
            return $draft->get();
        }

        return $draft->orderBy('created_at', 'desc')->paginate($page_length);
    }

    /**
     * Get published PortfolioItems.
     *
     * @param array $params
     *
     * @return PortfolioItem[]|Collection
     */
    public function getPublishedList($params = [])
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');
        $search_query = isset($params['search_query']) ? $params['search_query'] : null;
        $category_id = isset($params['category_id']) ? $params['category_id'] : null;
        $created_at_start_date = isset($params['created_at_start_date']) ? $params['created_at_start_date'] : null;
        $created_at_end_date = isset($params['created_at_end_date']) ? $params['created_at_end_date'] : null;

        $published = $this->PortfolioItem
            ->with('user', 'user.profile', 'category')
            ->filterByUserId(\Auth::user()->id)
            ->filterByIsDraft(0)
            ->filterBySearchQuery($search_query)
            ->filterByCategoryId($category_id)
            ->createdAtDateBetween([
                'start_date' => $created_at_start_date,
                'end_date' => $created_at_end_date
            ]);

        if (!isset($params['page_length'])) {
            return $published->get();
        }

        return $published->orderBy('created_at', 'desc')->paginate($page_length);
    }



    /**
     * pagination PortfolioItems.
     *
     *
     * @return PortfolioItem[]|Collection
     */


   public function pagination($length){

        return PortfolioItem::with('user', 'user.profile','category')->orderBy('id', 'desc')->paginate($length);

   }
   
}
