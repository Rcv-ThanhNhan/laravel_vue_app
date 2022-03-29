<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ApiProductRequest;

use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Product\ProductsCollection;

use App\Models\Product;

use Illuminate\Support\Facades\File;

class ApiProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ProductsCollection(Product::orderBy('created_at', 'desc')->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApiProductRequest $request)
    {
        $file_name = 'no_image.png';
        if($request->hasFile('img_product')){
            $file_name = date("Y-m-d-H-i-s").'-'.$request->file('img_product')->getClientOriginalName();
            $request->file('img_product')->move ('upload/images', $file_name, 'local');
        }
        $data = [
            'product_id' => createIdProduct($request->name_product),
            'product_name' => $request->name_product,
            'product_price' => $request->price_product,
            'description' => $request->desc,
            'product_image' => $file_name,
            'is_sale' => $request->status ? $request->status : 0,
        ];
        if(Product::create($data)){
            return response()->json(['message' => 'Thêm sản phẩm thành công']);
        }
        return response()->json(['message' => 'Thêm sản phẩm thất bại']);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ApiProductRequest $request, $id)
    {
        $product = Product::where('product_id', $id);
        if(!$product){
            return response()->json(['error' => 'Không tìm thấy sản phẩm'], 500);
        }

        $old_file = $request->img_product_name;
        $img = $product->first()->product_image;
        $file_name = $old_file;
        if($old_file != $img && $old_file != null){
            if(File::exists(public_path('upload/images/'.$img))){
                File::delete(public_path('upload/images/'.$img));
            };
            $new_file = $request->file('img_product');
            $file_name = date("Y-m-d-H-i-s").'-'.$new_file->getClientOriginalName();

            $request->file('img_product')->move('upload/images', $file_name, 'local');
        }

        $data = [
            'product_name' => $request->name_product,
            'product_price' => $request->price_product,
            'description' => $request->desc,
            'product_image' => $file_name,
            'is_sale' => $request->status ? $request->status : 0,
        ];
        if($product->update($data)){
            return response()->json(['message' => 'Chỉnh sửa người dùng thành công'], 200);
        }
        return response()->json(['error' => 'Chỉnh sửa người dùng thất bại'], 500);
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

        if(File::exists(public_path('upload/images/'.$product->first()->product_image))){
            File::delete(public_path('upload/images/'.$product->first()->product_image));
        };

        if($product->delete()){
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
