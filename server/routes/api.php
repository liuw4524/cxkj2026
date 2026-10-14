<?php

use App\Http\Controllers\Api\AdminHotspotController;
use App\Http\Controllers\Api\AdminSceneController;
use App\Http\Controllers\Api\AdminStandpointController;
use App\Http\Controllers\Api\AdminTourController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PublicTourController;
use Illuminate\Support\Facades\Route;

Route::post('/admin/login', [AuthController::class, 'login'])->middleware('throttle:10,1');

Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/tours', [AdminTourController::class, 'index']);
    Route::post('/tours', [AdminTourController::class, 'store']);
    Route::get('/tours/{tour}', [AdminTourController::class, 'show']);
    Route::match(['put', 'patch'], '/tours/{tour}', [AdminTourController::class, 'update']);
    Route::delete('/tours/{tour}', [AdminTourController::class, 'destroy']);
    Route::post('/tours/{tour}/publish', [AdminTourController::class, 'publish']);
    Route::post('/tours/{tour}/unpublish', [AdminTourController::class, 'unpublish']);

    Route::post('/tours/{tour}/scenes', [AdminSceneController::class, 'store']);
    Route::match(['put', 'patch'], '/tours/{tour}/scenes/{scene}', [AdminSceneController::class, 'update']);
    Route::delete('/tours/{tour}/scenes/{scene}', [AdminSceneController::class, 'destroy']);
    Route::post('/tours/{tour}/scenes/{scene}/entry', [AdminSceneController::class, 'entry']);

    Route::post('/tours/{tour}/scenes/{scene}/standpoints', [AdminStandpointController::class, 'store']);
    Route::match(['put', 'patch'], '/tours/{tour}/standpoints/{standpoint}', [AdminStandpointController::class, 'update']);
    Route::delete('/tours/{tour}/standpoints/{standpoint}', [AdminStandpointController::class, 'destroy']);

    Route::post('/tours/{tour}/scenes/{scene}/hotspots', [AdminHotspotController::class, 'store']);
    Route::match(['put', 'patch'], '/tours/{tour}/hotspots/{hotspot}', [AdminHotspotController::class, 'update']);
    Route::delete('/tours/{tour}/hotspots/{hotspot}', [AdminHotspotController::class, 'destroy']);
});

Route::get('/tours/{shareCode}', [PublicTourController::class, 'show']);
