<?php

namespace App\Exports;

use App\Models\Customer;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use \Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class CustomersExport implements FromCollection, WithHeadings, WithMapping, WithColumnWidths, WithStyles
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
        return Customer::select('customer_name', 'email', 'tel_num', 'address')
                       ->orderBy('customer_id', 'desc')
                       ->Name($this->request)
                       ->Email($this->request)
                       ->Address($this->request)
                       ->IsActive($this->request)
                       ->limit(10)
                       ->get();

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

    private $count = 0;

    /**
    * @var Invoice $invoice
    */
    public function map($invoice): array
    {
        return [
            ++$this->count,
            $invoice->customer_name,
            $invoice->email,
            $invoice->tel_num,
            $invoice->address,
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 5,
            'B' => 30,
            'C' => 30,
            'D' => 20,
            'E' => 40,
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            'A' => [
                'font' => [
                    'bold' => true
                ],
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                ],
            ],
        ];
    }
}
