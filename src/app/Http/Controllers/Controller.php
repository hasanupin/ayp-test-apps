<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function responseSuccess($success, $message, $data = "") {
        $arrayResponse = [
            'status' => 200,
            'success' => $success,
            'message' => $message,
            'data' => $data,
        ];
        return response()->json($arrayResponse);
    }

    function responseException($status, $message){
        $arrayResponse = [
            'status' => $status,
            'success' => false,
            'message' => $message,
        ];
        return response()->json($arrayResponse);
    }
}
