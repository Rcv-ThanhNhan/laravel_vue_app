<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ApiLoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Hash;
use Auth;

class ApiLoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApiLoginRequest $request)
    {
        $email = $request->email;
        $pwd = $request->password;
        $remember = $request->remember ? true : false;
        if(Auth::attempt(['email' => $email, 'password' => $pwd], $remember)){
            $user = User::whereEmail($email)->first();
            if(!$user->is_active){
                return response()->json(['error' => 'Tài khoản đã bị khóa']);
            }
            $token = $user->createToken("App")->plainTextToken;
            $user->token = $token;
            $request->user()->forceFill([
                'api_token' => hash('sha256', $token),
            ])->save();
            return new UserResource($user);
        }
        return response()->json(['error' => 'Tài khoản hoặc mật khẩu không chính xác']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
