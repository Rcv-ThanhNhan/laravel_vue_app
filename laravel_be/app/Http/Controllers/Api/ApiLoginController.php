<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ApiLoginRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class ApiLoginController extends Controller
{
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
        if(!Auth::attempt(['email' => $email, 'password' => $pwd])){
            return response()->json(['error' => 'Tài khoản hoặc mật khẩu không chính xác'], 401);
        }

        $user = User::whereEmail($email)->first();
        if(!$user->is_active){
            return response()->json(['error' => 'Tài khoản đã bị khóa'], 401);
        }

        $token = $user->createToken('App')->plainTextToken;
        return UserResource::make($user)->additional(['data' => ['token' => $token]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
