@extends('layouts.master')

@section('title', 'Chi tiết đơn hàng')

@section('api')
<script src="{{ mix('js/api/order_detail.js') }}"></script>
@endsection

@section('content')

<div class="container my-3">
    <h2 class="title-page mb-3">
    Chi tiết đơn hàng
    </h2>
    <h5 class="mb-2">Thông tin đơn hàng</h5>
    <div class="row info-customer">
        <div class="col-md-6">
            <div class="row">
                <label class="col-md-5 col-6">Người mua</label>
                <div class="col-md-7 col-6">{{ $order->customers ? $order->customers->customer_name : '--' }}</div>
            </div>
            <div class="row">
                <label class="col-md-5 col-6">Người nhận</label>
                <div class="col-md-7 col-6">{{ $order->ordersDetail->customers ? $order->ordersDetail->customers->customer_name : '--' }}</div>
            </div>
            <div class="row">
                <label class="col-md-5 col-6">Địa chỉ</label>
                <div class="col-md-7 col-6">{{ $order->ordersDetail->customers ? $order->ordersDetail->customers->address : '--' }}</div>
            </div>
            <div class="row">
                <label class="col-md-5 col-6">Phương thức thanh toán</label>
                <div class="col-md-7 col-6">
                    {{
                        $order->payment_method == 1 ? 'COD' : ($order->payment_method == 2 ? 'Paypal' : 'GMO')
                        }}
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <label class="col-md-4 col-6">Ghi chú</label>
                <div class="col-md-8 col-6">{{ $order->note_customer }}</div>
            </div>
            <div class="row">
                <label class="col-md-4 col-6">Trạng thái đơn hàng</label>
                <div class="col-md-8 col-6 confirm-order">
                    {!!
                        $status = $order->order_status == 1 ?
                        '<span class="text-success">Đã xác nhận</span>' :
                                ($order->order_status == 2 ? '<span class="text-success">Đã giao</span>' :
                                                        '<span class="text-danger">Chờ xác nhận</span>');
                    !!}
                </div>
            </div>
            <div class="row">
                <label class="col-md-4 col-6">Ngày giao</label>
                <div class="col-md-8 col-6">{{ date_format(new Datetime($order->shipment_date), 'd-m-Y') }}</div>
            </div>
        </div>
    </div>
    <div class="table-responsive h-250 position-relative pt-2">
        <table class="table mg-b-0">
            <thead>
            <tr>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
            </tr>
            </thead>
            <tbody id="lstOrderDetail">
                @if($order->ordersDetail->products->count() > 0)
                    @foreach($order->ordersDetail->products as $i => $v)
                        <tr>
                            <th scope="row">{{ ++$i }}</th>
                            <td class="text-truncate">{{ $v->product_name }}</td>
                            <td class="text-truncate">{{ number_format(($v->product_price), 0, ',','.') }}</td>
                            <td>{{ $v->orderDetail->quantity }}</td>
                            <td>{{  number_format(($v->orderDetail->quantity*$v->product_price), 0, ',','.') }}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <td colspan="5" class="font-weight-bold text-center">Không có dữ liệu</td>
                    </tr>
                @endif
            </tbody>
        </table>
    </div>

    @if($order->order_status != 2)
        <div class="text-right">
            <div class="total-price">
                <p class="m-0">Thuế (%): {{ $order->tax }}</p>
                <div>Tổng đơn hàng <small>(Đã bao gồm thuế): </small> <h5 class="d-inline-block">{{ number_format($order->total_price, 0, ',','.') }}</h5> </div>
            </div>
            <div class="btn-group btn-action">
                @if($order->order_status == 0)
                    <button class="btn btn-warning" onclick="changeStatus(event)" data-id="{{ $order->order_id }}" data-action="1">Xác nhận</button>
                @else
                    <button class="btn btn-warning" onclick="changeStatus(event)" data-id="{{ $order->order_id }}" data-action="0">Hủy xác nhận</button>
                    <button class="btn btn-success ml-2" onclick="changeStatus(event)" data-id="{{ $order->order_id }}" data-action="2">Đã giao</button>
                @endif
            </div>
        </div>
    @endif
</div>

@endsection
