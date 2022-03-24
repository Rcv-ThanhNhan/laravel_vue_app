<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiCustomerRequest extends FormRequest
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
            'name' => 'required',
            'address' => 'required',
            'email' => 'required|email:rfc,dns',
            'number_phone' => 'required|numeric|digits_between:8, 12',
        ];
    }

    public function messages(){
        return [
            'name.required' => 'Tên không được bỏ trống',
            'address.required' => 'Địa chỉ không được bỏ trống',
            'email.required' => 'Email không được bỏ trống',
            'email.email' => 'Email không đúng định dạng',
            'number_phone.required' => 'Số điện thoại không được bỏ trống',
            'number_phone.numeric' => 'Số điện thoại không đúng định dạng',
            'number_phone.digits_between' => 'Số điện thoại không đúng định dạng',
        ];
    }
}
