<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_product' => 'required',
            'price_product' => 'required|numeric',
        ];
    }

    public function messages(){
        return [
            'name_product.required' => 'Tên sản phẩm không được bỏ trống',
            'price_product.required' => 'Giá sản phẩm không được bỏ trống',
            'price_product.numeric' => 'Giá sản phẩm phải là số',
        ];
    }
}
