<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/configuration/variable', 'ConfigurationController@getConfigurationVariable');
Route::post('/sendMail', 'HomeController@contactEmail');
Route::get('/page/main','PageController@getMainPage');
Route::get('/pages/by_views','PageController@getPagesByViews');
Route::get('/post/getPostSlider','PostController@getPostSlider');
Route::get('/menus', 'MenuController@getAllPages');
Route::get('/posts','PostController@getLatest');
Route::get('/teams','TeamController@getTeams');
Route::get('/teams/details/{slug}','TeamController@show');
Route::get('/blog','PostController@getBlog');
Route::get('/posts/list','PostController@blogPagination');

Route::get('/portfolio/pre-requisite','PortfolioItemController@preRequisite');
Route::get('/portfolio/','PortfolioItemController@pagination');


Route::group(['prefix' => 'posts'], function () {
    Route::get('/','PostController@getLatest');
    Route::get('/{category}/{slug}','PostController@getPublicPost');
});

Route::group(['prefix' => 'pages'], function () {
    Route::get('/','PageController@getPublicPages');
    Route::get('/{slug}','PageController@getPublicPage');
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', 'AuthController@authenticate');
    Route::post('/check', 'AuthController@check');
    Route::post('/register', 'AuthController@register');
    Route::get('/activate/{token}', 'AuthController@activate');
    Route::post('/password', 'AuthController@password');
    Route::post('/validate-password-reset', 'AuthController@validatePasswordReset');
    Route::post('/reset', 'AuthController@reset');
});

Route::group(['middleware' => ['jwt.auth']], function () {

    Route::get('/activity-log', 'ActivityLogController@index');
    Route::delete('/activity-log/{id}', 'ActivityLogController@destroy');

    Route::post('/auth/logout', 'AuthController@logout');
    Route::post('/auth/lock', 'AuthController@lock');
    Route::post('/change-password', 'AuthController@changePassword');

    Route::get('/configuration', 'ConfigurationController@index');
    Route::post('/configuration', 'ConfigurationController@store');
    Route::post('/configuration/image/{type}', 'ConfigurationController@uploadConfigImages');
    Route::delete('/configuration/image/{type}/remove', 'ConfigurationController@removeConfigImages');
    Route::get('/fetch/lists', 'ConfigurationController@fetchList');

    Route::get('/dashboard', 'HomeController@dashboard');

    Route::get('/locale', 'LocaleController@index');
    Route::post('/locale', 'LocaleController@store');
    Route::get('/locale/{id}', 'LocaleController@show');
    Route::patch('/locale/{id}', 'LocaleController@update');
    Route::delete('/locale/{id}', 'LocaleController@destroy');

    Route::get('/permission', 'PermissionController@index');
    Route::get('/permission/assign/pre-requisite', 'PermissionController@preRequisite');
    Route::get('/permission/{id}', 'PermissionController@show');
    Route::post('/permission', 'PermissionController@store');
    Route::delete('/permission/{id}', 'PermissionController@destroy');
    Route::post('/permission/assign', 'PermissionController@assignPermission');

    Route::get('/role', 'RoleController@index');
    Route::get('/role/{id}', 'RoleController@show');
    Route::post('/role', 'RoleController@store');
    Route::delete('/role/{id}', 'RoleController@destroy');

    Route::get('/user/pre-requisite', 'UserController@preRequisite');
    Route::get('/user/detail', 'UserController@detail');
    Route::get('/user', 'UserController@index');
    Route::get('/user/{id}', 'UserController@show');
    Route::post('/user', 'UserController@store');
    Route::post('/user/{id}/status', 'UserController@updateStatus');
    Route::patch('/user/{id}', 'UserController@update');
    Route::patch('/user/{id}/contact', 'UserController@updateContact');
    Route::patch('/user/{id}/force-reset-password', 'UserController@forceResetPassword');
    Route::patch('/user/{id}/email', 'UserController@sendEmail');
    Route::post('/user/profile/update', 'UserController@updateProfile');
    Route::post('/user/profile/avatar/{id}', 'UserController@uploadAvatar');
    Route::delete('/user/profile/avatar/remove/{id}', 'UserController@removeAvatar');
    Route::delete('/user/{id}', 'UserController@destroy');


    Route::get('/menus/pre-requisite', 'MenuController@preRequisite');
    Route::get('/menu', 'MenuController@index');
    Route::get('/menu/{id}', 'MenuController@show');
    Route::post('/menu', 'MenuController@store');
    Route::delete('/menu/{id}', 'MenuController@destroy');


    
    Route::get('/team/pre-requisite','TeamController@preRequisite');
    Route::post('/team/statistics','TeamController@statistics');
    Route::post('/team/new','TeamController@store');
    Route::get('/team/draft','TeamController@getDraftList');
    Route::get('/team/published','TeamController@getPublishedList');
    Route::delete('/team/{slug}','TeamController@destroy');
    Route::get('/team/{slug}','TeamController@show');
    Route::post('/team/upload/image','TeamController@uploadImage');
    Route::post('/team/cover/{id}', 'TeamController@uploadCover');
    Route::delete('/team/cover/remove/{id}', 'TeamController@removeCover');    

    Route::post('/portfolio/','PortfolioItemController@store');
    Route::post('/portfolio/image/', 'PortfolioItemController@uploadImage');
    Route::get('/portfolio/image/remove/{id}', 'PortfolioItemController@removeCover');


    Route::get('/post/pre-requisite','PostController@preRequisite');
    Route::post('/post/statistics','PostController@statistics');
    Route::post('/post/new','PostController@store');
    Route::get('/post/draft','PostController@getDraftList');
    Route::get('/post/published','PostController@getPublishedList');
    Route::delete('/post/{slug}','PostController@destroy');
    Route::get('/post/{slug}','PostController@show');
    Route::post('/post/upload/image','PostController@uploadImage');
    Route::post('/post/cover/{id}', 'PostController@uploadCover');
    Route::delete('/post/cover/remove/{id}', 'PostController@removeCover');

    Route::get('/category', 'CategoryController@index');
    Route::get('/category/{id}', 'CategoryController@show');
    Route::post('/category', 'CategoryController@store');
    Route::delete('/category/{id}', 'CategoryController@destroy');

    Route::post('/page/statistics','PageController@statistics');
    Route::post('/page/new','PageController@store');
    Route::post('/page/default/update','PageController@updateDefaultPage');
    Route::post('/page/main/update','PageController@storeMainPage');
    Route::get('/page/published','PageController@getPublishedList');
    Route::get('/page/default/published','PageController@getDefaultList');
    Route::delete('/page/{slug}','PageController@destroy');
    Route::get('/page/{slug}','PageController@show');
    Route::get('/default/page/{slug}','PageController@show');
    Route::get('/default/components','PageController@getComponents');
    Route::get('/info/{slug}','PageController@defaultPageView');
    Route::post('/page/cover/{id}', 'PageController@uploadCover');
    Route::post('/page/upload/image','PageController@uploadImage');
});