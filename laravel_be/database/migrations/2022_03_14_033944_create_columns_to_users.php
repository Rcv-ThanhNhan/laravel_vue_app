<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColumnsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('is_active')->length(1)->default(1)->comment('0: Không hoạt động, 1: hoạt động')->after('password');
            $table->integer('is_delete')->length(1)->default(0)->comment('0: bình thường, 1: đã xóa')->after('password');
            $table->string('group_role')->after('password');
            $table->string('last_login_at')->nullable()->after('password');
            $table->string('last_login_ip')->nullable()->after('password');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
