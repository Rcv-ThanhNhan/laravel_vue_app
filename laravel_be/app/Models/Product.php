<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $perPage = 10;

    protected $fillable = [
        'product_id',
        'product_name',
        'product_image',
        'product_price',
        'is_sale',
        'description',
    ];

    public function shops(){
        return $this->hasMany(Shop::class, 'shop_id', 'shop_id');
    }

    /**
     * Method scopeName
     *
     * @param $query $query
     * @param $request $request
     *
     * @return void
     */
    public function scopeName($query, $request){
        if($request->has('name_product') && $request->name_product != ''){
            $query->where('product_name', 'like', '%'.$request->name_product.'%');
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
    public function scopePrice($query, $request){
        $price_from = $request->has('price_from') && $request->price_from != '' ? $request->price_from : 0;
        if($request->has('price_to') && $request->price_to != ''){
            $query->whereBetween('product_price', [$price_from, $request->price_to]);
        }
        else{
            $query->where('product_price', '>', $price_from);
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
    public function scopeIsSale($query, $request){
        if($request->has('status_product') && $request->status_product != ''){
            $query->where('is_sale', $request->status_product);
        }
    }
}
