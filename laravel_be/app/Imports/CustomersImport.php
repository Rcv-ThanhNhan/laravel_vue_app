<?php

namespace App\Imports;

use App\Models\Customer;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;

class CustomersImport implements ToCollection, WithStartRow, SkipsOnFailure
{
    use Importable, SkipsErrors, SkipsFailures;

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
            '*.*.required' => 'Không được bỏ trống',
            '*.2.email' => 'Dòng :row Email không đúng định dạng',
            '*.2.unique' => 'Dòng :row Email đã được đăng ký',
            '*.3.numeric' => 'Số điện không đúng định dạng',
            '*.1.min' => 'Tên quá ngắn tối thiểu :min ký tự',
        ];
    }

    /**
     * @return array
     */
    public function customValidationAttributes()
    {
        return [
            '1' => 'name',
            '2' => 'email',
            '3' => 'address',
            '4' => 'is_active',
        ];
    }

    /**
     * @param Failure $failures
     */
    public function onFailure(Failure ...$failures)
    {
        return $failures;
    }
}
