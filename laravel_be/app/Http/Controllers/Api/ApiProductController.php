<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ApiProductRequest;

use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Product\ProductsCollection;

use App\Models\Product;

class ApiProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ProductsCollection(Product::orderBy('product_id', 'desc')->paginate());
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
    public function store(ApiProductRequest $request)
    {
        $file_name = date("Y-m-d-H-i-s").'-'.$request->file('img_product')->getClientOriginalName();
        $data = [
            'product_name' => $request->name_product,
            'product_price' => $request->price_product,
            'description' => $request->desc,
            'image' => $file_name,
            'is_sale' => $request->status ? $request->status : 0,
        ];

        if($request->file('img_product')->move ('upload/images', $file_name, 'local')){
            if(Product::create($data)){
                return response()->json(['message' => 'Thêm sản phẩm thành công']);
            }
        }
        return response()->json(['error' => 'Thêm sản phẩm thất bại'], 500);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['data' => Product::where(['product_id'=> $id])->first()]);
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
        // $product = Product::where('product_id', $id);
        // if(!$product){
        //     return response()->json(['status' => 422, 'error' => 'Chỉnh sửa người dùng thất bại']);
        // }

        // $data = [
        //     'product_name' => $request->name,
        //     'tel_num' => $request->number_phone,
        //     'address' => $request->address,
        //     'is_active' => $request->is_active ? $request->is_active : 0,
        // ];

        // if($product->update($data)){
        //     return response()->json(['status' => 200, 'message' => 'Chỉnh sửa người dùng thành công']);
        // }
        // return response()->json(['status' => 422, 'error' => 'Chỉnh sửa người dùng thất bại']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::where('product_id', $id);
        if(!$product){
            return response()->json(['error' => 'Xóa sản phẩm thất bại'], 500);
        }

        $product->is_sale = !$product->is_sale;

        if($product->update()){
            return response()->json(['message' => 'Xóa sản phẩm thành công'], 200);
        }
    }

    /**
     * Method search
     *
     * @param Request $request
     *
     * @return void
     */
    public function search(Request $request){
        $customer = Product::Name($request)
                    ->Price($request)
                    ->IsSale($request)
                    ->orderBy('product_id', 'desc')
                    ->paginate();

        $customer->appends([
            'name' => $request->name,
            'email' => $request->email,
            'group' => $request->group,
            'status' => $request->status,
        ]);

        return new ProductsCollection($customer);
    }

}
