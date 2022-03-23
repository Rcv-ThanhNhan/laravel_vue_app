@if (Auth::check())

<div class="az-header">
    <div class="container">
      <div class="az-header-left">
        <a href="index.html" class="az-logo"><span></span> azia</a>
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
          {{-- <li class="nav-item">
            <a href="" class="nav-link with-sub"><i class="typcn typcn-document"></i> Pages</a>
            <nav class="az-menu-sub">
              <a href="{{ route('login.index') }}" class="nav-link">Sign In</a>
              <a href="page-signup.html" class="nav-link">Sign Up</a>
            </nav>
          </li>
          <li class="nav-item">
            <a href="form-elements.html" class="nav-link"><i class="typcn typcn-chart-bar-outline"></i> Forms</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link with-sub"><i class="typcn typcn-book"></i> Components</a>
            <div class="az-menu-sub">
              <div class="container">
                <div>
                  <nav class="nav">
                    <a href="elem-buttons.html" class="nav-link">Buttons</a>
                    <a href="elem-dropdown.html" class="nav-link">Dropdown</a>
                    <a href="elem-icons.html" class="nav-link">Icons</a>
                    <a href="table-basic.html" class="nav-link">Table</a>
                  </nav>
                </div>
              </div><!-- container -->
            </div>
          </li> --}}
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

                    {{-- <a href="" class="dropdown-item"><i class="typcn typcn-user-outline"></i> Hồ sơ</a> --}}
                    {{-- <a href="" class="dropdown-item"><i class="typcn typcn-edit"></i> Edit Profile</a>
                    <a href="" class="dropdown-item"><i class="typcn typcn-time"></i> Activity Logs</a>
                    <a href="" class="dropdown-item"><i class="typcn typcn-cog-outline"></i> Account Settings</a> --}}
                    <a href="{{ route('logout') }}" class="dropdown-item"><i class="typcn typcn-power-outline"></i> Đăng xuất</a>
                </div>
            </div>
        @endif
      </div><!-- az-header-right -->
    </div><!-- container -->
  </div>
  @endif
