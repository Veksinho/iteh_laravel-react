<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('proizvodjaci','App\Http\Controllers\proizvodjacController@index');
Route::get('proizvodjaci/{id}','App\Http\Controllers\proizvodjacController@show');
Route::post('proizvodjaci/sacuvaj','App\Http\Controllers\Api\proizvodjacController@store');

Route::get('modeli','App\Http\Controllers\Api\modelController@index');
Route::post('modeli/sacuvaj','App\Http\Controllers\Api\modelController@store');
Route::delete('modeli/izbrisi/{id}','App\Http\Controllers\Api\modelController@destroy');
