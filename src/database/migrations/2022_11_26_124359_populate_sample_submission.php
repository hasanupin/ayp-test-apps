<?php

use Carbon\Carbon;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        DB::table('claim_submission')->insert(
            [
                array(
                    'claim_type_id' => 2,
                    'staff_name' => 'Hasan',
                    'amount' => '10000',
                    'request_date' => '2022-11-01',
                    'status' => 'approved',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ),
                array(
                    'claim_type_id' => 3,
                    'staff_name' => 'Endric',
                    'amount' => '10000',
                    'request_date' => '2022-11-01',
                    'status' => 'approved',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ),
                array(
                    'claim_type_id' => 1,
                    'staff_name' => 'Daniel',
                    'amount' => '200',
                    'request_date' => '2022-11-01',
                    'status' => 'pending',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ),
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //There is no backward migration for this one.
    }
};
