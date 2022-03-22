<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        for($i = 0; $i < $this->collection->count(); $i++){
            $id = ($this->collection)[$i]->product_id;
            if($id < 10){
                $id = substr(($this->collection)[$i]->product_name, 0,1).'00000000'.$id;
            }
            else if($id >= 10){
                $id = substr(($this->collection)[$i]->product_name, 0,1).'0000000'.$id;
            }
            else if($id >= 100){
                $id = substr(($this->collection)[$i]->product_name, 0,1).'000000'.$id;
            }
            else if($id >= 1000){
                $id = substr(($this->collection)[$i]->product_name, 0,1).'00000'.$id;
            }
            else{
                $id = substr(($this->collection)[$i]->product_name, 0,1).'0000'.$id;
            }
            ($this->collection)[$i]->code = $id;
        }
        return [
            'data' => view('pages.components.list_products', ['data' => $this->collection, 'page' => $request->page])->render(),
        ];
    }
}
