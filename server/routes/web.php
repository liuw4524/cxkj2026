<?php

use App\Http\Controllers\PlayerController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/t/{shareCode}', [PlayerController::class, 'show'])->name('tours.player');
