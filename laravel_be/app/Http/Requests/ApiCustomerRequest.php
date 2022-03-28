<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

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
            'name' => 'required|max:191',
            'address' => 'required|max:191',
            'email' => 'required|email:rfc,dns|max:191',
            'number_phone' => 'required|numeric|digits_between:8, 12',
        ];
    }

    public function messages(){
        return [
            'name.required' => 'Tên không được bỏ trống',
            'address.required' => 'Địa chỉ không được bỏ trống',
            'email.required' => ':attribute không được bỏ trống',
            'email.email' => ':attribute không đúng định dạng',
            'number_phone.required' => 'Số điện thoại không được bỏ trống',
            'number_phone.numeric' => 'Số điện thoại không đúng định dạng',
            'number_phone.digits_between' => 'Số điện thoại không đúng định dạng',
            '*.max' => ':attribute quá dài'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['status' => 422,'errors' => $validator->errors()]));
    }
}
