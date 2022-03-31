<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $perPage = 10;

    protected $guards = [];

    public function ordersDetail(){
        return $this->hasOne('orders_detail', 'order_id', 'order_id');
    }

    public function customer(){
        return $this->hasOne('customers', 'customer_id', 'customer_id');
    }


    /**
     * Method scopeName
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeId($query, $request){
        if($request->has('code_order') && $request->code_order != ''){
            $query->where('order_id', 'like', '%'.$request->code_order.'%');
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
            $query->where('order_date', 'like', '%'.$request->from_date.'%');
        }
    }

    /**
     * Method scopeGroup
     *
     * @param $query $query [explicite description]
     * @param $request $request [explicite description]
     *
     * @return void
     */
    public function scopeGroup($query, $request){
        if($request->has('group') && $request->group != ''){
            $query->where('group_role', $request->group);
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
    public function scopeIsActive($query, $request){
        if($request->has('status') && $request->status != ''){
            $query->where('is_active', $request->status);
        }
    }
}
