<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Order\OrdersCollection;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order;

class ApiOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new OrdersCollection(Order::orderBy('order_id', 'desc')->paginate());
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['data' => Order::where(['order_id'=> $id])->first()]);
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
        $order = Order::where('order_id', $id)->first();
        $response = '';
        if(!$order){
            $response = ['status' => 500, 'error' => 'Cập nhật người dùng thất bại'];
        }
        if($response != ''){
            return response()->json($response);
        }

        $data = [
            'order_status' => $request->status
        ];

        $query = $order->update($data);

        if($query){
            return response()->json(['message'=> 'Cập nhật thành công']);
        }
        return response()->json(['status' => 500, 'error' => 'Cập nhật người dùng thất bại']);
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

    /**
     * Method search
     *
     * @param Request $request
     *
     * @return void
     */
    public function search(Request $request){
        $users = Order::idOrder($request)
                    ->orderDate($request)
                    ->isOrderConfirmed($request)
                    ->orderBy('order_id', 'desc')
                    ->paginate();

        $users->appends([
            'order_id' => $request->order_code,
            'order_date' => $request->from_date,
            'order_status' => $request->status,
        ]);

        return new OrdersCollection($users);
    }
}
