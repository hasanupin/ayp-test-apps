<?php

namespace App\Http\Controllers;

use App\Models\ClaimType;
use Exception;

class ClaimTypeController extends Controller
{
    //
    public function list()
    {
        try {
            $result = ClaimType::where('status','Active')->get();
            return $this->responseSuccess(true, "Successfull get data", $result);
        } catch (Exception $e) {
            return $this->responseException(400, $e->getMessage());
        }
    }
}
