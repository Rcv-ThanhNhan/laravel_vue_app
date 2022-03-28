<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\CustomersExport;
use App\Imports\CustomersImport;
use Maatwebsite\Excel\Facades\Excel;

use App\Models\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pages.customer_management');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function export(Request $request)
    {
        $lstCustomer = Customer::orderBy('customer_id', 'desc')
                                    ->Name($request)
                                    ->Email($request)
                                    ->Address($request)
                                    ->IsActive($request)
                                    ->limit(10)
                                    ->get();

        if($lstCustomer->isEmpty()){
            return back()->with([
                                    'isEmpty' => 'no value'
                                ]
                            )
                        ->withInput($request->input());
        }
        return Excel::download(new CustomersExport($request), 'customer.xlsx');
    }
    /**
     * Method import
     *
     * @param Request $request
     *
     * @return void
     */
    public function import(Request $request)
    {
        $file =  $request->file('file_import')->store('tem');
        $import = new CustomersImport;
        $import->import($file);

        if($import->failures()->isNotEmpty()){
            return back()->withFailures($import->failures())->with('successCount', $import->getRowCount());
        }

        return back()->with(['success'=> 'Thêm khách hàng thành công', 'successCount' => $import->getRowCount()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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
