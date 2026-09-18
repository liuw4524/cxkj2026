<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MemorialController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\OfferingController;
use Illuminate\Support\Facades\Route;

Route::post('/auth/wechat', [AuthController::class, 'wechat']);
Route::post('/auth/dev', [AuthController::class, 'dev']);

Route::get('/memorials/{token}', [MemorialController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/memorials', [MemorialController::class, 'store']);
    Route::post('/memorials/{memorial}/offerings', [OfferingController::class, 'store']);
    Route::post('/memorials/{memorial}/messages', [MessageController::class, 'store']);
});
