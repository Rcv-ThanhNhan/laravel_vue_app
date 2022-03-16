<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'email' => 'required|email',
            'passwd' => 'required|between:8, 32',
            'passwd_confirm' => 'required|between:8, 32|same:passwd',
            'group' => 'required',
        ];
    }

    public function messages(){
        return [
            '*.required' => 'Trường không được bỏ trống',
            'email.email' => 'Email không đúng định dạng',
            'passwd.between' => 'Mật khẩu phải nhiều hơn :min và ít hơn :max ký tự',
            'passwd_confirm.same' => 'Mật khẩu và mật khẩu xác nhận không khớp',
            'group.required' => 'Vui lòng chọn nhóm người dùng',
        ];
    }
}
