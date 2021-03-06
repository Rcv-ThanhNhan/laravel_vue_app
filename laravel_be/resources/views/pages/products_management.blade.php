@extends('layouts.master')

@section('title', 'Quản lí sản phẩm')

@section('api')
<script src="{{ mix('js/api/product.js') }}"></script>
@endsection

@section('content')

<div class="container my-3">
    <h2 class="title-page mb-3 mb-md-0">
    Quản lí sản phẩm
    </h2>
    <form action="{{ env('APP_API').'/search-product' }}" class="row row-sm mb-3" id="searchProduct">
    <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Tên sản phẩm</label>
        <input class="form-control" placeholder="Tên sản phẩm..." type="text" name="name_product">
    </div>
    <div class="col-md-2 mb-3 mb-md-0">
        <label for="">Trạng thái</label>
        <select class="form-control" name="status_product">
        <option label="Chọn trạng thái"></option>
        <option value="1">Đang bán</option>
        <option value="2">Hết hàng</option>
        <option value="0">Ngừng bán</option>
        </select>
    </div>
        <div class="col-md-4 mb-3 mb-md-0 d-flex">
            <div class="col-6 pl-0 pr-2">
                <label for="">Giá bán từ</label>
                <input class="form-control" placeholder="Giá bán từ" min="0" type="number" name="price_from">
            </div>
            <div class="col-6 pr-0 pl-2">
                <label for="">Giá bán đến</label>
                <input class="form-control" placeholder="Giá bán đến" min="0" type="number" name="price_to">
            </div>
        </div>

        <div class="col-md-2 col-6 d-flex">
            <button class="col-12 px-0 btn btn-primary align-self-end btn-search-product"><i class="fas fa-search mr-1"></i> Tìm kiếm</button>
        </div>

        <div class="col-md-2 col-6 d-flex">
            <button class="col-12 px-0 btn btn-secondary align-self-end btn-reset-search-product" type="reset"><i class="fa-solid fa-x mr-1"></i> Xóa tìm</button>
        </div>
    </form>
    <div class="row text-right mb-2">
        <div class="col-12 text-right mx-0">
            <button class="btn btn-primary button-responsive" onclick="modalAddEditProduct('add')"
                    data-bs-toggle="modal" data-bs-target="#productEditAddModal">
                    <i class="fa-solid fa-cart-shopping mr-2"></i> Thêm mới
            </button>
        </div>
    </div>
    <div class="table-responsive h-250 position-relative pt-2">
    <table class="table mg-b-0">
        <thead>
        <tr>
            <th>#</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Tình trạng</th>
            <th></th>
        </tr>
        </thead>
        <tbody id="lstProducts">

        </tbody>
    </table>
    {{-- <div class="loading-table d-none">
        <div class="spinner-border text-light" role="status"></div>
    </div> --}}
    </div>
    <div class="text-right mt-3">
        <nav class="pagination-container">

        </nav>
    </div>
    <!-- ##### MODAL EDIT/ADD USER ##### -->
    <div class="modal fade" id="productEditAddModal" tabindex="-1" aria-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <form class="modal-content needs-validation" novalidate enctype="multipart/form-data">
        <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row">
            <div class="col-md-7">
                <div class="mb-3 row mx-0 align-items-center">
                <label for="" class="form-label col-4">Tên sản phẩm <span class="invalid-text">*</span></label>
                <div class="col-8 px-0">
                        <input type="text" class="form-control"  name="name_product" placeholder="Sản phẩm 1" required>
                        <div class="invalid-feedback invalid-feedback-name_product">
                            Tên sản phẩm không được bỏ trống
                        </div>
                    </div>
                </div>
                <div class="mb-3 row  mx-0 align-items-center">
                <label class="form-label col-4">Giá bán <span class="invalid-text">*</span></label>
                <div class="col-8 px-0">
                    <input type="number" class="form-control" name="price_product" placeholder="1000000" maxlength="11" required>
                    <div class="invalid-feedback invalid-feedback-price_product">
                        Giá sản phẩm không được bỏ trống
                    </div>
                </div>
                </div>
                <div class="mb-3 row mx-0 align-items-center">
                    <label class="form-label col-4">Mô tả</label>
                    <div class="col-8 px-0">
                        <textarea type="text" name="desc" placeholder="Mô tả" class="form-control" rows="5"></textarea>
                        <div class="invalid-feedback invalid-feedback-desc">
                        </div>
                    </div>
                </div>
                <div class="mb-3 row mx-0 align-items-center">
                <label class="form-label col-4">Trạng thái</label>
                    <div class="col-8 px-0">
                        <select class="form-control" name="status">
                            <option label="Chọn trạng thái"></option>
                            <option value="1">Đang bán</option>
                            <option value="2">Hết hàng</option>
                            <option value="0">Ngừng bán</option>
                        </select>
                        <div class="invalid-feedback invalid-feedback-address">

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <label for="">Hình ảnh</label>
                <div class="img-container">
                    <img src="{{ asset('/img/no_image.png') }}" class="img-fluid img-preview" alt="">
                </div>
                <div class="input-group mt-3 input-upload">
                    <label class="input-group-text bg-success text-light" role="button" for="chooseImage">Upload</label>
                    <button class="input-group-text bg-danger text-light" type="button" for="destroyImage">Xóa file</button>
                    <input type="text" class="form-control name-file" readonly name="img_product_name">
                    <input type="file" class="form-control" accept="image/jpg,image/png,image/jpeg" id="chooseImage" name="img_product" hidden>
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
            title: 'Thông báo',
            html: '{!! $notification !!}',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Đóng',
        });
        })
    </script>
@endif

@endsection
