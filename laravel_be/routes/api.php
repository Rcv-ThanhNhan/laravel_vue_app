<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\Api\ApiLoginController;
use App\Http\Controllers\Api\ApiUserController;

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
    '/login' => ApiLoginController::class,
    '/user' => ApiUserController::class,
]);

Route::get('/user-info',[ ApiUserController::class, 'userInfo'])->middleware('auth:sanctum')->name('user.info');
Route::post('/user/update-status',[ ApiUserController::class, 'updateStatus']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
