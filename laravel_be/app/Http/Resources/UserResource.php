<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $result = $this->first();
        return [
            'id' => $result->id,
            'name' => $result->name,
            'email' => $result->email,
            'created_at' => $result->created_at,
            'updated_at' => $result->updated_at,
        ];
    }
}
