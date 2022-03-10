<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;

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

Route::apiResources([
    '/register' => RegisterController::class,
    '/login' => LoginController::class,
    '/user' => UserController::class,
]);

Route::get('/user-info',[ UserController::class, 'userInfo'])->middleware('auth:sanctum');

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
