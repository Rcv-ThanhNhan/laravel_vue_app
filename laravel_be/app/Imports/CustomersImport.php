<?php

namespace App\Imports;

use App\Models\Customer;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;

use Maatwebsite\Excel\Concerns\SkipsFailures;
// use Maatwebsite\Excel\Concerns\SkipsOnError;
// use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;

class CustomersImport implements
    ToCollection,
    WithStartRow,
    WithValidation,
    SkipsOnFailure
{
    use Importable, SkipsFailures;

    /**
     * @return int
     */
    public function startRow(): int
    {
        return 2;
    }

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row)
        {
            Customer::create([
                'customer_name' => $row[1],
                'email'         => $row[2],
                'tel_num'       => $row[3],
                'address'       => $row[4],
                'is_active'     => 0,
            ]);
        }
    }

    public function rules(): array
    {
        return [
            '*.1' => 'required',
            '*.2' => 'required|email|unique:App\Models\Customer,email',
            '*.3' => 'required|numeric',
            '*.4' => 'required',
        ];
    }

    /**
     * @return array
     */
    public function customValidationMessages()
    {
        return [
            '*.*.required' => ':attribute không được bỏ trống',
            '*.2.email' => ':attribute không đúng định dạng',
            '*.2.unique' => ':attribute đã được sử dụng',
            '*.3.numeric' => ':attribute không đúng định dạng',
            '*.1.min' => ':attribute quá ngắn tối thiểu :min ký tự',
        ];
    }

    /**
     * @return array
     */
    public function customValidationAttributes()
    {
        return [
            '1' => 'Tên khách hàng',
            '2' => 'Email',
            '3' => 'địa chỉ',
            '4' => 'is_active',
        ];
    }

    // /**
    //  * @param Failure $failures
    //  */
    // public function onFailure(Failure ...$failures)
    // {
    //     return $failures;
    // }
}
