<?php

use Illuminate\Http\Request;

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



Route::any('login', function (Request $request) {
    $client = new \GuzzleHttp\Client(['timeout'  => 5]);

    $response = $client->post(url('oauth/token'), [
        'form_params' => [
            'grant_type' => 'password',
            'client_id' => env('OAUTH_CLIENT_ID'),
            'client_secret' => env('OAUTH_CLIENT_SECRET'),
//            'username' => $request->username,
//            'password' => $request->password,
            'username' => 'admin@admin.com',
            'password' => 'admin',
            'scope' => '*',
        ],
    ]);

    // dd($response->getBody());

    return response()->json(json_decode((string) $response->getBody(), true));
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/user-test', function (Request $request) {
    return response()->json(
        ['name' => 'mardy', 'email' => 'mardy.codev@gmail.com'
        ]);
});
