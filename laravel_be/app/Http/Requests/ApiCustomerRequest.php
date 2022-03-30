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
            'number_phone' => 'required|regex:/(0)[0-9]{9}/|digits_between:8, 12',
        ];
    }

    public function messages(){
        return [
            '*.required' => ':attribute không được bỏ trống',
            'number_phone.regex' => ':attribute không đúng định dạng',
            'number_phone.digits_between' => ':attribute không đúng định dạng'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['status' => 422,'errors' => $validator->errors()]));
    }
}
