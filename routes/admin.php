<?php




Auth::routes();

Route::any('/', 'HomeController@index');

Route::group(['middleware' => ['auth']], function () {


});

Route::get('{path}','HomeController@index')->where( 'path', '([A-z\d-/_.]+)?' );
