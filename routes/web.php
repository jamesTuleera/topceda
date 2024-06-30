<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use PHPUnit\Framework\Attributes\Group;

Route::middleware(['auth'])->group(function () {
    Route::inertia('/', 'User/Index')->name('home');
    Route::inertia('/dashboard', 'User/Index')->name('user.dashboard');
    Route::inertia('/profile', 'User/Profile')->name('user.profile');

    //PURCHASE
    Route::prefix('purchase')->group(function () {
        // sleep(2);
        Route::inertia('/airtime', 'User/Airtime')->name('user.airtime');
        Route::inertia('/cable', 'User/Cable')->name('user.cable');
        Route::inertia('/data', 'User/Data')->name('user.data');
        Route::inertia('/power', 'User/Power')->name('user.power');
    });

    Route::post('logout', [AuthController::class, 'logout'])->name('logout');

});

// Auth Route

Route::middleware('guest')->group(function () {
    Route::inertia('/register', 'Auth/Register')->name('register');
    Route::post('register', [AuthController::class, 'register'])->name('register');

    Route::inertia('/login', 'Auth/Login')->name('login');
    Route::post('login', [AuthController::class, 'login'])->name('login');


});
