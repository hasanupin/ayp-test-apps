<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimSubmission extends Model
{
    protected $table = 'claim_submission';
    protected $fillable = ['claim_type_id', 'staff_name', 'amount', 'request_date', 'status'];

    public function claim_type()
    {
        return $this->belongsTo(ClaimType::class , 'claim_type_id', 'id');
    }
}
