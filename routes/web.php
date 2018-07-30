<?php

use App\Http\Controllers\AuthController; 

/*
 * Unprotected routes to initialize Application
 * 
 */

Route::get('appStatus', 'AdminController@appStatus');
Route::post('appInitialize', 'AdminController@appInitialize');

Route::post('login', 'AuthController@login');

$router->group(['middleware' => ['before' => 'jwt-auth']], function () use ($router) {

    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');


});


$router->get('/', function () use ($router) {
    return view('home');
});