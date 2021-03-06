<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
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

Route::get('/', function(){
    return redirect()->route('login.index');
});

Route::resource('/login', LoginController::class);
Route::get('/register', [LoginController::class, 'register'])->name('register');
Route::post('/register', [LoginController::class, 'register'])->name('register.store');

Route::get('/logout', [LoginController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::resource('/user-management', UserController::class);
    Route::resource('/customer-management', CustomerController::class);
    Route::resource('/product-management', ProductController::class);
    Route::resource('/order-management', OrderController::class);
    Route::get('/export-customer', [CustomerController::class, 'export'])->name('export.customer');
    Route::post('/import-customer', [CustomerController::class, 'import'])->name('import.customer');
});
