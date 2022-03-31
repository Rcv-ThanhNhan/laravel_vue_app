<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\Customer\CustomerResource;
class OrdersCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $collection = [
            'data' => $this->collection,
            'page' => $request->page
        ];
        return [
            'data' => view('pages.components.list_orders', $collection)->render(),
        ];
    }
}
