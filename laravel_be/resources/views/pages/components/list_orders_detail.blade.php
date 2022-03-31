@if($data->count() > 0)
    @foreach($data as $i => $v)
    @php
        $status = $v->order_status == 1 ?
                            '<span class="text-success">Đã xác nhận</span>' :
                            '<span class="text-danger">Chờ xác nhận</span>';
        $numPage = $page ? $page : 1;
        $index = $numPage*10-10+$i+1;
    @endphp
    <tr>
        <th scope="row">{{ $index }}</th>
        <td class="text-truncate">{{ $v->order_id }}</td>
        <td>{{ 'Customer'.$index }}</td>
        <td class="text-truncate">{{ 'Shop '.$v->order_shop }}</td>
        <td>{{ number_format($v->total_price, 0, ',','.') }}</td>
        <td>{!! $status !!}</td>
        <td>
            <div class="btn-icon-list">
                <button class="btn text-{{ $v->order_status == 0 ? 'success' : 'danger' }} p-0 btn-status" onclick="changeStatus(event)" data-id="{{ $v->order_id }}">
                    <i class="fa-solid {{ $v->order_status == 0 ? 'fa-check' : 'fa-x' }}"></i>
                </button>
                <a href="{{ route('order-management.show', $v->order_id) }}" class="btn px-2 py-0 min-h-unset">
                    <i class="fa-solid fa-eye text-primary"></i>
                </a>
            </div>
        </td>
    </tr>
    @endforeach
@else
    <tr>
        <td colspan="6" class="font-weight-bold text-center">Không có dữ liệu</td>
    </tr>
@endif


