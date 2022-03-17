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
        $r = $this->first();
        return [
            'id' => $r->id,
            'name' => $r->name,
            'email' => $r->email,
            'group_role' => $r->group_role,
            'is_active' => $r->is_active,
            'is_delete' => $r->is_delete,
            'token' => $r->token,
            'created_at' => $r->created_at,
            'updated_at' => $r->updated_at,
        ];
    }
}
