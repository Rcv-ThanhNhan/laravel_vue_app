<template>
  
  <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link :to="{name: 'home'}" class="navbar-brand">Trang chủ</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <router-link :to="{name: 'login'}" class="nav-link active" >Đăng nhập</router-link>
              <!-- <router-link to="/about">Đăng ký</router-link> -->
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </header>

</template>

