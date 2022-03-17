@if($data->count() > 0)
    @foreach($data as $i => $v)
    @php
        $numPage = $page ? $page : 1;
        $index = $numPage*10-10+$i+1;
    @endphp
    <tr>
        <th scope="row">{{ $index }}</th>
        <td>{{ $v->customer_name }}</td>
        <td>{{ $v->email }}</td>
        <td>{{ $v->address }}</td>
        <td>{!! $v->tel_num !!}</td>
        <td>
            <div class="btn-icon-list">
                <button type="button" class="btn px-2 py-0 min-h-unset"  onclick="modalAddEditCustomer('edit', {{ $v->customer_id }})"
                        data-bs-toggle="modal" data-bs-target="#customerEditAddModal">
                    <i class="fa-solid fa-pen text-info"></i>
                </button>
            </div>
        </td>
    </tr>
    @endforeach
@else
    <tr>
        <td colspan="6" class="font-weight-bold text-center">Không có dữ liệu</td>
    </tr>
@endif


