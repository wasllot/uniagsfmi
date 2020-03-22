<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PortfolioItem extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'category_id',
        'title',
        'subtitle',
        'img'
    ];

     /**
     * Get the user that owns the portfolio item.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the category.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Scope a query to only include user portfolio.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param int|null $user_id
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByUserId($query, $user_id = null)
    {
        if (!$user_id || Auth::user()->hasRole('admin')) {
            return $query;
        }

        return $query->where('user_id', '=', $user_id);
    }

}
