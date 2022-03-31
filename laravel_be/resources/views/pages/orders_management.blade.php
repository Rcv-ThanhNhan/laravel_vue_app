@extends('layouts.master')

@section('title', 'Quản lí giỏ hàng')

@section('api')
<script src="{{ versioned_asset('js/api/order.js') }}"></script>
@endsection

@section('content')

<div class="container my-3">
    <h2 class="title-page mb-3">
    Quản lí giỏ hàng
    </h2>
    <form action="{{ env('APP_API').'/search-order' }}" class="row row-sm mb-3 justify-content-between" id="searchOrder">
        <div class="row row-sm col-md-8 pr-0">
            <div class="col-md-4 mb-3 mb-md-0">
                <label for="">Mã hóa đơn</label>
                <input class="form-control" placeholder="Nhập Mã hóa đơn" type="text" name="order_code">
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
                <label for="">Thời gian đặt</label>
                <input class="form-control" placeholder="Thời gian đặt" type="date" name="from_date">
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
                <label for="">Trạng thái</label>
                <select class="form-control" name="status">
                <option label="Chọn trạng thái"></option>
                <option value="0">Chờ xác nhận</option>
                <option value="1">Đã xác nhận</option>
                </select>
            </div>
        </div>
        <div class="row row-sm col-md-4">
            <div class="col-6 d-flex">
                <button class="col-12 px-0 btn btn-primary align-self-end btn-search-order"><i class="fas fa-search mr-1"></i> Tìm kiếm</button>
            </div>
            <div class="col-6 pr-0 d-flex">
                <button class="col-12 px-0 btn btn-secondary align-self-end btn-reset-search-order" type="reset"><i class="fa-solid fa-x mr-1"></i> Xóa tìm</button>
            </div>
        </div>
    </form>
    <div class="table-responsive h-250 position-relative pt-2">
    <table class="table mg-b-0">
        <thead>
        <tr>
            <th>#</th>
            <th>Mã hóa đơn</th>
            <th>Tên khách hàng</th>
            <th>Địa chỉ</th>
            <th>Tổng giá</th>
            <th>Ngày đặt</th>
            <th>Ghi chú</th>
            <th>Trạng thái</th>
            <th></th>
        </tr>
        </thead>
        <tbody id="lstOrders">

        </tbody>
    </table>
    </div>
    <div class="text-right mt-3">
        <nav class="pagination-container">

        </nav>
    </div>

</div>

@endsection
