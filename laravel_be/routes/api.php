<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\Api\ApiLoginController;
use App\Http\Controllers\Api\ApiUserController;
use App\Http\Controllers\Api\ApiCustomerController;
use App\Http\Controllers\Api\ApiProductController;
use App\Http\Controllers\Api\ApiOrderController;

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
    '/login-api' => ApiLoginController::class,
    '/user' => ApiUserController::class,
    '/customer' => ApiCustomerController::class,
    '/product' => ApiProductController::class,
    '/order' => ApiOrderController::class,
]);

Route::get('/user-info',[ ApiUserController::class, 'userInfo'])->middleware('auth:sanctum');
Route::post('/user/update-status',[ ApiUserController::class, 'updateStatus']);
Route::get('/search-user',[ ApiUserController::class, 'search']);

Route::get('/search-customer',[ ApiCustomerController::class, 'search']);

Route::get('/search-product',[ ApiProductController::class, 'search']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

