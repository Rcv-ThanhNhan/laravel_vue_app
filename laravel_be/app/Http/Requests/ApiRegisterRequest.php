<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ApiRegisterRequest extends FormRequest
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
            'username' => 'required',
            'email' => 'email:rfc,dns',
            'passwd' => 'between:6,32',
            'passwd_confirm' => 'same:passwd',
            'group' => 'required',
        ];
    }

    public function messages(){
        return [
            'email.email' => ':attribute không đúng định dạng',
            'passwd.between' => ':attribute phải nhiều hơn :min và ít hơn :max ký tự',
            'passwd_confirm.same' => 'Mật khẩu và mật khẩu xác nhận không khớp',
            'passwd_confirm.between' => ':attribute phải nhiều hơn :min và ít hơn :max ký tự',
            'group.required' => 'Vui lòng chọn nhóm người dùng',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['status' => 422,'errors' => $validator->errors()], 200));
    }
}
