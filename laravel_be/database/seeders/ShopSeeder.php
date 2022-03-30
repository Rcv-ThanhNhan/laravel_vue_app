<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Shop;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'shop_id' => '1',
                'shop_name' => 'Amazon'
            ],
            [
                'shop_id' => '2',
                'shop_name' => 'Yahoo'
            ],
            [
                'shop_id' => '3',
                'shop_name' => 'Amazon'
            ]
        ];
        foreach($data as $v){
            Shop::create($v);
        }
    }
}
