<?php

namespace App\Repositories;

use App\Category;
use App\Team;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use DB;

class TeamRepository
{
    /**
     * @var Team
     */
    protected $team;

    /**
     * Instantiate a new controller instance.
     *
     * @param Team $team
     */
    public function __construct(Team $team)
    {
        $this->team = $team;
    }

    /**
     * Get published posts.
     *
     * @param array $params
     *
     * @return Team[]|Collection
     */
    public function getTeams($params = [])
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');
        $search_query = isset($params['search_query']) ? $params['search_query'] : null;
        $category_id = isset($params['category_id']) ? $params['category_id'] : null;
        $created_at_start_date = isset($params['created_at_start_date']) ? $params['created_at_start_date'] : null;
        $created_at_end_date = isset($params['created_at_end_date']) ? $params['created_at_end_date'] : null;

        $published = $this->team
            ->with('category')
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
     * Get valid team by slug.
     *
     * @param string $slug
     *
     * @return Post
     * @throws ValidationException
     */
    public function getBySlug($slug)
    {
        $team = $this->team->with('category')
            ->filterBySlug($slug)
            ->first();

        if (!$team) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_link')]);
        }

        return $team;
    }


    /**
     * Count teams
     *
     * @return int
     */
    public function count()
    {
        return $this->team->filterByIsDraft(0)->count();
    }

    /**
     * Count team published between dates
     *
     * @param string $start_date
     * @param string $end_date
     *
     * @return int
     */

    public function countDateBetween($start_date, $end_date)
    {
        return $this->team->filterByIsDraft(0)->createdAtDateBetween(['start_date' => $start_date, 'end_date' => $end_date])->count();
    }



    /**
     * Find team by Id
     *
     * @param int|null $id
     *
     * @return Team
     * @throws ValidationException
     */
    public function findOrFail($id = null)
    {
        $teams = $this->team->find($id);

        if (!$teams) {

            throw ValidationException::withMessages(['message' => trans('team.not_found')]);
        }

        return $teams;
    }

    /**
     * Publish team or save draft.
     *
     * @param array $params
     *
     * @return Team
     * @throws ValidationException
     */
    public function create($params = [])
    {
        $id = isset($params['id']) ? $params['id'] : null;
        $is_draft = (isset($params['is_draft']) && $params['is_draft']) ? $params['is_draft'] : 0;

        if ($id) {

            $team = $this->team->filterById($id)->first();
            if (!$team) {
                throw ValidationException::withMessages(['message' => trans('team.invalid_action')]);
            }
        }

        $team = ($id) ? $this->team->find($id) : $this->team;
        $team->fill([
            'title' => $params['title'],
            'subtitle' => $params['subtitle'],
            'body' => $params['body'],
            'category_id' => $params['category_id'],
        ]);

        if (!$id) {

            $team->setUniqueSlug($params['title']);
        }

        $team->is_draft = $is_draft;

        $team->save();

        return $team;
    }


    /**
     * Get draft teams.
     *
     * @return Team[]|Collection
     */
    public function getDraft()
    {
        return $this->team->filterByIsDraft(1)->get();
    }

    /**
     * Get draft teams.
     *
     * @param array $params
     *
     * @return Team[]|Collection
     */

    public function getDraftList($params = [])
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');
        $search_query = isset($params['search_query']) ? $params['search_query'] : null;
        $category_id = isset($params['category_id']) ? $params['category_id'] : null;
        $created_at_start_date = isset($params['created_at_start_date']) ? $params['created_at_start_date'] : null;
        $created_at_end_date = isset($params['created_at_end_date']) ? $params['created_at_end_date'] : null;

        $draft = $this->team
            ->with('category')
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
     * Get published teams.
     *
     * @param array $params
     *
     * @return Post[]|Collection
     */
    public function getPublishedList($params = [])
    {
        $page_length = isset($params['page_length']) ? $params['page_length'] : config('config.page_length');
        $search_query = isset($params['search_query']) ? $params['search_query'] : null;
        $category_id = isset($params['category_id']) ? $params['category_id'] : null;
        $created_at_start_date = isset($params['created_at_start_date']) ? $params['created_at_start_date'] : null;
        $created_at_end_date = isset($params['created_at_end_date']) ? $params['created_at_end_date'] : null;

        $published = $this->team
            ->with('category')
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
}
