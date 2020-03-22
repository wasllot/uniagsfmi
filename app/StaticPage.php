<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StaticPage extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	'title',
    	'subtitle',
    	'name',
    	'slug',
    	'cover'

    ];



    /**
     * Get cover image.
     *
     * @return string
     */
    public function getCoverAttribute()
    {
        return $this->attributes['cover'] ?: config('config.default_cover');
    }

 	/**
     * Scope a query to only include post with the given slug.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $slug
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterBySlug($query, $slug = null)
    {
        if (!$slug) {
            return $query;
        }

        return $query->where('slug', '=', $slug);
    }   
}
