@extends('layouts.master')

@section('title', 'Đăng nhập')

@section('api')
{{-- <script src="{{ asset('js/api/login.js') }}"></script> --}}
@endsection

@section('content')

<div class="az-signin-wrapper">
    <div class="az-card-signin">
        <h1 class="az-logo">
            <img src="{{ asset('img/banner-login.png') }}" alt="" class="img-fluid">
        </h1>
        <div class="az-signin-header">
        <h2>Đăng nhập</h2>

        <form action="{{ route('login.store') }}" novalidate class="login-form needs-validation" method="post">
            @csrf
            <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="email@example.com"
                       required name="username">
            <div class="invalid-feedback invalid-feedback-email">
                Email không được bỏ trống
            </div>
            </div><!-- form-group -->
            <div class="form-group">
                <label>Mật khẩu</label>
                <input type="password" class="form-control password-toggle" placeholder="password"
                            minlength="4" required name="password">
                <div class="invalid-feedback invalid-feedback-password">
                    Passport không được bỏ trống
                </div>
            </div><!-- form-group -->
            @if(Session::has('errorLogin'))
                <div class="text-danger" style="font-size: 12px;">
                    {{ Session::get('errorLogin') }}
                </div>
            @endif
            <div class="form-group ml-4">
                <input class="form-check-input" type="checkbox" value="" id="remember" name="remember">
                <label class="form-check-label ms-2 mb-0" for="remember">
                    Lưu mật khẩu
                </label>
            </div>
            <button class="btn btn-az-primary" type="submit">
                Đăng nhập
            </button>
        </form>
        </div><!-- az-signin-header -->
        <div class="az-signin-footer">
        <!-- <p><a href="">Quên mật khẩu?</a></p> -->
        <p>Bạn chưa có tài khoản? <a href="">Đăng ký</a></p>
        </div><!-- az-signin-footer -->
    </div><!-- az-card-signin -->
    </div>
@endsection
