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
            <label>Email <span class="invalid-text">*</span></label>
            <input type="email" class="form-control" placeholder="email@example.com" value="{{ old('username') }}"
                       required name="username">
            @if($errors->has('username'))
                <div class="invalid-text">
                    {{ $errors->first('username') }}
                </div>
            @else
                <div class="invalid-feedback invalid-feedback-email">
                        Email không được bỏ trống
                </div>
            @endif
            </div><!-- form-group -->
            <div class="form-group">
                <label>Mật khẩu <span class="invalid-text">*</span></label>
                <input type="password" class="form-control password-toggle" placeholder="password"
                            minlength="4" required name="password">
                @if($errors->has('password'))
                    <div class="invalid-text">
                        {{ $errors->first('password') }}
                    </div>
                @else
                    <div class="invalid-feedback invalid-feedback-password">
                            Mật khẩu không được bỏ trống
                    </div>
                @endif
            </div><!-- form-group -->
            @if(Session::has('errorLogin'))
                <div class="invalid-text">
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
        {{-- <p>Bạn chưa có tài khoản? <a href="{{ route('register') }}">Đăng ký</a></p> --}}
        </div><!-- az-signin-footer -->
    </div><!-- az-card-signin -->
    </div>

    <script>
        $('form').submit(function(e){
            // e.preventDefault();
            let inputUserName = $(this).find('[name="username"]');
            let inputPass = $(this).find('[name="password"]');
            if(inputUserName.val() == ''){
                return inputUserName.next('.invalid-text').text('Email không được bỏ trống')
            }
            if(inputPass.val() == ''){
                return inputPass.next('.invalid-text').text('Mật khẩu không được bỏ trống')
            }
            // $(this).submit();
        })
    </script>
@endsection
