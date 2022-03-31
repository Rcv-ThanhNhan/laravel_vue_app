@extends('layouts.master')

@section('title', 'Chi tiết đơn hàng')

@section('api')
<script src="{{ versioned_asset('js/api/user.js') }}"></script>
@endsection

@section('content')

<div class="container my-3">
    <h2 class="title-page mb-3">
      Chi tiết đơn hàng
    </h2>
    <h5 class="mb-2">Thông tin đơn hàng</h5>
    <div class="row info-customer">
        <div class="row col-md-6 mb-md-2">
            <div class="col-md-4 col-6">Người mua</div>
            <div class="col-md-8 col-6">{{ $order->customers->customer_name }}</div>
            <div class="col-md-4 col-6">Người nhận</div>
            <div class="col-md-8 col-6">{{ $order->ordersDetail->customers->customer_name }}</div>
        </div>
        <div class="row col-md-6 mb-2">
            <div class="col-md-4 col-6">Ghi chú</div>
            <div class="col-md-8 col-6">{{ $order->note_customer }}</div>
            <div class="col-md-4 col-6">Trạng thái đơn hàng</div>
            <div class="col-md-8 col-6">
                {!!
                    $status = $order->order_status == 1 ?
                    '<span class="text-success">Đã xác nhận</span>' :
                    '<span class="text-danger">Chờ xác nhận</span>';
                !!}
            </div>
        </div>
    </div>
    <div class="table-responsive h-250 position-relative pt-2">
      <table class="table mg-b-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Thương hiệu</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="lstOrderDetail">
            @if($order->count() > 0)
                @foreach($order->ordersDetail->pruducts as $i => $v)
                    <tr>
                        <th scope="row">{{ ++$i }}</th>
                        <td class="text-truncate">{{ $v->pruducts }}</td>
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
        </tbody>
      </table>
    </div>
  </div>

@endsection
