<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ApiCustomerRequest;

use App\Http\Resources\Customer\CustomerResource;
use App\Http\Resources\Customer\CustomersCollection;

use App\Models\Customer;

class ApiCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new CustomersCollection(Customer::orderBy('customer_id', 'desc')->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApiCustomerRequest $request)
    {
        $customerCheck = Customer::whereEmail($request->email)->first();

        if($customerCheck){
            return response()->json(['status'=> 422, 'errors' => ['email' => 'Email đã tồn tại']]);
        }

        $data = [
            'customer_name' => $request->name,
            'email' => $request->email,
            'tel_num' => $request->number_phone,
            'address' => $request->address,
            'is_active' => $request->is_active ? $request->is_active : 0,
        ];

        if(Customer::create($data)){
            return response()->json(['message' => 'Thêm người dùng thành công']);
        }
        return response()->json(['message' => 'Thêm người dùng thất bại']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['data' => Customer::where(['customer_id'=> $id])->first()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ApiCustomerRequest $request, $id)
    {
        $customer = Customer::where('customer_id', $id);

        if(!$customer){
            return response()->json(['status' => 422, 'errors' => 'Chỉnh sửa người dùng thất bại']);
        }

        $data = [
            'customer_name' => $request->name,
            'email' => $request->email,
            'tel_num' => $request->number_phone,
            'address' => $request->address,
            'is_active' => $customer->first()->is_active,
        ];

        if($customer->update($data)){
            return response()->json(['message' => 'Chỉnh sửa người dùng thành công']);
        }
        return response()->json(['message' => 'Chỉnh sửa người dùng thất bại']);
    }

    /**
     * Method search
     *
     * @param Request $request
     *
     * @return void
     */
    public function search(Request $request){
        $customer = Customer::Name($request)
                    ->Email($request)
                    ->Address($request)
                    ->IsActive($request)
                    ->orderBy('customer_id', 'desc')
                    ->paginate();

        $customer->appends([
            'name' => $request->name,
            'email' => $request->email,
            'group' => $request->group,
            'status' => $request->status,
        ]);

        return new CustomersCollection($customer);
    }

}
