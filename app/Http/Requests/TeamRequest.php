<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'title' => 'sometimes|required',
            'name' => 'sometimes|required',
            'slogan' => 'sometimes|required',
            'body' => 'sometimes|required',
            'slug' => 'sometimes|required',
            'category_id' => 'sometimes|required',
        ];
    }

    /**
     * Translate fields with user friendly name.
     *
     * @return array
     */

    public function attributes()
    {
        return [
            'title' => trans('team.title'),
            'body' => trans('team.body'),
            'category_id' => trans('category.category'),
            'name' => trans('team.name'),
            'slogan' => trans('team.slogan'),
            'slug' => trans('team.slug')
        ];
    }
}
