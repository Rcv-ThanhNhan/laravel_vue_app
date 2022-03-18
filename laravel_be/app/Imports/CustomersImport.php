<?php

namespace App\Imports;

use App\Models\Customer;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\WithValidation;

class CustomersImport implements ToCollection, WithStartRow, WithValidation
{
    use SkipsFailures;

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
        // $rules = [
        //     '*.1' => 'required',
        //     '*.2' => 'required|email|unique:App\Models\Customer,email',
        //     '*.3' => 'required|numeric',
        //     '*.4' => 'required',
        // ];

        $messages = [
            '*.*.required' => 'Không được bỏ trống',
            '*.2.email' => 'Email không đúng định dạng',
            '*.2.unique' => 'Email đã được đăng ký',
            '*.3.numeric' => 'Số điện không đúng định dạng',
            '*.1.min' => 'Tên quá ngắn tối thiểu :min ký tự',
        ];

        // Validator::validate($rows->toArray(), $rules, $messages);

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
            '*.2.email' => 'Email không đúng định dạng',
            '*.2.unique' => 'Email đã được đăng ký',
            '*.3.numeric' => 'Số điện không đúng định dạng',
            '*.1.min' => 'Tên quá ngắn tối thiểu :min ký tự',
        ];
    }
}
