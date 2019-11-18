<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;;

/**
 * App\Profile
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $slug
 * @property string|null $body
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read string|null $stripped_body
 */
class MainPage extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6'
    ];


    /**
     * Scope a query to only include page with the given id.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param int|null $id
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilterById($query, $id = null)
    {
        if (!$id) {
            return $query;
        }

        return $query->where('id', '=', $id);
    }
}
