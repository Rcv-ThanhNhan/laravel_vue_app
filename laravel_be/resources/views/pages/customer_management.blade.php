@extends('layouts.master')

@section('title', 'Quản lí khách hàng')

@section('api')
    <script src="{{ asset('js/api/customer.js') }}"></script>
@endsection

@section('content')

<div class="container my-3">
    <h2 class="title-page mb-3">
      Quản lí khách hàng
    </h2>
    <form action="{{ env('APP_API').'/search-customer' }}" class="row row-sm mb-3" id="searchCustomer">
      <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Tên</label>
        <input class="form-control" placeholder="Nhập họ tên..." type="text" name="name">
      </div>
      <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Email</label>
        <input class="form-control" placeholder="Email" type="text" name="email">
      </div>
      <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Trạng thái</label>
        <select class="form-control" name="status">
          <option label="Chọn trạng thái"></option>
          <option value="1">Đang hoạt động</option>
          <option value="0">Tạm khóa</option>
        </select>
      </div>

        <div class="col-md-2 mb-3 mb-md-0">
            <label for="">Địa chỉ</label>
            <input class="form-control" placeholder="Địa chỉ" type="text" name="address">
        </div>

        <div class="col-md-2 col-6 d-flex">
            <button class="col-12 px-0 btn btn-primary align-self-end btn-search-customer"><i class="fas fa-search mr-1"></i> Tìm kiếm</button>
        </div>

        <div class="col-md-2 col-6 d-flex">
            <button class="col-12 px-0 btn btn-secondary align-self-end btn-reset-search-customer" type="reset"><i class="fa-solid fa-x mr-1"></i> Xóa tìm</button>
        </div>
    </form>
    <div class="row text-right mb-2">
        <div class="col-12 row mx-0">
            <div class="col-6 d-flex px-0">
                <a href="{{ route('export.customer') }}" class="btn btn-success mr-2 export-customer button-responsive">
                    <i class="fa-solid fa-file-export"></i> Export CSV
                </a>
                <form action="{{ route('import.customer') }}"  method="POST" id="formImport" enctype="multipart/form-data">
                    @csrf
                    <input type="file" name="file_import" class="file-import-input" hidden>
                    <button class="btn btn-success import-customer button-responsive" type="button"><i class="fa-solid fa-file-import"></i> Import CSV</button>
                </form>
            </div>
            <div class="col-6 justify-content-end d-flex px-0">
                <button class="btn btn-primary button-responsive" onclick="modalAddEditCustomer('add')"
                        data-bs-toggle="modal" data-bs-target="#customerEditAddModal">
                        <i class="fa-solid fa-user-plus" ></i> Thêm mới
                </button>
            </div>
        </div>
    </div>
    <div class="table-responsive h-250 position-relative pt-2">
      <table class="table mg-b-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="lstCustomers">

        </tbody>
      </table>
    </div>
    <div class="text-right mt-3">
        <nav class="pagination-container">

        </nav>
    </div>
    <!-- ##### MODAL EDIT/ADD USER ##### -->
    <div class="modal fade" id="customerEditAddModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content needs-validation" novalidate >
            @csrf
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3 row mx-0 align-items-center">
              <label for="" class="form-label col-4">Tên <span class="invalid-text">*</span></label>
              <div class="col-8 px-0">
                    <input type="text" class="form-control"  name="name" placeholder="Nguyễn Văn A" maxlength="191" required>
                    <div class="invalid-feedback invalid-feedback-name">
                        Tên không được bỏ trống
                    </div>
                </div>
            </div>
            <div class="mb-3 row  mx-0 align-items-center">
              <label class="form-label col-4">Email <span class="invalid-text">*</span></label>
              <div class="col-8 px-0">
                <input type="email" class="form-control" name="email" placeholder="name@example.com" maxlength="191" required>
                <div class="invalid-feedback invalid-feedback-email">
                    Email không được bỏ trống
                </div>
            </div>
            </div>
            <div class="mb-3 row mx-0 align-items-center">
                <label class="form-label col-4">Điện thoại <span class="invalid-text">*</span></label>
                <div class="col-8 px-0">
                    <input type="number" name="number_phone" pattern="[0][0-9]{9}" placeholder="0123456789" maxLength="12" class="form-control" required>
                    <div class="invalid-feedback invalid-feedback-tel">
                        Số điện thoại không được bỏ trống
                    </div>
                </div>
            </div>
            <div class="mb-3 row mx-0 align-items-center">
              <label class="form-label col-4">Địa chỉ <span class="invalid-text">*</span></label>
                <div class="col-8 px-0">
                    <input type="text" name="address" class="form-control" maxlength="191" required>
                    <div class="invalid-feedback invalid-feedback-address">
                        Địa chỉ không được bỏ trống
                    </div>
                </div>
            </div>
            <div class="mb-3 row mx-0 align-items-center">
                <label class="form-label col-4" for="labelAcitve">
                    Trạng thái
                </label>
                <div class="col-8">
                    <input class="form-check-input p-0" style="margin-top: -10px" type="checkbox" value="1" name="status" id="labelAcitve" checked>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="submit" class="btn btn-primary btn-submit"></button>
          </div>
        </form>
      </div>
    </div>

  </div>


@if (Session::has('isEmpty'))
  <script>
      $(document).ready(function(){
       Swal.fire({
            title: 'Không có dữ liệu để xuất.',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Đóng',
        });
        })
  </script>
@endif

@if(Session::has('failures'))
    @php
        $notification = '';
        $success_count = Session::get('successCount') ? Session::get('successCount') : 0;
        $fail_count = Session::get('failures') ? count(Session::get('failures')) : 0;
        foreach (Session::get('failures') as $k => $v){
            $index = $v->row();
            $e = '';

            $lastItem = array_key_last($v->errors());
            foreach($v->errors() as $err){
                $e .=  $err;
            }

            $notification .= 'Dòng '.$index.': '.$e.'</br>';
        }
    @endphp

    <script>
        $(document).ready(function(){
        Swal.fire({
            title: 'Thông báo!',
            html: 'Thành công: ' + {{ $success_count }} + ', thất bại: ' + {{ $fail_count }} + '</br>{!! $notification !!}',
            icon: 'warning',
            customClass: 'swal-import',
            showCancelButton: false,
            confirmButtonText: 'Đóng',
        });
        })
    </script>
@endif

@endsection
