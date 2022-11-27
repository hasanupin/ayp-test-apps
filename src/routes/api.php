<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClaimSubmissionController;
use App\Http\Controllers\ClaimTypeController;

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

Route::get('claim', [ClaimSubmissionController::class, 'index']);
Route::get('claim/{id}', [ClaimSubmissionController::class, 'show']);
Route::post('claim', [ClaimSubmissionController::class, 'store']);
Route::get('claim-type', [ClaimTypeController::class, 'list']);
