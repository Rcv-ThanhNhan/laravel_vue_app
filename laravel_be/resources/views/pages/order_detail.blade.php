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
    <div class="table-responsive h-250 position-relative pt-2">
      <table class="table mg-b-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên người nhận</th>
            <th>Tên sản phẩm</th>
            <th>Thương hiệu</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="lstOrderDetail">




        </tbody>
      </table>
    </div>
  </div>

@endsection
