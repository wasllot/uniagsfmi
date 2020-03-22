<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'parent_id',
        'url'
    ];


    /**
     * Scope a query to only include categories with the given name.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $name
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterByName($query, $name = null)
    {
        if (!$name) {
            return $query;
        }

        return $query->where('name', 'like', '%' . $name . '%');
    }



    /**
     * Get parent menu.
     *
     * @return string
     */
    public function parent()
    {
        return $this->hasMany(Menu::class, 'parent_id')->with('pages'); 
    }


    /**
     * Get menu pages.
     *
     * @return string
     */
    public function pages()
    {
        return $this->hasMany(Page::class); 
    }

}
