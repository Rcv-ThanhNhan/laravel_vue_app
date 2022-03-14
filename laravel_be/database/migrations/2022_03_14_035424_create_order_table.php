<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('order_id')->length(11)->index()->unique();
            $table->string('order_shop', 40);
            $table->integer('customer_id')->length(11);
            $table->integer('total_price')->length(11);
            $table->integer('payment_method')->length(4)->comment('1: COD, 2: Paypal, 3: GMO');
            $table->integer('ship_charge');
            $table->integer('tax');
            $table->datetime('order_date');
            $table->datetime('shipment_date');
            $table->integer('order_status')->length(1);
            $table->datetime('cancel_date');
            $table->string('note_customer')->nullable();
            $table->string('error_code_api', 20)->nullable();
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
        Schema::dropIfExists('order');
    }
}
