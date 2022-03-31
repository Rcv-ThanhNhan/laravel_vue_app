<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $perPage = 10;

    protected $guarded = [];

    protected $primaryKey  = 'order_id';

    public function ordersDetail(){
        return $this->hasOne('orders_detail', 'order_id', 'order_id');
    }

    public function customers(){
        return $this->belongsTo(Customer::class, 'customer_id', 'customer_id');
    }

    /**
     * Method scopeName
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeIdOrder($query, $request){
        if($request->has('order_code') && $request->order_code != ''){
            $query->where('order_id', 'like', '%'.$request->order_code.'%');
        }
    }

    /**
     * Method scopeEmail
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeOrderDate($query, $request){
        if($request->has('from_date') && $request->from_date != ''){
            $query->whereDate('order_date', '>=', $request->from_date);
        }
    }

    /**
     * Method scopeIsActive
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeIsOrderConfirmed($query, $request){
        if($request->has('status') && $request->status != ''){
            $query->where('order_status', $request->status);
        }
    }
}
