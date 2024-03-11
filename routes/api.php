<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SocietyController;
use App\Http\Controllers\WorkhourController;


Route::get('/societies', [SocietyController::class, 'index']);
Route::get('/workhour', [WorkhourController::class, 'index']);
Route::post('/societies', [SocietyController::class, 'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
