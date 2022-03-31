<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $guards = [];
    protected $table = 'orders_detail';

    public function customers(){
        return $this->hasOne(Customer::class, 'customer_id', 'receiver_id');
    }

    public function pruducts(){
        return $this->hasMany(Product::class, 'product_id', 'product_id');
    }
}
