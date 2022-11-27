<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claim_submission', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('claim_type_id');
            $table->string('staff_name', 100);
            $table->float('amount')->nullable();
            $table->date('request_date')->nullable();
            $table->enum('status',['approved', 'rejected', 'pending'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('claim_submission');
    }
};
