<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UsersCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // try {
        //     view('pages.components.list_users', ['data' => $this->collection])->render();
        // } catch (\Throwable $th) {
        //     dd($th->getMessage(), $th->getLine());
        // }
        return [
            'data' => view('pages.components.list_users', ['data' => $this->collection])->render(),
        ];
    }
}
