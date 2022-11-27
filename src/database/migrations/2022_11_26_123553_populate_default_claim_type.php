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
        DB::table('claim_type')->insert(
            [
                array(
                    'id' => 1,
                    'name' => 'Transportation',
                    'status' => 'Active',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ),
                array(
                    'id' => 2,
                    'name' => 'Medical',
                    'status' => 'Active',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ),
                array(
                    'id' => 3,
                    'name' => 'Cash Advance',
                    'status' => 'Active',
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
        //
        DB::table('claim_type')->delete(1);
        DB::table('claim_type')->delete(2);
        DB::table('claim_type')->delete(3);
    }
};
