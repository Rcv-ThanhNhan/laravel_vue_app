<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        $limit = 50;

        for ($i = 0; $i < $limit; $i++) {
            $name = $faker->name;
            $id = createIdProduct($name);
            Product::insert([
                'product_id' => $id,
                'product_name' => $name,
                'product_price' => $faker->numberBetween($min = 1000, $max = 900000),
                'product_image' => $faker->imageUrl($width = 100, $height = 100),
                'is_sale' => 1,
                'description' => $faker->text,
                'created_at' =>  \Carbon\Carbon::now()
            ]);
                sleep(1);
        }
    }
}
