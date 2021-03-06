@if($data->count() > 0)
    @foreach($data as $i => $v)
    @php
        $numPage = $page ? $page : 1;
        $index = $numPage*10-10+$i+1;
    @endphp
    <tr>
        <th scope="row">{{ $index }}</th>
        <td class="text-truncate">
            <div class="position-relative">
                <input type="text" class="form-control d-none" value="{{ $v->customer_name }}" name="name" style="height:24px" required>
                <div class="invalid-tooltip valid-field-name">
                    Tên không được bỏ trống
                </div>
            </div>
            <span>{{ $v->customer_name }}</span>
        </td>
        <td>
            <div class="position-relative">
                <input type="text" class="form-control d-none" value="{{ $v->email }}" name="email" style="height:24px" required>
                <div class="invalid-tooltip valid-field-email">
                    Email không được bỏ trống
                </div>
            </div>
            <span>{{ $v->email }}</span>
        </td>
        <td class="text-truncate">
            <div class="position-relative">
                <input type="text" class="form-control d-none" value="{{ $v->address }}" name="address" style="height:24px" required>
                <div class="invalid-tooltip valid-field-address">
                    Địa chỉ không được bỏ trống
                </div>
            </div>
            <span>{{ $v->address }}</span>
        </td>
        <td>
            <div class="position-relative">
                <input type="number" class="form-control d-none" value="{{ $v->tel_num }}" name="number_phone" style="height:24px" required>
                <div class="invalid-tooltip valid-field-number_phone">
                    Số điện thoại không được bỏ trống
                </div>
            </div>
            <span>{{ $v->tel_num }}</span>
        </td>
        <td class="w-p-100">
            <div class="btn-icon-list justify-content-center">
                <button type="button" class="btn px-2 py-0 min-h-unset edit-customer"  onclick="toggleEditCustomer(event)">
                    <i class="fa-solid fa-pen text-info"></i>
                </button>
                <div class="btn-edit d-none">
                    <button type="button" class="btn px-2 py-0 min-h-unset save-edit" onclick="saveCustomer(event, {{ $v->customer_id }})">
                        <i class="fa-solid fa-floppy-disk text-primary"></i>
                    </button>
                    <button type="button" class="btn px-2 py-0 min-h-unset cancel-edit" onclick="toggleEditCustomer(event)">
                        <i class="fa-solid fa-xmark text-danger"></i>
                    </button>
                </div>
            </div>
        </td>
    </tr>
    @endforeach
@else
    <tr>
        <td colspan="6" class="font-weight-bold text-center">Không có dữ liệu</td>
    </tr>
@endif


