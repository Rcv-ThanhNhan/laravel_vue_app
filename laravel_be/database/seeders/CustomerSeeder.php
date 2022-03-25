<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Customer;

class CustomerSeeder extends Seeder
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
            Customer::insert([
                'customer_name' => $faker->name,
                'email' => $faker->unique()->email,
                'address' => $faker->address,
                'tel_num' => '0123456789',
                'is_active' => 1
            ]);
        }
    }
}
