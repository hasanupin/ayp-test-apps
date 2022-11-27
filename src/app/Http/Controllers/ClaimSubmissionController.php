<?php

namespace App\Http\Controllers;

use App\Models\ClaimSubmission;
use Exception;
use Validator;
use Illuminate\Http\Request;

class ClaimSubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        try {
            $result = ClaimSubmission::with('claim_type')->get();
            return $this->responseSuccess(true, "Successfull get data", $result);
        } catch (Exception $e) {
            return $this->responseException(400, $e->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $rules = [
                'claim_type_id' => 'required|int',
                'staff_name' => 'required|max:100',
                'amount' => 'required|int',
                'request_date' => 'required|date',
                'status' => 'required',
            ];

            $messages = [
                'required' => ':attribute is required.',
            ];

            $fieldNames = [
                'claim_type_id' => 'Claim Type',
                'staff_name' => 'Staff Name',
                'amount' => 'Amount',
                'request_date' => 'Request Date',
                'status' => 'Claim Status',
            ];

            $validator = Validator::make($request->claimSubmission, $rules, $messages);
            $validator->setAttributeNames($fieldNames);
            if ($validator->fails()) {
                return $this->responseSuccess(false, "Failed", $validator->errors());
            } else {
                $submitData = $request->claimSubmission;
                $claimSubmission = ClaimSubmission::create($submitData);
                return $this->responseSuccess(true, "Claim Submit Successfully", []);
            }
        } catch (Exception $e) {
            return $this->responseException(400, $e->getMessage());
        }
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClaimSubmission  $claimSubmission
     * @return \Illuminate\Http\Response
     */
    public function show(ClaimSubmission $claimSubmission, $id)
    {
        //
        try {
            $result = $claimSubmission::find($id);
            return $this->responseSuccess(true, "Successfull get data", $result);
        } catch (Exception $e) {
            return $this->responseException(400, $e->getMessage());
        }
    }
}
