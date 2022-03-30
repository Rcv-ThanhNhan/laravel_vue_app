<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ApiLoginRequest;
use App\Models\User;
use Hash;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(!Auth::check()){
            return view('pages.login');
        }
        return redirect()->route('user-management.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApiLoginRequest $request)
    {
        $email = $request->username;
        $pwd = $request->password;
        $remember = $request->remember ? true : false;
        $user = User::whereEmail($email)->first();
        $errorLogin = '';
        if($user){
            if($user->is_active == 0){
                $errorLogin = 'Tài khoản đã bị khóa';
            }
            if($user->is_delete == 1){
                $errorLogin = 'Email không tồn tại';
            }
        }

        if($errorLogin != ''){
            return back()->with('errorLogin', $errorLogin)->withInput($request->only('username'));
        }

        if(Auth::attempt(['email' => $email, 'password' => $pwd], $remember)){
            return redirect()->route('user-management.index');
        }
        return back()->with('errorLogin', 'Tên tài khoản hoặc mật khẩu không chính xác')->withInput($request->only('username'));
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login.index');
    }

    public function register(){
        return view('pages.register');
    }
}
