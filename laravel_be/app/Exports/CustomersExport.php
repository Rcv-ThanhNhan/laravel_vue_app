<?php

namespace App\Exports;

use Illuminate\Http\Request;
use App\Models\Customer;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class CustomersExport implements FromCollection, WithHeadings
{

    protected $request;

    function __construct($request) {
            $this->request = $request;
    }


    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $lstCustomer = Customer::select('customer_id', 'customer_name', 'email', 'tel_num', 'address')
                       ->orderBy('customer_id', 'desc')
                       ->Name($this->request)
                       ->Email($this->request)
                       ->Address($this->request)
                       ->IsActive($this->request)
                       ->limit(10)
                       ->get();

        return $lstCustomer;
    }

    public function headings(): array
    {
        return [
            'STT',
            'Tên khác hàng',
            'Email',
            'Số điện thoại',
            'Địa chỉ',
        ];
    }

}
