<?php

namespace App\Policies;

use App\User;
use App\Team;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class TeamPolicy
{
    use HandlesAuthorization;

    /**
     * Authorize the action before the intended policy method is called.
     *
     * @param $user
     * @param $ability
     *
     * @return bool
     */
    public function before($user, $ability)
    {
        return $user->can('access-team');
    }

    /**
     * Determine whether the user can view all the teams.
     *
     * @param User $user
     *
     * @return bool
     */
    public function view(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can create teams.
     *
     * @param User $user
     *
     * @return bool
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the team.
     *
     * @param User $user
     * @param Team $team
     *
     * @return bool
     */
    public function show(User $user, Team $team)
    {
        return $team->user_id === $user->id || Auth::user()->hasRole('admin');
    }

    /**
     * Determine whether the user can update the team.
     *
     * @param User $user
     * @param Team $team
     *
     * @return bool
     */
    public function update(User $user, Team $team)
    {
        return $team->user_id === $user->id || Auth::user()->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the team.
     *
     * @param User $user
     * @param Team $team
     *
     * @return bool
     */
    public function delete(User $user, Team $team)
    {
        return $team->user_id === $user->id || Auth::user()->hasRole('admin');
    }
}
