@if (Auth::check())

<div class="az-header">
    <div class="container">
      <div class="az-header-left">
        <a href="{{ route('user-management.index') }}" class="az-logo"><span></span> RiverCrane</a>
        <a href="" id="azMenuShow" class="az-header-menu-icon d-lg-none"><span></span></a>
      </div><!-- az-header-left -->
      <div class="az-header-menu">
        <div class="az-header-menu-header">
          <a href="index.html" class="az-logo"><span></span> azia</a>
          <a href="" class="close">&times;</a>
        </div><!-- az-header-menu-header -->
        <ul class="nav">
          <li class="nav-item">
            <a href="{{ route('user-management.index') }}" class="nav-link" ><i class="typcn typcn-chart-area-outline" ></i> Quản lí người dùng</a>
          </li>
          <li class="nav-item">
            <a href="{{ route('customer-management.index') }}" class="nav-link" ><i class="fa-solid fa-users mr-2" ></i> Quản lí khách hàng</a>
          </li>
          <li class="nav-item">
            <a href="{{ route('product-management.index') }}" class="nav-link" ><i class="fa-solid fa-cart-shopping mr-2"></i> Quản lí sản phẩm</a>
          </li>
          <li class="nav-item">
            <a href="{{ route('order-management.index') }}" class="nav-link" ><i class="fa-solid fa-cart-shopping mr-2"></i> Quản lí đơn hàng</a>
          </li>
        </ul>
      </div><!-- az-header-menu -->
      <div class="az-header-right">
        @if (Auth::check())
            <div class="dropdown az-profile-menu">
                <a href="">
                    <span>
                        {{ Auth::user()->name }}
                    </span>
                    <div class="az-img-user">
                        <img src="{{ asset('img/faces/face1.jpg') }}" alt="">
                    </div>
                </a>
                <div class="dropdown-menu">
                    <div class="az-dropdown-header d-sm-none">
                        <a href="" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
                    </div>
                    <div class="az-header-profile">
                        <div class="az-img-user">
                        <img src="{{ asset('img/faces/face1.jpg') }}" alt="">
                        </div><!-- az-img-user -->
                        <h6>{{ Auth::user()->name }}</h6>
                        <span>Premium Member</span>
                    </div><!-- az-header-profile -->

                    <a href="{{ route('logout') }}" class="dropdown-item"><i class="typcn typcn-power-outline"></i> Đăng xuất</a>
                </div>
            </div>
        @endif
      </div><!-- az-header-right -->
    </div><!-- container -->
  </div>
  @endif
