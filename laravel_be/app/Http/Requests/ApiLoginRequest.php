<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiLoginRequest extends FormRequest
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

            'username' => 'required|email:rfc,dns',
            'password' => 'required|between:4, 32'
        ];
    }

    public function messages()
    {
        return [
            '*.required' => 'Trường không được bỏ trống',
            'username.email' => 'Email không đúng định dạng',
            'password.between' => 'Mật khẩu phải lớn hơn :min và nhỏ hơn :max',
        ];
    }
}
