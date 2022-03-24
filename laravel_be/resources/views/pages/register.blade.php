@extends('layouts.master')

@section('title', 'Đăng ký')

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
        <h2>Đăng ký</h2>

        <form action="{{ route('login.store') }}" novalidate class="login-form needs-validation" method="post">
            @csrf
            <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="email@example.com"
                       required name="username">
            <div class="invalid-feedback invalid-feedback-email">
                Email không được bỏ trống
            </div>
            </div>
            <div class="form-group">
                <label>Mật khẩu</label>
                <input type="password" class="form-control password-toggle" placeholder="password"
                            minlength="4" required name="password">
                <div class="invalid-feedback invalid-feedback-password">
                    Password không được bỏ trống
                </div>
            </div>
            <button class="btn btn-az-primary" type="submit">
                Đăng ký
            </button>
        </form>
        </div><!-- az-signin-header -->
        <div class="az-signin-footer">
        <!-- <p><a href="">Quên mật khẩu?</a></p> -->
        <p>Bạn đã có tài khoản? <a href="{{ route('login.index') }}">Đăng nhập</a></p>
        </div><!-- az-signin-footer -->
    </div><!-- az-card-signin -->
    </div>
@endsection
