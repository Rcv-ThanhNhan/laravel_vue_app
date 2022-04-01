<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Order;
use App\Models\OrderDetail;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        $limit = 30;

        for ($i = 0; $i < $limit; $i++) {
            $customer =  $faker->numberBetween(1, 90);
            $quantity = $faker->numberBetween(1,5);
            $price_buy = $faker->numberBetween(10000, 9000000);
            $tax = 10;
            $total_price = ($quantity*$price_buy) + (($quantity*$price_buy)*0.1);

            $id = Order::create([
                'order_shop' => $faker->name,
                'customer_id' => $customer,
                'total_price' => $total_price,
                'payment_method' =>  $faker->numberBetween(1, 3),
                'ship_charge' => $faker->numberBetween(1000, 90000),
                'order_date' => \Carbon\Carbon::now(),
                'tax' => $tax,
                'shipment_date' => \Carbon\Carbon::tomorrow(),
                'order_status' => 1,
                'cancel_date' => \Carbon\Carbon::tomorrow()->addDays(5),
                'note_customer' => $faker->text(50),
                'error_code_api' => 200,
            ])->order_id;
            OrderDetail::create([
                'order_id' => $id ?: 1,
                'detail_line' => $faker->numberBetween(1,5),
                'product_id' => $faker->numberBetween(1,50),
                'price_buy' => $price_buy,
                'quantity' => $quantity,
                'shop_id' => $faker->numberBetween(1,3),
                'receiver_id' => $customer,
            ]);
        }
    }
}
