<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ApiRegisterRequest;

use App\Http\Resources\User\UsersCollection;
use App\Http\Resources\User\UserResource;

use App\Models\User;

use Illuminate\Support\Facades\Hash;

class ApiUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UsersCollection(User::where('is_delete', 0)->orderBy('id', 'desc')->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\ApiRegisterRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApiRegisterRequest $request)
    {
        $userCheck = User::whereEmail($request->email)->where('is_delete', 0)->first();
        if($userCheck){
            return response()->json(['errors' => ['email' => 'Email đã tồn tại'], 'status' => 422]);
        }
        $data = [
            'name' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->passwd),
            'group_role' => $request->group,
            'is_active' => $request->is_active ? $request->is_active : 0,
        ];
        if(User::create($data)){
            return response()->json(['message' => 'Thêm người dùng thành công']);
        }
        return response()->json(['error' => 'Thêm người dùng thất bại']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['data' => User::find($id)]);
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
        $user = User::find($id);
        $errors = [];
        if(!$user){
            $errors = [
                'status' => 500,
                'error' => 'Chỉnh sửa người dùng thất bại'
            ];
        }

        else if($request->email){
            $errors = [
                'status' => 422,
                'errors' => ['email' => 'Không thể thay đổi email']
            ];
        }

        if($errors){
            return response()->json($errors);
        }

        $data = [
            'name' => $request->username,
            'group_role' => $request->group,
            'is_active' => $request->is_active ? $request->is_active : 0,
        ];

        if($user->update($data)){
            return response()->json(['status' => 200, 'message' => 'Chỉnh sửa người dùng thành công']);
        }
        return response()->json(['status' => 500, 'error' => 'Chỉnh sửa người dùng thất bại']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateStatus(Request $request)
    {
        $user = User::find($request->id);
        if(!$user){
            return response()->json(['status' => 500, 'error' => 'Cập nhật thất bại']);
        }
        $status = $user->is_active == 1 ? 0 : 1;
        $user->is_active = $status;
        if($user->update()){
            return response()->json(['status' => 200, 'message' => 'Cập nhật thành công']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if(!$user){
            return response()->json(['status' => 500, 'error' => 'Xóa người dùng thất bại']);
        }

        $user->is_delete = !$user->is_delete;

        if($user->update()){
            return response()->json(['status' => 200, 'message' => 'Xóa người dùng thành công']);
        }
    }

    /**
     *
     * @param Request $request
     *
     * @return void
     */
    public function userInfo(Request $request){
        return response()->json(auth()->user());
    }

    /**
     * Method search
     *
     * @param Request $request
     *
     * @return void
     */
    public function search(Request $request){
        $users = User::Name($request)
                    ->Email($request)
                    ->Group($request)
                    ->IsActive($request)
                    ->where('is_delete', 0)
                    ->orderBy('id', 'desc')
                    ->paginate();

        $users->appends([
            'name' => $request->name,
            'email' => $request->email,
            'group' => $request->group,
            'status' => $request->status,
        ]);

        return new UsersCollection($users);
    }
}
