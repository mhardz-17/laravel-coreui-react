<?php




Auth::routes();

Route::any('/', 'HomeController@index');

Route::group(['middleware' => ['auth']], function () {

    Route::any('trimeet/{id}/preview/{title}', 'API\TrimeetController@preview');
});

Route::get('{path}','HomeController@index')->where( 'path', '([A-z\d-/_.]+)?' );
