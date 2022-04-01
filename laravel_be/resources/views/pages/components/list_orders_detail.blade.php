@if($order->ordersDetail->products->count() > 0)
    @foreach($order->ordersDetail->products as $i => $v)
        <tr>
            <th scope="row">{{ ++$i }}</th>
            <td class="text-truncate">{{ $v->product_name }}</td>
            {{-- <td>{{ $order->ordersDetail->shop->shop_name }}</td> --}}
            <td class="text-truncate">{{ number_format(($v->product_price), 0, ',','.') }}</td>
            <td>{{ $v->orderDetail->quantity }}</td>
            <td>{{  number_format(($v->orderDetail->quantity*$v->product_price), 0, ',','.') }}</td>

        </tr>
    @endforeach
@else
    <tr>
        <td colspan="6" class="font-weight-bold text-center">Không có dữ liệu</td>
    </tr>
@endif
