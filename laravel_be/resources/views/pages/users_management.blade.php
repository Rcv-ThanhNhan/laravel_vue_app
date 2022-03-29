@extends('layouts.master')

@section('title', 'Quản lí người dùng')

@section('api')
<script src="{{ asset('js/api/user.js') }}"></script>
@endsection

@section('content')

<div class="container my-3">
    <h2 class="title-page mb-3">
      Quản lí người dùng
    </h2>
    <form action="{{ env('APP_API').'/search-user' }}" class="row row-sm mb-3" id="searchUser">
      <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Tên</label>
        <input class="form-control" placeholder="Nhập họ tên..." type="text" name="name">
      </div>
      <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Email</label>
        <input class="form-control" placeholder="Email" type="text" name="email">
      </div>
      <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Nhóm</label>
        <select class="form-control" name="group">
          <option label="Chọn nhóm"></option>
          <option value="Admin">Admin</option>
          <option value="Nhân viên">Nhân viên</option>
        </select>
      </div>
      <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Trạng thái</label>
        <select class="form-control" name="status">
          <option label="Chọn trạng thái"></option>
          <option value="1">Đang hoạt động</option>
          <option value="0">Tạm khóa</option>
        </select>
      </div>

      <div class="col-md-2 col-6 d-flex">
        <button class="col-12 px-0 btn btn-primary align-self-end btn-search-user"><i class="fas fa-search mr-1"></i> Tìm kiếm</button>
      </div>
      <div class="col-md-2 col-6 d-flex">
        <button class="col-12 px-0 btn btn-secondary align-self-end btn-reset-search-user" type="reset"><i class="fa-solid fa-x mr-1"></i> Xóa tìm</button>
      </div>
    </form>
    <div class="row text-right mb-2">
        <div class="col-md">
            <button class="btn btn-primary button-responsive" onclick="modalAddEditUser('add')"
                    data-bs-toggle="modal" data-bs-target="#UserEditAddModal">
                    <i class="fa-solid fa-user-plus" ></i> Thêm mới
            </button>
        </div>
    </div>
    <div class="table-responsive h-250 position-relative pt-2">
      <table class="table mg-b-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Nhóm</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="lstUsers">

        </tbody>
      </table>
    </div>
    <div class="text-right mt-3">
        <nav class="pagination-container">

        </nav>
    </div>
    <!-- ##### MODAL EDIT/ADD USER ##### -->
    <div class="modal fade" id="UserEditAddModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content needs-validation" novalidate >
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3 row mx-0 align-items-center">
              <label for="" class="form-label col-4">Tên người dùng <span class="invalid-text">*</span></label>
              <div class="col-8 px-0">
                    <input type="text" class="form-control"  name="username" placeholder="Nguyễn Văn A" maxlength="191" required>
                    <div class="invalid-feedback invalid-feedback-username">
                    </div>
                </div>
            </div>
            <div class="mb-3 row  mx-0 align-items-center">
              <label class="form-label col-4">Email <span class="invalid-text">*</span></label>
              <div class="col-8 px-0">
                <input type="email" class="form-control" name="email" placeholder="name@example.com" maxlength="32" required>
                <div class="invalid-feedback invalid-feedback-email">
                </div>
            </div>
            </div>
            <div class="mb-3 row mx-0 align-items-center">
                <label class="form-label col-4">Mật khẩu <span class="invalid-text">*</span></label>
                <div class="col-8 px-0">
                    <input type="password" name="passwd" class="form-control" maxlength="191" required>
                    <div class="invalid-feedback invalid-feedback-passwd">
                    </div>
                </div>
            </div>
            <div class="mb-3 row mx-0 align-items-center">
              <label class="form-label col-4">Xác nhận mật khẩu<span class="invalid-text">*</span></label>
              <div class="col-8 px-0">
                <input type="password" name="passwd_confirm" class="form-control" maxlength="191" required>
                <div class="invalid-feedback invalid-feedback-passwd_confirm">
                </div>
            </div>
            </div>
            <div class="mb-3 row mx-0 align-items-center">
              <label class="form-label col-4">Nhóm người dùng <span class="invalid-text">*</span></label>
              <div class="col-8 px-0">
                <select class="form-control" name="group" required>
                    <option label="Chọn nhóm"></option>
                    <option value="Admin">Admin</option>
                    <option value="Nhân viên">Nhân viên</option>
                </select>
                <div class="invalid-feedback invalid-feedback-group">
                    Vui lòng chọn nhóm người dùng
                </div>
            </div>
            </div>
            <div class="mb-3 row mx-0 align-items-center">
                <label class="form-check-label col-4" for="labelAcitve">
                    Trạng thái
                </label>
                <div class="col-8">
                    <input class="form-check-input p-0" style="margin-top: -10px" type="checkbox"
                           name="status" id="labelAcitve">
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

@endsection
