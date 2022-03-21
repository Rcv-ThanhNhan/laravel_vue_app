<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('product_id', 20)->index()->unique();
            $table->string('product_name');
            $table->string('product_image')->nullable();
            $table->decimal('product_price', 11, 0);
            $table->integer('is_sale')->length(1)->default(1)->comment('0: Dừng bán hoặc dừng sản xuất, 1: có hàng bán');
            $table->text('description')->nullable();
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
        Schema::dropIfExists('product');
    }
}
