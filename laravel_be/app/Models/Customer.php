<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'email',
        'tel_num',
        'address',
        'is_active',
    ];

    // public function order(){
    //     return $this->hasOne('Order', 'customer_id', 'customer_id');
    // }

    /**
     * quanlity of page
     *
     * @var int
     */
    protected $perPage = 10;

    /**
     * Method scopeName
     *
     * @param $query $query
     * @param $request $request
     *
     * @return void
     */
    public function scopeName($query, $request){
        if($request->has('name') && $request->name != ''){
            $query->where('customer_name', 'like', '%'.$request->name.'%');
        }
    }

    /**
     * Method scopeEmail
     *
     * @param $query $query
     * @param $request $request
     *
     * @return void
     */
    public function scopeEmail($query, $request){
        if($request->has('email') && $request->email != ''){
            $query->where('email', 'like', '%'.$request->email.'%');
        }
    }

    /**
     * Method scopeGroup
     *
     * @param $query $query
     * @param $request $request
     *
     * @return void
     */
    public function scopeAddress($query, $request){
        if($request->has('address') && $request->address != ''){
            $query->where('address', 'like', '%'.$request->address.'%');
        }
    }

    /**
     * Method scopeIsActive
     *
     * @param $query $query
     * @param $request $request
     *
     * @return void
     */
    public function scopeIsActive($query, $request){
        if($request->has('status') && $request->status != ''){
            $query->where('is_active', $request->status);
        }
    }
}
