<template>
    <div class="az-header">
      <div class="container">
        <div class="az-header-left">
          <router-link :to="{name: 'home'}" class="navbar-brand">
            <img src="../../assets/img/banner-login.png" alt="">
          </router-link>
          <a href="" id="azMenuShow" class="az-header-menu-icon d-lg-none"><span></span></a>
        </div><!-- az-header-left -->
        <div class="az-header-menu">
          <div class="az-header-menu-header">
            <a href="index.html" class="az-logo"><span></span> azia</a>
            <a href="" class="close">&times;</a>
          </div><!-- az-header-menu-header -->
          <ul class="nav">
              <li class="nav-item">
                <router-link :to="{name: 'user-management'}" class="nav-link" >Quản lí người dùng</router-link>
              </li>
            </ul>
        </div><!-- az-header-menu -->
        <div class="az-header-right">
          <div class="az-header-message">
            <a href="#"><i class="typcn typcn-messages"></i></a>
          </div><!-- az-header-message -->
          <!-- <div class="dropdown az-profile-menu d-flex">
              <router-link :to="{name: 'login'}" class="az-login">
                <i class="fa-solid fa-right-to-bracket me-1"></i> Đăng nhập</router-link>
              <router-link :to="{name: 'register'}" class="az-login">
                <i class="fa-solid fa-user-plus me-1"></i> Đăng ký
              </router-link>
          </div> -->
          <div class="dropdown az-profile-menu">
            <a href="" class="az-login">admin</a>
            <div class="dropdown-menu">
              <div class="az-dropdown-header d-sm-none">
                <a href="" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
              </div>
              <div class="az-header-profile">
                <div class="az-img-user">
                  <img src="../img/faces/face1.jpg" alt="">
                </div><!-- az-img-user -->
                <h6>Aziana Pechon</h6>
                <span>Premium Member</span>
              </div><!-- az-header-profile -->

              <a href="" class="dropdown-item"><i class="typcn typcn-user-outline"></i> My Profile</a>
              <a href="" class="dropdown-item"><i class="typcn typcn-edit"></i> Edit Profile</a>
              <a href="" class="dropdown-item"><i class="typcn typcn-time"></i> Activity Logs</a>
              <a href="" class="dropdown-item"><i class="typcn typcn-cog-outline"></i> Account Settings</a>
              <a href="page-signin.html" class="dropdown-item"><i class="typcn typcn-power-outline"></i> Sign Out</a>
            </div><!-- dropdown-menu -->
          </div>
        </div><!-- az-header-right -->
      </div><!-- container -->
    </div>

</template>

<script>
export default {
  data(){
    return [
      {
        loggedIn: true,
      }
    ]
  }
}
</script>

<style>
.az-login{
  padding: 10px;
  color: #1c273c;
  font-weight: 500;
  transition: all 0.2s ease-in-out; 
}
.az-login:hover{
  color: #5b47fb;
}

.lead {
  font-size: 1.09375rem;
  font-weight: 300; }

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2; }

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2; }

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2; }

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2; }

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1); }

small,
.small {
  font-size: 80%;
  font-weight: 400; }

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3; }

.list-unstyled {
  padding-left: 0;
  list-style: none; }

.list-inline {
  padding-left: 0;
  list-style: none; }

.list-inline-item {
  display: inline-block; }
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem; }

.initialism {
  font-size: 90%;
  text-transform: uppercase; }

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.09375rem; }

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #7987a1; }
  .blockquote-footer::before {
    content: "\2014\00A0"; }

.img-fluid {
  max-width: 100%;
  height: auto; }

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #cdd4e0;
  border-radius: 3px;
  max-width: 100%;
  height: auto; }

.figure {
  display: inline-block; }

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1; }

.figure-caption {
  font-size: 90%;
  color: #7987a1; }

code {
  font-size: 87.5%;
  color: #f10075;
  word-wrap: break-word; }
  a > code {
    color: inherit; }

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #1c273c;
  border-radius: 0.2rem; }
  kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700; }

pre {
  display: block;
  font-size: 87.5%;
  color: #1c273c; }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal; }

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll; }


/* ###### 6.4 Header  ###### */
@media (max-width: 991.98px) {
  .az-header-menu-show {
    overflow: hidden; }
    .az-header-menu-show .az-header-menu {
      border-right: 1px solid rgba(28, 39, 60, 0.08);
      box-shadow: 0 0 30px rgba(28, 39, 60, 0.08);
      transform: translateX(0); }
    .az-header-menu-show .az-navbar-backdrop {
      visibility: visible;
      opacity: 1; } }

.az-header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 30px rgba(28, 39, 60, 0.08);
  border-bottom: 1px solid rgba(28, 39, 60, 0.12); }
  @media (min-width: 992px) {
    .az-header {
      position: relative;
      z-index: 100;
      height: 64px; } }
  .az-header > .container,
  .az-header > .container-fluid,
  .az-header > .container-sm,
  .az-header > .container-md,
  .az-header > .container-lg,
  .az-header > .container-xl {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px; }
    @media (min-width: 992px) {
      .az-header > .container,
      .az-header > .container-fluid,
      .az-header > .container-sm,
      .az-header > .container-md,
      .az-header > .container-lg,
      .az-header > .container-xl {
        padding-left: 25px;
        padding-right: 25px; } }
  @media (min-width: 992px) {
    .az-header > .container {
      padding: 0; } }
  @media (max-width: 991.98px) {
    .az-header > .container {
      max-width: none; } }
  .az-header .az-header-left .az-logo {
    display: none; }
    @media (min-width: 992px) {
      .az-header .az-header-left .az-logo {
        display: flex; } }

.az-header-left {
  display: flex;
  align-items: center; }
  .az-header-left .az-header-arrow {
    display: none;
    position: relative;
    top: -2px; }

.az-logo {
  font-weight: 700;
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  text-transform: lowercase;
  color: #5b47fb;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  position: relative;
  top: -2px; }
  .az-logo:hover, .az-logo:focus {
    color: #5b47fb; }
  .az-logo i {
    display: block;
    line-height: .9;
    margin-right: 8px;
    font-size: 40px; }
    .az-logo i::before {
      width: auto;
      height: auto; }

.az-header-menu-icon {
  margin-right: 10px;
  width: 20px;
  height: 30px;
  display: flex;
  align-items: center; }
  @media (min-width: 992px) {
    .az-header-menu-icon {
      margin-right: 25px; } }
  .az-header-menu-icon span {
    display: block;
    position: relative;
    width: 15px;
    height: 2px;
    background-color: #1c273c;
    border-radius: 3px;
    transition: all 0.2s ease-in-out; }
    @media (prefers-reduced-motion: reduce) {
      .az-header-menu-icon span {
        transition: none; } }
    .az-header-menu-icon span::before, .az-header-menu-icon span::after {
      content: '';
      position: absolute;
      left: 0;
      width: 20px;
      height: 2px;
      background-color: #1c273c;
      border-radius: 3px;
      transition: all 0.2s ease-in-out; }
      @media (prefers-reduced-motion: reduce) {
        .az-header-menu-icon span::before, .az-header-menu-icon span::after {
          transition: none; } }
    .az-header-menu-icon span::before {
      top: -6px; }
    .az-header-menu-icon span::after {
      bottom: -6px; }

.az-header-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 240px;
  background-color: #fff;
  overflow-y: auto;
  z-index: 1000;
  transform: translateX(-240px);
  transition: all 0.35s; }
  @media (prefers-reduced-motion: reduce) {
    .az-header-menu {
      transition: none; } }
  @media (min-width: 992px) {
    .az-header-menu {
      background-color: transparent;
      border-right: 0;
      position: static;
      width: auto;
      overflow-y: visible;
      transform: none;
      z-index: auto; } }
  .az-header-menu > .nav {
    flex-direction: column;
    padding: 20px; }
    @media (min-width: 992px) {
      .az-header-menu > .nav {
        padding: 0;
        flex-direction: row;
        align-items: center; } }
  .az-header-menu .nav-item::before {
    content: '';
    position: absolute;
    top: 67px;
    margin-left: 25px;
    width: 15px;
    height: 15px;
    border-top: 2px solid rgba(28, 39, 60, 0.12);
    border-left: 2px solid rgba(28, 39, 60, 0.12);
    background-color: #fff;
    transform: rotate(45deg);
    z-index: 100;
    display: none; }
  .az-header-menu .nav-item + .nav-item {
    margin-top: 10px; }
    @media (min-width: 992px) {
      .az-header-menu .nav-item + .nav-item {
        margin-top: 0;
        margin-left: 30px; } }
  .az-header-menu .nav-item > .nav-link {
    display: flex;
    align-items: center;
    position: relative;
    color: #031b4e;
    font-size: 15px;
    font-weight: 500;
    padding: 0;
    transition: all 0.2s ease-in-out; }
    @media (prefers-reduced-motion: reduce) {
      .az-header-menu .nav-item > .nav-link {
        transition: none; } }
    @media (min-width: 992px) {
      .az-header-menu .nav-item > .nav-link {
        font-size: 0.875rem; } }
    .az-header-menu .nav-item > .nav-link:hover {
      color: #5b47fb; }
      .az-header-menu .nav-item > .nav-link:hover i {
        color: #5b47fb; }
    .az-header-menu .nav-item > .nav-link.with-sub::after {
      content: '\f3d0';
      display: inline-block;
      font-family: 'Ionicons';
      font-size: 12px;
      font-weight: 400;
      margin-left: auto;
      margin-top: 3px;
      opacity: .5; }
      @media (min-width: 992px) {
        .az-header-menu .nav-item > .nav-link.with-sub::after {
          margin-left: 5px; } }
    .az-header-menu .nav-item > .nav-link .typcn {
      font-size: 20px;
      line-height: .95;
      margin-right: 15px;
      width: 16px; }
      @media (min-width: 992px) {
        .az-header-menu .nav-item > .nav-link .typcn {
          font-size: 18px;
          margin-right: 7px; } }
      .az-header-menu .nav-item > .nav-link .typcn::before {
        width: auto; }
        
  .az-header-menu .nav-item > .nav-link.active {
    color: #5b47fb;
    position: relative; }
    .az-header-menu .nav-item > .nav-link.active::before {
      content: '';
      position: absolute;
      bottom: 0;
      top: 0;
      left: -20px;
      width: 2px;
      background-color: #5b47fb;
      border-radius: 3px; }
      @media (min-width: 992px) {
        .az-header-menu .nav-item > .nav-link.active::before {
          top: auto;
          bottom: -22px;
          left: 0;
          right: 0;
          width: auto;
          height: 2px; } }
  @media (min-width: 992px) {
    .az-header-menu .nav-item.show::before {
      display: block; } }
  .az-header-menu .nav-item.show .az-menu-sub {
    display: block; }

.az-header-menu-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid rgba(28, 39, 60, 0.05); }
  @media (min-width: 992px) {
    .az-header-menu-header {
      display: none; } }
  .az-header-menu-header .close {
    font-weight: 300;
    font-size: 28px; }

.az-menu-sub {
  font-size: 13px;
  margin-left: 32px;
  margin-top: 12px;
  display: none; }
  @media (min-width: 992px) {
    .az-menu-sub {
      position: absolute;
      top: 74px;
      background-color: #fff;
      padding: 15px 20px;
      border: 2px solid rgba(28, 39, 60, 0.12);
      min-width: 200px;
      margin-left: 0;
      margin-top: 0; } }
  .az-menu-sub .nav {
    flex-direction: column; }
  .az-menu-sub .nav-link {
    padding: 0;
    display: block;
    color: #596882; }
    .az-menu-sub .nav-link + .nav-link {
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px dotted #e3e7ed; }
    .az-menu-sub .nav-link:hover, .az-menu-sub .nav-link:focus {
      color: #5b47fb; }
    .az-menu-sub .nav-link.active {
      color: #5b47fb;
      font-weight: 500; }
      @media (min-width: 992px) {
        .az-menu-sub .nav-link.active {
          font-weight: 400; } }

.az-menu-sub-mega {
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 0;
  border: 0; }
  .az-menu-sub-mega .container {
    padding: 0; }
    @media (max-width: 991.98px) {
      .az-menu-sub-mega .container {
        max-width: none; } }
    @media (min-width: 992px) {
      .az-menu-sub-mega .container {
        display: flex;
        background-color: #fff;
        border: 2px solid rgba(28, 39, 60, 0.12); } }
    @media (min-width: 992px) {
      .az-menu-sub-mega .container > div {
        display: flex;
        padding: 20px;
        flex: 1;
        margin-top: 0; } }
    @media (min-width: 1200px) {
      .az-menu-sub-mega .container > div {
        padding: 20px 25px; } }
    .az-menu-sub-mega .container > div + div {
      margin-top: 25px; }
      @media (min-width: 992px) {
        .az-menu-sub-mega .container > div + div {
          margin-top: 0;
          border-left: 1px solid rgba(28, 39, 60, 0.05); } }
  .az-menu-sub-mega .nav {
    min-width: 120px;
    flex-direction: column; }
    @media (min-width: 1200px) {
      .az-menu-sub-mega .nav {
        min-width: 140px; } }
    .az-menu-sub-mega .nav + .nav {
      border-top: 1px dotted #e3e7ed;
      margin-top: 6px;
      padding-top: 6px; }
      @media (min-width: 992px) {
        .az-menu-sub-mega .nav + .nav {
          margin-left: 20px;
          margin-top: 31px;
          padding-top: 0;
          border-top: 0; } }
      @media (min-width: 1200px) {
        .az-menu-sub-mega .nav + .nav {
          margin-left: 25px; } }
    .az-menu-sub-mega .nav > span {
      display: block;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 700;
      color: #1c273c;
      letter-spacing: .5px;
      margin-bottom: 15px;
      margin-top: 30px; }
      @media (min-width: 992px) {
        .az-menu-sub-mega .nav > span {
          font-size: 12px; } }
      .az-menu-sub-mega .nav > span:first-of-type {
        margin-top: 0; }

.az-header-center {
  flex: 1;
  margin: 0 50px;
  position: relative;
  display: none; }
  @media (min-width: 992px) {
    .az-header-center {
      display: block; } }
  .az-header-center .form-control {
    border-color: #e3e7ed;
    border-width: 2px;
    background-color: #fcfcfc;
    transition: none;
    height: 40px; }
    .az-header-center .form-control:focus {
      background-color: #fff;
      border-color: #b4bdce;
      box-shadow: none !important; }
      .az-header-center .form-control:focus + .btn {
        color: #7987a1; }
  .az-header-center .btn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    height: 40px;
    color: #b4bdce;
    transition: none;
    font-size: 16px;
    padding-right: 13px; }
    .az-header-center .btn:hover, .az-header-center .btn:focus {
      color: #1c273c; }

.az-header-right {
  display: flex;
  align-items: center; }
  .az-header-right .btn-social {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #97a3b9;
    border-radius: 3px;
    transition: all 0.2s ease-in-out; }
    @media (prefers-reduced-motion: reduce) {
      .az-header-right .btn-social {
        transition: none; } }
    .az-header-right .btn-social:hover, .az-header-right .btn-social:focus {
      color: #596882; }
    .az-header-right .btn-social i {
      font-size: 18px;
      line-height: 0; }
    .az-header-right .btn-social + .btn-social {
      margin-left: 10px; }
  .az-header-right .btn-buy {
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 11px;
    font-weight: 500;
    background-color: #5b47fb;
    color: #fff;
    letter-spacing: .5px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    margin-left: 20px; }
    @media (prefers-reduced-motion: reduce) {
      .az-header-right .btn-buy {
        transition: none; } }
    .az-header-right .btn-buy:hover, .az-header-right .btn-buy:focus {
      background-color: #452efa; }

.az-header-search-link {
  font-size: 18px;
  color: #596882;
  line-height: 1;
  margin-right: 15px; }

.az-header-arrow {
  font-size: 27px;
  color: #1c273c;
  display: inline-block;
  line-height: 0; }
  .az-header-arrow i {
    line-height: 0; }
  .az-header-arrow:hover, .az-header-arrow:focus {
    color: #596882; }

.az-header-message,
.az-header-notification {
  position: relative; }
  .az-header-message > a,
  .az-header-notification > a {
    display: block;
    font-size: 24px;
    color: #1c273c;
    position: relative;
    line-height: .9;
    outline: none; }
    .az-header-message > a.new::before,
    .az-header-notification > a.new::before {
      content: '';
      position: absolute;
      top: -2px;
      right: 2px;
      width: 7px;
      height: 7px;
      background-color: #dc3545;
      border-radius: 100%; }

.az-header-notification {
  margin-left: 15px; }
  .az-header-notification > a::after {
    content: '';
    position: absolute;
    top: 47px;
    left: 50%;
    margin-left: -7px;
    width: 14px;
    height: 14px;
    border: 2px solid transparent;
    border-top-color: #cdd4e0;
    border-left-color: #cdd4e0;
    transform: rotate(45deg);
    background-color: #fff;
    z-index: 901;
    display: none; }
    @media (min-width: 992px) {
      .az-header-notification > a::after {
        bottom: -36px; } }
  .az-header-notification .dropdown-menu {
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px 20px;
    border-width: 0;
    margin-top: 0;
    z-index: 900;
    border-radius: 0; }
    @media (min-width: 576px) {
      .az-header-notification .dropdown-menu {
        width: 300px;
        position: absolute;
        top: 52px;
        left: auto;
        right: -10px;
        bottom: auto;
        padding: 20px 20px 15px;
        border-color: #cdd4e0;
        border-width: 2px; } }
  .az-header-notification .dropdown-footer {
    text-align: center;
    padding-top: 10px;
    font-size: 13px;
    border-top: 1px dotted #b4bdce; }
  @media (min-width: 576px) {
    .az-header-notification.show > a::after {
      display: block; } }
  .az-header-notification.show .dropdown-menu {
    display: block; }

.az-notification-title {
  font-size: 18px;
  font-weight: 700;
  color: #1c273c;
  margin-bottom: 5px;
  line-height: 1; }

.az-notification-text {
  font-size: 13px;
  margin-bottom: 15px; }

.az-notification-list .media {
  padding: 10px 0;
  position: relative; }
  .az-notification-list .media + .media {
    border-top: 1px dotted #b4bdce; }
  .az-notification-list .media.new {
    color: #1c273c; }
  .az-notification-list .media:hover, .az-notification-list .media:focus {
    cursor: pointer;
    z-index: 1; }
    .az-notification-list .media:hover::before, .az-notification-list .media:focus::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -20px;
      bottom: -1px;
      right: -20px;
      background-color: #f4f5f8;
      border-top: 1px solid #cdd4e0;
      border-bottom: 1px solid #cdd4e0;
      z-index: -1; }

.az-notification-list .media-body {
  margin-left: 15px;
  font-size: 13px; }
  .az-notification-list .media-body p {
    margin-bottom: 5px;
    line-height: 1.3; }
  .az-notification-list .media-body strong {
    font-weight: 500; }
  .az-notification-list .media-body span {
    display: block;
    font-size: 11px;
    color: #97a3b9; }

.az-profile-menu {
  position: relative;
  margin-left: 15px; }
  .az-profile-menu > .az-img-user {
    outline: none;
    width: 32px;
    height: 32px; }
    .az-profile-menu > .az-img-user::before {
      content: '';
      position: absolute;
      bottom: -33px;
      left: 50%;
      margin-left: -7px;
      width: 14px;
      height: 14px;
      border: 2px solid transparent;
      border-top-color: #cdd4e0;
      border-left-color: #cdd4e0;
      transform: rotate(45deg);
      background-color: #fff;
      z-index: 901;
      display: none; }
    .az-profile-menu > .az-img-user::after {
      display: none; }
  .az-profile-menu .dropdown-menu {
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px 20px 5px;
    border-width: 0;
    margin-top: 0;
    z-index: 900;
    border-radius: 0; }
    @media (min-width: 576px) {
      .az-profile-menu .dropdown-menu {
        padding-top: 20px;
        position: absolute;
        top: 56px;
        left: auto;
        right: -10px;
        bottom: auto;
        width: 230px;
        border-color: #cdd4e0;
        border-width: 2px; } }
  .az-profile-menu .dropdown-item {
    position: relative;
    padding: 0;
    height: 38px;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #596882; }
    .az-profile-menu .dropdown-item i {
      font-size: 24px;
      margin-right: 10px;
      width: 24px;
      text-align: center; }
      .az-profile-menu .dropdown-item i.typcn {
        line-height: .9; }
    .az-profile-menu .dropdown-item:hover, .az-profile-menu .dropdown-item:focus {
      background-color: transparent;
      color: #5b47fb; }
    .az-profile-menu .dropdown-item + .dropdown-item {
      border-top: 1px dotted #b4bdce; }
    .az-profile-menu .dropdown-item:last-child {
      margin-bottom: 10px; }
  @media (min-width: 576px) {
    .az-profile-menu.show .az-img-user::before {
      display: block; } }
  .az-profile-menu.show .dropdown-menu {
    display: block; }

.az-header-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; }
  .az-header-profile .az-img-user {
    width: 120px;
    height: 120px;
    margin-bottom: 20px; }
    @media (min-width: 576px) {
      .az-header-profile .az-img-user {
        width: 80px;
        height: 80px; } }
    .az-header-profile .az-img-user::after {
      display: none; }
  .az-header-profile h6 {
    font-size: 24px;
    font-weight: 700;
    color: #1c273c;
    margin-bottom: 0; }
    @media (min-width: 576px) {
      .az-header-profile h6 {
        font-size: 18px; } }
  .az-header-profile span {
    display: block;
    font-size: 13px; }

.az-header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; }

/* ###### 6.5 Iconbar  ###### */
@media (max-width: 991.98px) {
  .az-iconbar-show .az-iconbar {
    display: flex; }
  .az-iconbar-show .az-iconbar-aside {
    display: block; } }

.az-iconbar {
  width: 64px;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #fff;
  z-index: 500; }
  @media (min-width: 992px) {
    .az-iconbar {
      display: flex; } }
  .az-iconbar .nav {
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 5px 0; }
  .az-iconbar .nav-link {
    position: relative;
    padding: 0;
    color: #031b4e;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center; }
    .az-iconbar .nav-link i {
      font-size: 28px; }
      .az-iconbar .nav-link i.typcn {
        line-height: 1; }
        .az-iconbar .nav-link i.typcn::before {
          width: auto; }
      .az-iconbar .nav-link i.typcn-device-laptop, .az-iconbar .nav-link i.typcn-th-large-outline {
        font-size: 25px; }
      .az-iconbar .nav-link i.fa-desktop {
        font-size: 23px; }
    .az-iconbar .nav-link:hover, .az-iconbar .nav-link:focus {
      color: #596882; }
    .az-iconbar .nav-link.active {
      color: #5b47fb; }
    .az-iconbar .nav-link + .nav-link {
      margin-top: 10px; }

.az-iconbar-logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  line-height: .9;
  color: #1c273c;
  flex-shrink: 0;
  margin-bottom: 20px;
  position: relative; }
  .az-iconbar-logo::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 20px;
    height: 3px;
    width: 24px;
    background-color: #5b47fb;
    border-radius: 2px; }
  .az-iconbar-logo:hover, .az-iconbar-logo:focus {
    color: #1c273c; }

.az-iconbar-bottom {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center; }

.az-iconbar-help {
  line-height: 0;
  font-size: 22px;
  color: #7987a1;
  margin-bottom: 20px; }
  .az-iconbar-help:hover, .az-iconbar-help:focus {
    color: #1c273c; }

.az-iconbar-aside {
  width: 230px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #b4bdce;
  position: fixed;
  top: 0;
  left: 64px;
  overflow-y: auto;
  z-index: 600;
  display: none; }
  @media (min-width: 1200px) {
    .az-iconbar-aside {
      border-right: 0;
      z-index: 500; } }
  @media (min-width: 992px) {
    .az-iconbar-aside.show {
      display: block; } }
  @media (min-width: 1200px) {
    .az-iconbar-aside.show + .az-content {
      margin-left: 294px; } }

.az-iconbar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-left: 0; }
  .az-iconbar-header .az-logo {
    line-height: 1; }

.az-iconbar-toggle-menu {
  display: block;
  position: relative;
  line-height: 0;
  color: #1c273c;
  font-size: 28px;
  opacity: .5; }
  .az-iconbar-toggle-menu:hover, .az-iconbar-toggle-menu:focus {
    opacity: 1;
    color: #1c273c; }
  .az-iconbar-toggle-menu i:first-child {
    display: none; }
  @media (min-width: 1200px) {
    .az-iconbar-toggle-menu {
      font-size: 24px; }
      .az-iconbar-toggle-menu::before {
        content: '';
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: -1px;
        border-left: 2px solid #1c273c; }
      .az-iconbar-toggle-menu i:first-child {
        display: block; }
      .az-iconbar-toggle-menu i:last-child {
        display: none; } }

.az-iconbar-body {
  padding: 20px;
  padding-left: 0;
  height: calc(100vh - 68px); }
  .az-iconbar-body .nav {
    flex-direction: column;
    border-left: 2px solid #e3e7ed;
    padding-top: 10px;
    padding-left: 20px; }
  .az-iconbar-body .nav-item {
    position: relative;
    display: block; }
    .az-iconbar-body .nav-item + .nav-item {
      margin-top: -1px;
      border-top: 1px dotted #cdd4e0; }
    .az-iconbar-body .nav-item.active .nav-link {
      color: #5b47fb; }
      .az-iconbar-body .nav-item.active .nav-link i {
        color: #5b47fb; }
    .az-iconbar-body .nav-item.show .nav-sub {
      display: block; }
  .az-iconbar-body .nav-link {
    position: relative;
    color: #031b4e;
    font-size: 13px;
    padding: 0;
    display: flex;
    align-items: center;
    height: 38px; }
    .az-iconbar-body .nav-link i {
      color: #97a3b9;
      font-size: 16px;
      font-weight: 400;
      line-height: 0;
      margin-right: 10px; }
      .az-iconbar-body .nav-link i.typcn {
        line-height: .9; }
        .az-iconbar-body .nav-link i.typcn::before {
          width: auto; }
    .az-iconbar-body .nav-link:hover, .az-iconbar-body .nav-link:focus {
      color: #5b47fb; }
      .az-iconbar-body .nav-link:hover i, .az-iconbar-body .nav-link:focus i {
        color: #5b47fb; }
    .az-iconbar-body .nav-link.with-sub {
      justify-content: space-between; }
      .az-iconbar-body .nav-link.with-sub::after {
        content: '\f3d0';
        font-family: 'Ionicons';
        font-size: 11px;
        font-weight: 400;
        display: inline-block;
        position: relative;
        margin-left: auto;
        color: #97a3b9; }
        @media (min-width: 992px) {
          .az-iconbar-body .nav-link.with-sub::after {
            margin-left: 4px;
            font-size: 12px; } }
  .az-iconbar-body .nav-sub {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px dotted #cdd4e0;
    display: none; }
    .az-iconbar-body .nav-sub .nav-sub-item {
      position: relative;
      display: block;
      margin-left: 15px; }
      .az-iconbar-body .nav-sub .nav-sub-item + .nav-sub-item {
        border-top: 1px dotted #cdd4e0; }
      .az-iconbar-body .nav-sub .nav-sub-item.active > .nav-sub-link {
        color: #5b47fb; }
    .az-iconbar-body .nav-sub .nav-sub-link {
      display: flex;
      align-items: center;
      height: 36px;
      color: #031b4e; }
      .az-iconbar-body .nav-sub .nav-sub-link:hover, .az-iconbar-body .nav-sub .nav-sub-link:focus {
        color: #5b47fb; }

.az-iconbar-title {
  font-size: 20px;
  font-weight: 700;
  color: #1c273c;
  margin-bottom: 10px;
  line-height: 1; }

.az-iconbar-text {
  display: block;
  font-size: 12px;
  color: #7987a1;
  margin-bottom: 12px; }

.az-iconbar-pane {
  margin-bottom: 20px;
  display: none; }
  .az-iconbar-pane.show {
    display: block; }

/* ###### 6.6 Navbar  ###### */
@media (max-width: 991.98px) {
  .az-navbar-show {
    overflow: hidden; }
    .az-navbar-show .az-navbar-backdrop {
      visibility: visible;
      opacity: 1; }
    .az-navbar-show .az-navbar {
      transform: translateX(0);
      visibility: visible; } }

.az-navbar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 900;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s; }
  @media (prefers-reduced-motion: reduce) {
    .az-navbar-backdrop {
      transition: none; } }

.az-navbar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1000;
  visibility: hidden;
  transform: translateX(-240px);
  transition: all 0.4s; }
  @media (prefers-reduced-motion: reduce) {
    .az-navbar {
      transition: none; } }
  @media (min-width: 992px) {
    .az-navbar {
      position: relative;
      top: auto;
      left: auto;
      bottom: auto;
      width: auto;
      padding: 0;
      border-right: 0;
      overflow-y: inherit;
      display: block;
      border-bottom: 1px solid rgba(28, 39, 60, 0.12);
      visibility: visible;
      transform: none;
      z-index: auto; } }
  .az-navbar > .container,
  .az-navbar > .container-fluid,
  .az-navbar > .container-sm,
  .az-navbar > .container-md,
  .az-navbar > .container-lg,
  .az-navbar > .container-xl {
    display: flex;
    flex-direction: column; }
    @media (max-width: 991.98px) {
      .az-navbar > .container,
      .az-navbar > .container-fluid,
      .az-navbar > .container-sm,
      .az-navbar > .container-md,
      .az-navbar > .container-lg,
      .az-navbar > .container-xl {
        padding: 0; } }
    @media (min-width: 992px) {
      .az-navbar > .container,
      .az-navbar > .container-fluid,
      .az-navbar > .container-sm,
      .az-navbar > .container-md,
      .az-navbar > .container-lg,
      .az-navbar > .container-xl {
        flex-direction: row;
        align-items: center;
        height: 48px; } }
  @media (min-width: 992px) {
    .az-navbar > .container {
      padding: 0; } }
  @media (min-width: 992px) {
    
    .az-navbar > .container-fluid,
    .az-navbar > .container-sm,
    .az-navbar > .container-md,
    .az-navbar > .container-lg,
    .az-navbar > .container-xl {
      padding-left: 20px;
      padding-right: 20px; } }
  .az-navbar .nav {
    flex-direction: column;
    padding: 20px;
    margin-bottom: 20px; }
    @media (min-width: 992px) {
      .az-navbar .nav {
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;
        padding: 0; } }
  .az-navbar .nav-label {
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    color: #7987a1;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 10px; }
    @media (min-width: 992px) {
      .az-navbar .nav-label {
        display: none; } }
  .az-navbar .nav-item {
    position: relative; }
    .az-navbar .nav-item + .nav-item {
      border-top: 1px dotted #e3e7ed; }
      @media (min-width: 992px) {
        .az-navbar .nav-item + .nav-item {
          border-top: 0;
          margin-left: 15px;
          padding-left: 15px;
          border-left: 1px dotted #e3e7ed; } }
      @media (min-width: 1200px) {
        .az-navbar .nav-item + .nav-item {
          margin-left: 20px;
          padding-left: 20px; } }
    .az-navbar .nav-item.active .nav-link {
      color: #5b47fb; }
    @media (min-width: 992px) {
      .az-navbar .nav-item.show .nav-link::before {
        display: block; } }
    .az-navbar .nav-item.show > .nav-sub {
      display: block; }
  .az-navbar .nav-item-mega {
    position: static; }
  .az-navbar .nav-link {
    padding: 0;
    color: #1c273c;
    font-size: 15px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    height: 42px;
    outline: none; }
    @media (min-width: 992px) {
      .az-navbar .nav-link {
        height: auto;
        font-size: 14px; } }
    .az-navbar .nav-link i {
      font-size: 26px;
      margin-right: 10px; }
      @media (min-width: 992px) {
        .az-navbar .nav-link i {
          margin-right: 8px;
          font-size: 22px; } }
      .az-navbar .nav-link i.typcn {
        line-height: 1;
        width: 20px; }
        @media (min-width: 992px) {
          .az-navbar .nav-link i.typcn {
            line-height: .9;
            width: auto; } }
        .az-navbar .nav-link i.typcn::before {
          width: auto; }
    .az-navbar .nav-link.with-sub::after {
      content: '\f3d0';
      font-family: 'Ionicons';
      font-size: 11px;
      font-weight: 400;
      display: inline-block;
      position: relative;
      margin-left: auto;
      color: #97a3b9; }
      @media (min-width: 992px) {
        .az-navbar .nav-link.with-sub::after {
          margin-left: 4px; } }
    .az-navbar .nav-link.with-sub::before {
      content: '';
      position: absolute;
      top: 39px;
      left: 50%;
      margin-left: -7px;
      width: 15px;
      height: 15px;
      border: 2px solid transparent;
      border-top-color: rgba(28, 39, 60, 0.12);
      border-left-color: rgba(28, 39, 60, 0.12);
      transform: rotate(45deg);
      background-color: #fff;
      z-index: 901;
      display: none; }
  .az-navbar .nav-sub {
    display: none;
    border-top: 1px dotted #e3e7ed;
    list-style: none;
    padding: 0;
    margin: 0; }
    @media (min-width: 992px) {
      .az-navbar .nav-sub {
        position: absolute;
        top: 44.5px;
        left: 0;
        width: 200px;
        background-color: #fff;
        border: 2px solid rgba(28, 39, 60, 0.12);
        padding: 8px 20px;
        z-index: 900; } }
  .az-navbar .nav-sub-item {
    position: relative;
    display: block;
    margin-left: 30px; }
    @media (min-width: 992px) {
      .az-navbar .nav-sub-item {
        margin-left: 0; } }
    .az-navbar .nav-sub-item + .nav-sub-item {
      border-top: 1px dotted #e3e7ed; }
    .az-navbar .nav-sub-item > .nav-sub {
      left: 176px;
      top: -10px;
      display: none; }
      @media (max-width: 991.98px) {
        .az-navbar .nav-sub-item > .nav-sub > .nav-sub-item {
          margin-left: 37px; }
          .az-navbar .nav-sub-item > .nav-sub > .nav-sub-item > .nav-sub-link {
            padding-left: 10px; } }
    .az-navbar .nav-sub-item.show > .nav-sub {
      display: block; }
    .az-navbar .nav-sub-item.active > .nav-sub-link {
      color: #5b47fb; }
  .az-navbar .nav-sub-link {
    position: relative;
    font-size: .875rem;
    color: #596882;
    display: flex;
    align-items: center;
    height: 34px; }
    @media (min-width: 992px) {
      .az-navbar .nav-sub-link {
        font-size: .8125rem;
        height: 36px; } }
    .az-navbar .nav-sub-link:hover, .az-navbar .nav-sub-link:focus {
      color: #5b47fb;
      outline: none; }
    .az-navbar .nav-sub-link.with-sub {
      justify-content: space-between; }
      .az-navbar .nav-sub-link.with-sub::after {
        content: '\f3d0';
        font-family: 'Ionicons';
        font-size: 11px;
        font-weight: 400;
        display: inline-block;
        position: relative;
        margin-left: auto;
        color: #97a3b9; }
        @media (min-width: 992px) {
          .az-navbar .nav-sub-link.with-sub::after {
            margin-left: 4px;
            content: '\f3d1';
            font-size: 12px; } }
  .az-navbar .nav-sub-mega {
    top: 57px;
    left: 0;
    right: 0;
    background-color: transparent;
    padding: 7px 0;
    border: 0;
    width: auto;
    border-top: 1px dotted #e3e7ed;
    pointer-events: none; }
    @media (min-width: 992px) {
      .az-navbar .nav-sub-mega {
        padding: 0 25px;
        border-top: 0; } }
    .az-navbar .nav-sub-mega .container,
    .az-navbar .nav-sub-mega .container-fluid,
    .az-navbar .nav-sub-mega .container-sm,
    .az-navbar .nav-sub-mega .container-md,
    .az-navbar .nav-sub-mega .container-lg,
    .az-navbar .nav-sub-mega .container-xl {
      padding: 0;
      pointer-events: auto; }
      @media (max-width: 991.98px) {
        .az-navbar .nav-sub-mega .container,
        .az-navbar .nav-sub-mega .container-fluid,
        .az-navbar .nav-sub-mega .container-sm,
        .az-navbar .nav-sub-mega .container-md,
        .az-navbar .nav-sub-mega .container-lg,
        .az-navbar .nav-sub-mega .container-xl {
          max-width: none; } }
      @media (min-width: 992px) {
        .az-navbar .nav-sub-mega .container,
        .az-navbar .nav-sub-mega .container-fluid,
        .az-navbar .nav-sub-mega .container-sm,
        .az-navbar .nav-sub-mega .container-md,
        .az-navbar .nav-sub-mega .container-lg,
        .az-navbar .nav-sub-mega .container-xl {
          display: flex;
          background-color: #fff;
          border: 2px solid rgba(28, 39, 60, 0.12); } }
      @media (min-width: 992px) {
        .az-navbar .nav-sub-mega .container > div,
        .az-navbar .nav-sub-mega .container-fluid > div,
        .az-navbar .nav-sub-mega .container-sm > div,
        .az-navbar .nav-sub-mega .container-md > div,
        .az-navbar .nav-sub-mega .container-lg > div,
        .az-navbar .nav-sub-mega .container-xl > div {
          display: flex;
          padding: 20px;
          flex: 1;
          margin-top: 0; } }
      @media (min-width: 1200px) {
        .az-navbar .nav-sub-mega .container > div,
        .az-navbar .nav-sub-mega .container-fluid > div,
        .az-navbar .nav-sub-mega .container-sm > div,
        .az-navbar .nav-sub-mega .container-md > div,
        .az-navbar .nav-sub-mega .container-lg > div,
        .az-navbar .nav-sub-mega .container-xl > div {
          padding: 20px 25px; } }
      .az-navbar .nav-sub-mega .container > div + div,
      .az-navbar .nav-sub-mega .container-fluid > div + div,
      .az-navbar .nav-sub-mega .container-sm > div + div,
      .az-navbar .nav-sub-mega .container-md > div + div,
      .az-navbar .nav-sub-mega .container-lg > div + div,
      .az-navbar .nav-sub-mega .container-xl > div + div {
        margin-top: 25px; }
        @media (min-width: 992px) {
          .az-navbar .nav-sub-mega .container > div + div,
          .az-navbar .nav-sub-mega .container-fluid > div + div,
          .az-navbar .nav-sub-mega .container-sm > div + div,
          .az-navbar .nav-sub-mega .container-md > div + div,
          .az-navbar .nav-sub-mega .container-lg > div + div,
          .az-navbar .nav-sub-mega .container-xl > div + div {
            margin-top: 0;
            border-left: 1px solid rgba(28, 39, 60, 0.05); } }
    .az-navbar .nav-sub-mega .nav {
      min-width: 120px;
      flex-direction: column;
      align-items: stretch;
      padding: 0;
      margin: 0; }
      @media (min-width: 1200px) {
        .az-navbar .nav-sub-mega .nav {
          min-width: 140px; } }
      @media (max-width: 991.98px) {
        .az-navbar .nav-sub-mega .nav + .nav .nav-sub-item:first-child {
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px dotted #e3e7ed; } }
      @media (min-width: 992px) {
        .az-navbar .nav-sub-mega .nav + .nav {
          margin-left: 20px;
          margin-top: 31px;
          padding-top: 0;
          border-top: 0; } }
      @media (min-width: 1200px) {
        .az-navbar .nav-sub-mega .nav + .nav {
          margin-left: 25px; } }
      .az-navbar .nav-sub-mega .nav li:not(.nav-sub-item) {
        display: block;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        color: #1c273c;
        letter-spacing: .5px;
        margin-bottom: 10px;
        margin-top: 30px;
        margin-left: 30px; }
        @media (min-width: 992px) {
          .az-navbar .nav-sub-mega .nav li:not(.nav-sub-item) {
            margin-bottom: 15px;
            margin-left: 0; } }
        .az-navbar .nav-sub-mega .nav li:not(.nav-sub-item):first-of-type {
          margin-top: 0; }
    .az-navbar .nav-sub-mega .nav-sub-item + .nav-sub-item {
      padding-top: 7px;
      margin-top: 7px; }
    .az-navbar .nav-sub-mega .nav-sub-link {
      height: auto; }

.az-navbar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #e3e7ed;
  height: 60px; }
  @media (min-width: 992px) {
    .az-navbar-header {
      display: none; } }

.az-navbar-search {
  position: relative;
  padding: 0 20px;
  border-bottom: 1px solid #e3e7ed; }
  @media (min-width: 992px) {
    .az-navbar-search {
      display: none; } }
  .az-navbar-search .form-control {
    border-width: 0;
    padding: 0; }
    .az-navbar-search .form-control:focus {
      box-shadow: none !important;
      border-color: #cdd4e0; }
  .az-navbar-search .btn {
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    height: 38px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    line-height: 1; }

/* ###### 6.7 Navbar Variant  ###### */
.az-navbar-two .nav-item.active {
  position: relative; }
  .az-navbar-two .nav-item.active::before {
    content: '';
    position: absolute; }
    @media (min-width: 992px) {
      .az-navbar-two .nav-item.active::before {
        top: 33px;
        left: 0;
        right: 12px;
        bottom: auto;
        border-bottom: 2px solid #5b47fb;
        z-index: 5; } }

.az-navbar-two .nav-item.show .nav-link::before {
  display: none; }

.az-navbar-two .nav-link {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700; }

.az-navbar-two .nav-sub {
  border-width: 1px;
  top: 35px;
  border-top-width: 0; }

.az-navbar-two .nav-sub-item > .nav-sub {
  left: 178px;
  top: -8px;
  border-top-width: 1px; }

.az-navbar-two .nav-sub-mega {
  top: 48px; }

.az-navbar-three .nav-item {
  display: block; }
  .az-navbar-three .nav-item + .nav-item {
    border-left-width: 0;
    padding-left: 0; }
    @media (min-width: 992px) {
      .az-navbar-three .nav-item + .nav-item {
        margin-left: 25px; } }
  .az-navbar-three .nav-item.show .nav-link::before {
    display: none; }
  .az-navbar-three .nav-item.active .nav-link {
    color: #5b47fb;
    font-weight: 700; }

.az-navbar-three .nav-link {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: #3b4863;
  position: relative; }
  @media (min-width: 992px) {
    .az-navbar-three .nav-link {
      display: block; } }
  .az-navbar-three .nav-link:hover, .az-navbar-three .nav-link:focus {
    color: #1c273c; }
  @media (min-width: 992px) {
    .az-navbar-three .nav-link i {
      display: none; } }

.az-navbar-three .nav-sub {
  top: 35px;
  border-width: 0;
  padding-bottom: 5px; }
  @media (min-width: 992px) {
    .az-navbar-three .nav-sub {
      box-shadow: 0 0 0 2px rgba(180, 189, 206, 0.5);
      padding-bottom: 8px; } }

.az-navbar-three .nav-sub-item + .nav-sub-item {
  border-top: 0; }

.az-navbar-three .nav-sub-item .nav-sub {
  top: -8px;
  left: 182px; }

.az-navbar-three .nav-sub-link {
  height: 30px; }
  @media (min-width: 992px) {
    .az-navbar-three .nav-sub-link {
      height: 36px; } }

/* ###### 6.8 Sidebar  ###### */
@media (max-width: 991.98px) {
  .az-sidebar-show {
    overflow: hidden; }
    .az-sidebar-show .az-sidebar {
      display: flex;
      overflow-y: auto;
      transform: translateX(0);
      visibility: visible; }
    .az-sidebar-show .az-content {
      transform: translateX(240px); }
    .az-sidebar-show .az-navbar-backdrop {
      visibility: visible;
      opacity: 1; } }

@media (min-width: 992px) {
  .az-sidebar-hide .az-sidebar {
    display: none; }
  .az-sidebar-hide .az-sidebar-sticky + .az-content {
    margin-left: 0; } }

.az-body-sidebar {
  display: block; }
  @media (min-width: 992px) {
    .az-body-sidebar {
      display: flex;
      flex-direction: row; } }
  .az-body-sidebar .az-content {
    flex: 1;
    padding: 0;
    display: flex;
    flex-direction: column; }
  @media (min-width: 992px) {
    .az-body-sidebar .az-header .container-fluid, .az-body-sidebar .az-header .container-sm, .az-body-sidebar .az-header .container-md, .az-body-sidebar .az-header .container-lg, .az-body-sidebar .az-header .container-xl {
      padding-left: 20px;
      padding-right: 20px; } }
  .az-body-sidebar .az-content-header {
    height: auto;
    padding: 20px;
    margin-bottom: 0; }
  .az-body-sidebar .az-content-body {
    padding: 0 20px 20px; }
  .az-body-sidebar .az-footer {
    margin-top: auto; }

.az-sidebar {
  width: 240px;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 0 solid #cdd4e0;
  transform: translateX(-240px);
  visibility: hidden;
  transition: all 0.4s; }
  @media (prefers-reduced-motion: reduce) {
    .az-sidebar {
      transition: none; } }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .az-sidebar {
      width: 220px; } }
  @media (max-width: 991.98px) {
    .az-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 1000;
      background-color: #fff; } }
  @media (min-width: 992px) {
    .az-sidebar {
      position: relative;
      display: flex;
      transform: none;
      z-index: 1050;
      border-right-width: 1px;
      visibility: visible; } }

.az-sidebar-sticky {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0; }
  .az-sidebar-sticky .az-sidebar-body {
    height: calc(100vh - 122px);
    position: relative; }
  @media (min-width: 992px) {
    .az-sidebar-sticky + .az-content {
      margin-left: 220px; } }
  @media (min-width: 1200px) {
    .az-sidebar-sticky + .az-content {
      margin-left: 240px; } }

.az-sidebar-header {
  flex-shrink: 0;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px; }

.az-sidebar-loggedin {
  padding: 10px 20px;
  display: flex;
  flex-shrink: 0; }
  .az-sidebar-loggedin .az-img-user {
    width: 36px;
    height: 36px; }
  .az-sidebar-loggedin .media-body {
    margin-left: 12px; }
    .az-sidebar-loggedin .media-body h6 {
      font-weight: 700;
      font-size: 14px;
      color: #1c273c;
      margin-bottom: 2px; }
    .az-sidebar-loggedin .media-body span {
      display: block;
      color: #7987a1; }

.az-sidebar-body {
  padding: 20px; }
  @media (min-width: 1200px) {
    .az-sidebar-body {
      padding: 20px; } }
  .az-sidebar-body .nav {
    flex-direction: column; }
  .az-sidebar-body .nav-label {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .5px;
    color: #7987a1;
    padding-bottom: 5px;
    border-bottom: 1px dotted #cdd4e0; }
  .az-sidebar-body .nav-item {
    position: relative;
    display: block; }
    .az-sidebar-body .nav-item.active .nav-link {
      color: #5b47fb; }
    .az-sidebar-body .nav-item.show > .nav-sub {
      display: block; }
    .az-sidebar-body .nav-item + .nav-item {
      margin-top: -1px; }
      .az-sidebar-body .nav-item + .nav-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 30px;
        right: 0;
        border-top: 1px dotted #cdd4e0; }
  .az-sidebar-body .nav-link {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0;
    font-weight: 500;
    font-size: 14px;
    color: #1c273c;
    padding-bottom: 2px; }
    .az-sidebar-body .nav-link i {
      font-size: 24px;
      line-height: 0;
      margin-right: 5px;
      width: 24px; }
      .az-sidebar-body .nav-link i.typcn {
        line-height: .9; }
        .az-sidebar-body .nav-link i.typcn::before {
          width: auto; }
    .az-sidebar-body .nav-link.with-sub {
      position: relative; }
      .az-sidebar-body .nav-link.with-sub::after {
        content: '\f3d0';
        font-family: 'Ionicons';
        font-weight: 400;
        font-size: 12px;
        position: absolute;
        top: 10px;
        right: 0;
        color: #cdd4e0; }
  .az-sidebar-body .nav-sub {
    list-style: none;
    padding: 0;
    display: none;
    padding: 0 0 10px 21px;
    margin: 0 0 0 7px;
    border-left: 2px solid #e3e7ed; }
  .az-sidebar-body .nav-sub-item .nav-sub {
    padding: 0 0 0 12px;
    border-left-width: 1px;
    margin-left: 0; }
    .az-sidebar-body .nav-sub-item .nav-sub .nav-sub-link {
      height: auto;
      padding: 7px 0; }
  .az-sidebar-body .nav-sub-item.active > .nav-sub-link {
    color: #5b47fb; }
  .az-sidebar-body .nav-sub-item.show .nav-sub {
    display: block; }
  .az-sidebar-body .nav-sub-link {
    height: 34px;
    display: flex;
    align-items: center;
    color: #031b4e;
    font-size: 13px; }
    .az-sidebar-body .nav-sub-link:hover, .az-sidebar-body .nav-sub-link:focus {
      color: #5b47fb; }
    .az-sidebar-body .nav-sub-link.with-sub {
      justify-content: space-between; }
      .az-sidebar-body .nav-sub-link.with-sub::after {
        content: '\f3d0';
        font-family: 'Ionicons';
        font-size: 12px;
        font-weight: 400;
        display: inline-block;
        position: relative;
        margin-left: auto;
        color: #cdd4e0; }
        @media (min-width: 992px) {
          .az-sidebar-body .nav-sub-link.with-sub::after {
            margin-left: 4px;
            font-size: 12px; } }
    .az-sidebar-body .nav-sub-link + .nav-sub-link {
      border-top: 1px dotted #cdd4e0; }

/* ############### TEMPLATE STYLES ############### */
/* ###### 7.1 Demo  ###### */
.az-home-slider {
  position: relative;
  z-index: 4;
  width: 100%;
  height: 600px;
  max-height: 1800px;
  overflow: hidden;
  background-color: #1904be; }
  @media (min-width: 576px) {
    .az-home-slider {
      height: 600px; } }
  @media (min-width: 1200px) {
    .az-home-slider {
      height: 100vh;
      max-height: 780px; } }
  @media (min-width: 1440px) {
    .az-home-slider {
      max-height: 900px; } }
  @media (min-width: 1680px) {
    .az-home-slider {
      max-height: 1050px; } }
  @media (min-width: 1920px) {
    .az-home-slider {
      max-height: 1200px; } }
  @media (min-width: 2560px) {
    .az-home-slider {
      max-height: 1600px; } }
  @media (min-width: 2880px) {
    .az-home-slider {
      max-height: 1800px; } }
  .az-home-slider .chart-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -20px;
    z-index: 3;
    display: flex;
    align-items: flex-end;
    opacity: .2; }
    @media (min-width: 768px) {
      .az-home-slider .chart-wrapper {
        opacity: 1; } }
    .az-home-slider .chart-wrapper .flot-chart {
      width: 100%;
      height: 400px; }
      @media (min-width: 992px) {
        .az-home-slider .chart-wrapper .flot-chart {
          height: 500px; } }
  .az-home-slider .card-columns {
    column-gap: 5px;
    column-count: 3;
    width: 500px;
    transform: rotate(37deg);
    position: absolute;
    top: 9%;
    left: 24%;
    z-index: 4;
    opacity: .25; }
    @media (min-width: 576px) {
      .az-home-slider .card-columns {
        width: 120%;
        left: 16%;
        transform: rotate(44deg); } }
    @media (min-width: 768px) {
      .az-home-slider .card-columns {
        transform: rotate(45deg);
        width: 100%;
        top: 0;
        left: auto;
        right: -45%;
        opacity: 1; } }
    @media (min-width: 992px) {
      .az-home-slider .card-columns {
        width: 80%;
        top: -10%;
        right: -30%;
        column-gap: 10px; } }
    @media (min-width: 1200px) {
      .az-home-slider .card-columns {
        width: 70%;
        right: -15%;
        top: -15%; } }
    @media (min-width: 1300px) {
      .az-home-slider .card-columns {
        right: -5%; } }
    .az-home-slider .card-columns .card {
      position: relative;
      border-width: 0;
      background-color: transparent;
      margin-bottom: 5px; }
      @media (min-width: 992px) {
        .az-home-slider .card-columns .card {
          margin-bottom: 10px; } }

.az-home-content {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 5;
  color: rgba(255, 255, 255, 0.7);
  right: 20px; }
  @media (min-width: 576px) {
    .az-home-content {
      top: 40px;
      left: 40px;
      right: auto;
      width: 400px; } }
  @media (min-width: 768px) {
    .az-home-content {
      width: 410px; } }
  .az-home-content .az-logo {
    font-size: 30px;
    font-weight: 700;
    display: flex;
    line-height: 1;
    color: #fff;
    margin-bottom: 5px;
    text-indent: -1px;
    color: #fff;
    letter-spacing: -.5px; }
    @media (min-width: 576px) {
      .az-home-content .az-logo {
        font-size: 36px;
        letter-spacing: -1px; } }
  .az-home-content h5 {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: .2px;
    margin-bottom: 25px; }
    @media (min-width: 576px) {
      .az-home-content h5 {
        font-size: 15px; } }
  .az-home-content .logo-group {
    margin-bottom: 60px;
    display: flex; }
    .az-home-content .logo-group i {
      font-weight: 400;
      font-size: 32px;
      line-height: .2; }
      .az-home-content .logo-group i + i {
        margin-left: 10px; }
  .az-home-content h1 {
    color: #fff;
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 20px; }
    @media (min-width: 576px) {
      .az-home-content h1 {
        font-size: 2.03125rem; } }
  .az-home-content p:first-of-type {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 25px; }
  .az-home-content p:last-of-type {
    display: flex;
    margin-bottom: 100px; }
    .az-home-content p:last-of-type .btn {
      flex: 1;
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 500;
      min-height: inherit;
      letter-spacing: 1px;
      padding: 10px 15px; }
      @media (min-width: 768px) {
        .az-home-content p:last-of-type .btn {
          padding: 10px 25px;
          flex: none; } }
      @media (min-width: 992px) {
        .az-home-content p:last-of-type .btn {
          flex: 1; } }
      .az-home-content p:last-of-type .btn + .btn {
        margin-left: 5px; }
  .az-home-content nav:last-child {
    display: flex; }
    .az-home-content nav:last-child a {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5); }
      .az-home-content nav:last-child a:hover, .az-home-content nav:last-child a:focus {
        color: #fff; }
      .az-home-content nav:last-child a + a {
        margin-left: 8px; }

.az-content-choose-demo {
  position: relative;
  z-index: 5;
  background-color: #0f0373;
  color: rgba(255, 255, 255, 0.5);
  padding: 0; }
  .az-content-choose-demo .container {
    display: block;
    padding: 20px; }
    @media (min-width: 576px) {
      .az-content-choose-demo .container {
        padding: 40px; } }
    @media (min-width: 992px) {
      .az-content-choose-demo .container {
        padding: 100px 40px; } }
    @media (min-width: 1200px) {
      .az-content-choose-demo .container {
        padding: 100px 0; } }
  .az-content-choose-demo .title-label {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    color: #5b47fb;
    margin-bottom: 3px; }
    @media (min-width: 768px) {
      .az-content-choose-demo .title-label {
        font-size: 11px; } }
  .az-content-choose-demo .title {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    letter-spacing: -.5px;
    margin-bottom: 10px; }
    @media (min-width: 768px) {
      .az-content-choose-demo .title {
        font-size: 30px; } }
  .az-content-choose-demo .title-text {
    font-weight: 300;
    margin-bottom: 20px; }
    @media (min-width: 576px) {
      .az-content-choose-demo .title-text {
        margin-bottom: 40px; } }
    @media (min-width: 768px) {
      .az-content-choose-demo .title-text {
        font-size: 16px; } }
    @media (min-width: 992px) {
      .az-content-choose-demo .title-text {
        margin-bottom: 60px; } }
  .az-content-choose-demo .card {
    border-width: 0;
    margin-bottom: 10px;
    height: 200px;
    overflow: hidden;
    position: relative; }
    @media (min-width: 576px) {
      .az-content-choose-demo .card {
        height: 155px; } }
    @media (min-width: 768px) {
      .az-content-choose-demo .card {
        height: 215px;
        margin-bottom: 15px; } }
    @media (min-width: 1200px) {
      .az-content-choose-demo .card {
        height: 255px; } }
    .az-content-choose-demo .card img {
      transition: all 0.2s ease-in-out; }
      @media (prefers-reduced-motion: reduce) {
        .az-content-choose-demo .card img {
          transition: none; } }
    .az-content-choose-demo .card figure {
      margin-bottom: 0; }
      .az-content-choose-demo .card figure:hover img, .az-content-choose-demo .card figure:focus img {
        transform: scale(1.75, 1.75); }
      .az-content-choose-demo .card figure:hover figcaption, .az-content-choose-demo .card figure:focus figcaption {
        opacity: 1; }
    .az-content-choose-demo .card figcaption {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(25, 4, 190, 0.75);
      opacity: 0;
      transition: all 0.2s ease-in-out; }
      @media (prefers-reduced-motion: reduce) {
        .az-content-choose-demo .card figcaption {
          transition: none; } }
      .az-content-choose-demo .card figcaption .btn {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 11px;
        font-weight: 500;
        min-height: inherit;
        padding: 10px 20px;
        border-radius: 2px; }
    .az-content-choose-demo .card.coming-soon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1c273c;
      background-color: #e3e7ed; }
      .az-content-choose-demo .card.coming-soon .typcn {
        line-height: .9;
        font-size: 48px;
        margin-bottom: 10px; }
      .az-content-choose-demo .card.coming-soon h6 {
        margin-bottom: 0;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px; }
  .az-content-choose-demo .az-content-label {
    color: #7987a1;
    margin-bottom: 5px;
    letter-spacing: 1px; }
  .az-content-choose-demo .az-content-title {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
    color: #fff; }
    @media (min-width: 768px) {
      .az-content-choose-demo .az-content-title {
        font-size: 17px; } }

.az-footer-demo {
  background-color: #0c025b;
  color: rgba(255, 255, 255, 0.4);
  height: 60px; }
  .az-footer-demo .container {
    border-top-width: 0; }
  .az-footer-demo a {
    color: rgba(255, 255, 255, 0.5); }
    .az-footer-demo a:hover, .az-footer-demo a:focus {
      color: #fff; }

.btn-icon-list {
  display: flex;
  align-items: center; }
  .btn-icon-list .btn + .btn {
    margin-left: 5px; }

.az-icon-group {
  text-align: center;
  padding: 20px;
  color: #3b4863; }
  .az-icon-group i {
    line-height: 1;
    font-size: 24px; }
    @media (min-width: 992px) {
      .az-icon-group i {
        font-size: 32px; } }

.modal-content-demo .modal-body h6 {
  color: #1c273c;
  font-size: 15px;
  margin-bottom: 15px; }

.modal-content-demo .modal-body p {
  margin-bottom: 0; }

.tooltip-static-demo {
  text-align: center;
  background-color: #e3e7ed;
  padding: 20px; }
  .tooltip-static-demo .tooltip {
    z-index: 0;
    opacity: 1;
    position: relative;
    display: inline-block;
    margin: 0 10px; }
  .tooltip-static-demo .bs-tooltip-top .arrow, .tooltip-static-demo .bs-tooltip-auto[x-placement^="top"] .arrow,
  .tooltip-static-demo .bs-tooltip-bottom .arrow,
  .tooltip-static-demo .bs-tooltip-auto[x-placement^="bottom"] .arrow {
    left: 50%;
    margin-left: -2px; }
  .tooltip-static-demo .bs-tooltip-left, .tooltip-static-demo .bs-tooltip-auto[x-placement^="left"],
  .tooltip-static-demo .bs-tooltip-right,
  .tooltip-static-demo .bs-tooltip-auto[x-placement^="right"] {
    margin-top: 5px; }
    .tooltip-static-demo .bs-tooltip-left .arrow, .tooltip-static-demo .bs-tooltip-auto[x-placement^="left"] .arrow,
    .tooltip-static-demo .bs-tooltip-right .arrow,
    .tooltip-static-demo .bs-tooltip-auto[x-placement^="right"] .arrow {
      top: 50%;
      margin-top: -3px; }

.popover-static-demo {
  background-color: #e3e7ed;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center; }
  .popover-static-demo .popover {
    z-index: 0;
    opacity: 1;
    position: relative;
    display: inline-block;
    margin: 0 10px; }
  .popover-static-demo .bs-popover-top .arrow, .popover-static-demo .bs-popover-auto[x-placement^="top"] .arrow,
  .popover-static-demo .bs-popover-bottom .arrow,
  .popover-static-demo .bs-popover-auto[x-placement^="bottom"] .arrow {
    left: 50%;
    margin-left: -5px; }
  .popover-static-demo .bs-popover-left, .popover-static-demo .bs-popover-auto[x-placement^="left"],
  .popover-static-demo .bs-popover-right,
  .popover-static-demo .bs-popover-auto[x-placement^="right"] {
    margin-top: 5px; }
    .popover-static-demo .bs-popover-left .arrow, .popover-static-demo .bs-popover-auto[x-placement^="left"] .arrow,
    .popover-static-demo .bs-popover-right .arrow,
    .popover-static-demo .bs-popover-auto[x-placement^="right"] .arrow {
      top: 50%;
      margin-top: -5px; }

.az-toggle-group-demo {
  display: flex; }
  .az-toggle-group-demo .az-toggle + .az-toggle {
    margin-left: 10px; }

.az-dropdown-form-demo .static-dropdown {
  padding: 20px;
  background-color: #e3e7ed;
  display: inline-flex;
  justify-content: center; }
  @media (min-width: 576px) {
    .az-dropdown-form-demo .static-dropdown {
      padding: 40px; } }
  .az-dropdown-form-demo .static-dropdown .dropdown-menu {
    display: block;
    position: static;
    float: none; }

.az-dropdown-form-demo .dropdown-menu {
  padding: 20px; }
  @media (min-width: 576px) {
    .az-dropdown-form-demo .dropdown-menu {
      width: 300px;
      padding: 30px 25px; } }

.az-dropdown-form-demo .dropdown-title {
  font-size: 20px;
  font-weight: 700;
  color: #1c273c;
  margin-bottom: 5px; }

.ql-wrapper-demo {
  background-color: #fff; }
  @media (min-width: 1200px) {
    .ql-wrapper-demo {
      width: 70%; } }
  .ql-wrapper-demo .ql-container {
    height: 250px; }
  .ql-wrapper-demo .ql-editor {
    height: 100%;
    overflow-y: auto; }

.ql-scrolling-demo {
  background-color: #fff;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  border: 2px solid #e3e7ed;
  position: relative; }
  @media (min-width: 768px) {
    .ql-scrolling-demo {
      padding-left: 15px; } }
  .ql-scrolling-demo .ql-container {
    border-width: 0;
    height: auto;
    min-height: 100%;
    padding: 30px; }
    @media (min-width: 768px) {
      .ql-scrolling-demo .ql-container {
        padding: 50px;
        padding-left: 35px; } }
    .ql-scrolling-demo .ql-container .ql-editor {
      font-size: 16px;
      overflow-y: visible;
      color: #3b4863; }

.morris-wrapper-demo {
  height: 200px;
  position: relative;
  margin-left: -15px;
  margin-right: -15px; }
  @media (min-width: 576px) {
    .morris-wrapper-demo {
      height: 300px; } }

.morris-donut-wrapper-demo {
  height: 200px; }
  @media (min-width: 576px) {
    .morris-donut-wrapper-demo {
      height: 250px; } }

.chartjs-wrapper-demo {
  height: 250px; }
  @media (max-width: 330px) {
    .chartjs-wrapper-demo {
      width: 290px; } }
  @media (min-width: 992px) {
    .chartjs-wrapper-demo {
      height: 300px; } }

.chartist-wrapper-demo {
  height: 200px; }
  @media (min-width: 768px) {
    .chartist-wrapper-demo {
      height: 300px; } }

.az-content-left-components {
  border-right: 1px solid #e3e7ed;
  width: 200px; }
  .az-content-left-components .component-item label {
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px; }
    .az-content-left-components .component-item label ~ label {
      margin-top: 30px; }
  .az-content-left-components .component-item .nav-link {
    padding: 0;
    display: block;
    font-size: 13px;
    color: #596882; }
    .az-content-left-components .component-item .nav-link + .nav-link {
      margin-top: 5px; }
    .az-content-left-components .component-item .nav-link:hover {
      color: #5b47fb; }
    .az-content-left-components .component-item .nav-link.active {
      color: #5b47fb;
      font-weight: 500; }

.az-breadcrumbs {
  padding: 0;
  background-color: transparent;
  margin-bottom: 0; }
  .az-breadcrumbs .breadcrumb-item {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .5px;
    font-weight: 700; }
    .az-breadcrumbs .breadcrumb-item a {
      color: #031b4e;
      transition: all 0.2s ease-in-out; }
      @media (prefers-reduced-motion: reduce) {
        .az-breadcrumbs .breadcrumb-item a {
          transition: none; } }
      .az-breadcrumbs .breadcrumb-item a:hover {
        color: #97a3b9; }
    .az-breadcrumbs .breadcrumb-item.active {
      color: #3366ff; }
    .az-breadcrumbs .breadcrumb-item + .breadcrumb-item {
      padding-left: 8px; }
      .az-breadcrumbs .breadcrumb-item + .breadcrumb-item::before {
        color: #97a3b9;
        padding-right: 8px;
        font-weight: 400; }

.az-page-header {
  position: relative;
  padding: 30px 0 40px;
  border-bottom: 1px solid #dee2ef;
  margin-bottom: 40px; }

.az-page-title {
  font-weight: 700;
  font-size: 40px;
  font-family: "Raleway", sans-serif;
  margin-bottom: 15px;
  line-height: 1;
  letter-spacing: -1.5px; }

.az-page-text {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 30px; }

.az-page-content-list {
  margin: 0;
  padding: 0;
  list-style: none; }
  .az-page-content-list li {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500; }
    .az-page-content-list li + li {
      margin-top: 5px; }
    .az-page-content-list li i {
      margin-right: 10px;
      font-size: 10px;
      line-height: 0;
      color: #97a3b9;
      text-indent: 1px; }

.az-page-label {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  letter-spacing: -.2px; }

.az-syntax-wrapper {
  position: relative; }
  .az-syntax-wrapper .badge {
    padding: 4px 5px;
    position: absolute;
    top: 5px;
    right: 5px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 9px;
    letter-spacing: normal;
    border-radius: 1px; }
  .az-syntax-wrapper pre {
    border-color: #cdd4e0;
    background-color: #fff;
    padding: 15px;
    font-size: 13px; }
  .az-syntax-wrapper code[class*="language-"],
  .az-syntax-wrapper pre[class*="language-"] {
    font-family: 'Roboto Mono', monospace; }

.demo-avatar-group {
  display: flex;
  align-items: center; }
  .demo-avatar-group .az-img-user,
  .demo-avatar-group .az-avatar {
    flex-shrink: 0; }
    .demo-avatar-group .az-img-user + .az-img-user,
    .demo-avatar-group .az-img-user + .az-avatar,
    .demo-avatar-group .az-avatar + .az-img-user,
    .demo-avatar-group .az-avatar + .az-avatar {
      margin-left: 5px; }
      @media (min-width: 576px) {
        .demo-avatar-group .az-img-user + .az-img-user,
        .demo-avatar-group .az-img-user + .az-avatar,
        .demo-avatar-group .az-avatar + .az-img-user,
        .demo-avatar-group .az-avatar + .az-avatar {
          margin-left: 10px; } }

.demo-static-toast .toast {
  opacity: 1; }

/* ###### 7.8 Profile  ###### */
.az-content-profile {
  flex: 1; }
  @media (max-width: 991.98px) {
    .az-content-profile .container,
    .az-content-profile .container-fluid,
    .az-content-profile .container-sm,
    .az-content-profile .container-md,
    .az-content-profile .container-lg,
    .az-content-profile .container-xl {
      display: block; } }

.az-content-left-profile {
  padding-left: 0;
  padding-right: 0;
  display: block;
  border-bottom: 1px solid #cdd4e0;
  padding-bottom: 25px;
  width: auto; }
  @media (min-width: 992px) {
    .az-content-left-profile {
      width: 270px;
      padding-right: 20px;
      padding-bottom: 0;
      border-right: 1px solid #cdd4e0;
      border-bottom: 0; } }
  @media (min-width: 1200px) {
    .az-content-left-profile {
      padding-right: 25px; } }

.az-profile-overview .az-img-user {
  width: 120px;
  height: 120px;
  margin-bottom: 20px; }
  .az-profile-overview .az-img-user::after {
    display: none; }

.az-profile-overview .btn-icon-list .btn {
  border-radius: 100%; }

.az-profile-name {
  color: #1c273c;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 2px; }

.az-profile-name-text {
  color: #7987a1;
  font-size: 13px;
  margin-bottom: 0; }

.az-profile-bio {
  font-size: 13px;
  margin-bottom: 20px; }

.az-profile-social-list .media {
  align-items: center; }
  .az-profile-social-list .media + .media {
    margin-top: 20px; }

.az-profile-social-list .media-icon {
  font-size: 34px;
  width: 30px;
  line-height: 0; }

.az-profile-social-list .media-body {
  margin-left: 20px; }
  .az-profile-social-list .media-body span {
    display: block;
    font-size: 12px; }
  .az-profile-social-list .media-body a {
    font-size: 13px; }

.az-content-body-profile .nav {
  flex-direction: column;
  padding: 20px 20px 20px 0;
  border-bottom: 1px solid #cdd4e0; }
  @media (min-width: 576px) {
    .az-content-body-profile .nav {
      flex-direction: row;
      align-items: center;
      padding-bottom: 10px; } }
  @media (min-width: 992px) {
    .az-content-body-profile .nav {
      padding-left: 20px; } }
  @media (min-width: 1200px) {
    .az-content-body-profile .nav {
      padding-left: 25px; } }

.az-content-body-profile .az-nav-line .nav-link {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  color: #3b4863; }
  .az-content-body-profile .az-nav-line .nav-link.active {
    font-weight: 700;
    color: #5b47fb; }
    .az-content-body-profile .az-nav-line .nav-link.active::before {
      background-color: #5b47fb; }
      @media (min-width: 576px) and (max-width: 767.98px) {
        .az-content-body-profile .az-nav-line .nav-link.active::before {
          width: auto;
          top: auto;
          left: 0;
          right: 0;
          height: 2px; } }
      @media (min-width: 576px) {
        .az-content-body-profile .az-nav-line .nav-link.active::before {
          bottom: -11px; } }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .az-content-body-profile .az-nav-line .nav-link + .nav-link {
      margin-top: 0;
      margin-left: 20px; } }

.az-profile-body {
  padding: 15px 0 0; }
  @media (min-width: 576px) {
    .az-profile-body {
      padding-top: 20px; } }
  @media (min-width: 992px) {
    .az-profile-body {
      padding: 25px 0 0 20px; } }
  @media (min-width: 1200px) {
    .az-profile-body {
      padding-left: 25px; } }

.az-profile-view-chart {
  position: relative;
  width: calc(100% - 10px);
  height: 200px; }
  @media (min-width: 375px) {
    .az-profile-view-chart {
      width: 100%; } }
  @media (min-width: 576px) {
    .az-profile-view-chart {
      height: 250px; } }

.az-profile-view-info {
  position: absolute;
  top: 0;
  left: 0; }
  .az-profile-view-info h6 {
    font-size: 32px;
    font-weight: 500;
    color: #1c273c;
    margin-bottom: 0; }
  .az-profile-view-info span {
    font-size: 12px;
    color: #f10075;
    margin-left: 5px; }
  .az-profile-view-info p {
    font-size: 13px;
    margin-bottom: 0; }

.az-traffic-detail-item > div:first-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 7px; }
  .az-traffic-detail-item > div:first-child > span:first-child {
    color: #7987a1; }
  .az-traffic-detail-item > div:first-child > span:last-child {
    font-size: 11px;
    font-weight: 700;
    color: #1c273c; }
    .az-traffic-detail-item > div:first-child > span:last-child span {
      color: #7987a1;
      font-weight: 400; }

.az-traffic-detail-item + .az-traffic-detail-item {
  margin-top: 25px; }

.az-traffic-detail-item .progress {
  height: 8px; }

.az-profile-work-list .media + .media {
  margin-top: 25px; }

.az-profile-work-list .media-logo {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: #fff;
  font-size: 21px;
  position: relative;
  top: 2px;
  border-radius: 100%; }

.az-profile-work-list .media-body {
  margin-left: 20px; }
  .az-profile-work-list .media-body h6 {
    color: #1c273c;
    font-weight: 500;
    margin-bottom: 2px; }
  .az-profile-work-list .media-body span {
    display: block;
    margin-bottom: 5px; }
  .az-profile-work-list .media-body p {
    margin-bottom: 0;
    font-size: 12px;
    color: #7987a1; }

.az-profile-contact-list .media {
  align-items: center; }
  .az-profile-contact-list .media + .media {
    margin-top: 25px; }

.az-profile-contact-list .media-icon {
  line-height: 0;
  font-size: 36px;
  width: 35px;
  text-align: center; }

.az-profile-contact-list .media-body {
  margin-left: 25px; }
  .az-profile-contact-list .media-body span {
    font-size: 12px;
    color: #7987a1;
    display: block;
    line-height: 1.3; }
  .az-profile-contact-list .media-body div {
    font-weight: 500;
    color: #1c273c; }

/* ###### 7.9 Signin  ###### */
.az-signin-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center; }

.az-card-signin {
  height: 560px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5); }
  @media (min-width: 480px) {
    .az-card-signin {
      border: 1px solid #cdd4e0;
      width: 360px;
      padding: 30px 35px; } }

.az-signin-header h2 {
  font-weight: 500;
  color: #5b47fb;
  letter-spacing: -1px; }

.az-signin-header h4 {
  font-weight: 400;
  color: #1c273c;
  margin-bottom: 25px; }

.az-signin-header label {
  color: #7987a1; }

.az-signin-header .form-control {
  color: #1c273c;
  font-weight: 500;
  border-width: 2px;
  border-color: #cdd4e0; }
  .az-signin-header .form-control:focus {
    border-color: #b4bdce;
    box-shadow: none; }
  .az-signin-header .form-control::placeholder {
    font-weight: 400;
    color: #97a3b9; }

.az-signin-header .btn {
  margin-top: 25px; }

.az-signin-footer p {
  color: #7987a1; }
  .az-signin-footer p:first-child {
    margin-bottom: 5px; }
  .az-signin-footer p:last-child {
    margin-bottom: 0; }

.az-signin-footer a {
  color: #1c273c;
  font-weight: 700; }
  .az-signin-footer a:hover, .az-signin-footer a:focus {
    color: #5b47fb; }

/* ############### DASHBOARD STYLES ############### */
/* ###### 8.1 Dashboard One  ###### */
.az-content-dashboard {
  padding-top: 20px; }
  @media (min-width: 992px) {
    .az-content-dashboard {
      padding-top: 30px; } }

.az-dashboard-one-title {
  margin-bottom: 20px; }
  @media (min-width: 576px) {
    .az-dashboard-one-title {
      display: flex;
      align-items: center;
      justify-content: space-between; } }
  @media (min-width: 992px) {
    .az-dashboard-one-title {
      margin-bottom: 30px; } }

.az-dashboard-title {
  font-size: 22px;
  font-weight: 700;
  color: #1c273c;
  letter-spacing: -1px;
  margin-bottom: 3px; }

.az-dashboard-text {
  font-size: 13px;
  margin-bottom: 0; }

.az-dashboard-date {
  display: flex;
  align-items: center;
  margin-top: 20px; }
  @media (min-width: 576px) {
    .az-dashboard-date {
      margin-top: 0; } }
  .az-dashboard-date .date {
    display: flex; }
    .az-dashboard-date .date > div:first-child {
      font-size: 32px;
      font-family: Arial, sans-serif;
      font-weight: 500;
      color: #1c273c;
      line-height: .9; }
      @media (min-width: 768px) {
        .az-dashboard-date .date > div:first-child {
          font-size: 36px; } }
    .az-dashboard-date .date > div:last-child {
      margin-left: 5px; }
      .az-dashboard-date .date > div:last-child span {
        display: block;
        color: #1c273c;
        font-weight: 700;
        font-size: 12px;
        line-height: 1.2;
        letter-spacing: -.5px; }
        @media (min-width: 768px) {
          .az-dashboard-date .date > div:last-child span {
            font-size: 13px; } }
        .az-dashboard-date .date > div:last-child span:last-child {
          color: #7987a1;
          font-weight: 400; }
  .az-dashboard-date > i {
    font-size: 21px;
    line-height: 0;
    display: block;
    margin: 0 15px;
    color: #97a3b9; }
    @media (min-width: 768px) {
      .az-dashboard-date > i {
        margin: 0 20px;
        font-size: 24px; } }

.az-dashboard-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cdd4e0;
  margin-bottom: 20px; }
  .az-dashboard-nav .nav-link {
    font-size: 12px;
    padding: 5px 10px 8px;
    display: flex;
    align-items: center;
    line-height: 1; }
    @media (min-width: 576px) {
      .az-dashboard-nav .nav-link {
        font-size: 0.875rem; } }
    @media (min-width: 992px) {
      .az-dashboard-nav .nav-link {
        padding: 5px 15px 10px; } }
    .az-dashboard-nav .nav-link:hover, .az-dashboard-nav .nav-link:focus {
      color: #5b47fb; }
    .az-dashboard-nav .nav-link + .nav-link {
      border-left: 1px solid #cdd4e0; }
  .az-dashboard-nav .nav:first-child .nav-link {
    color: #1c273c;
    display: none; }
    @media (min-width: 576px) {
      .az-dashboard-nav .nav:first-child .nav-link {
        display: block; } }
    .az-dashboard-nav .nav:first-child .nav-link:hover, .az-dashboard-nav .nav:first-child .nav-link:focus {
      color: #5b47fb; }
    .az-dashboard-nav .nav:first-child .nav-link.active {
      color: #5b47fb; }
    .az-dashboard-nav .nav:first-child .nav-link:first-child {
      padding-left: 0; }
    .az-dashboard-nav .nav:first-child .nav-link:first-child, .az-dashboard-nav .nav:first-child .nav-link:last-child {
      display: block; }
  .az-dashboard-nav .nav:last-child .nav-link {
    color: #596882;
    display: none; }
    @media (min-width: 768px) {
      .az-dashboard-nav .nav:last-child .nav-link {
        display: block; } }
    .az-dashboard-nav .nav:last-child .nav-link:hover, .az-dashboard-nav .nav:last-child .nav-link:focus {
      color: #5b47fb; }
    .az-dashboard-nav .nav:last-child .nav-link i {
      font-size: 16px;
      margin-right: 7px;
      line-height: 0; }
    .az-dashboard-nav .nav:last-child .nav-link:last-child {
      padding-right: 0;
      display: block; }
      .az-dashboard-nav .nav:last-child .nav-link:last-child i {
        margin-right: 0; }
      @media (min-width: 768px) {
        .az-dashboard-nav .nav:last-child .nav-link:last-child {
          display: none; } }

.card-dashboard-one {
  position: relative;
  border-color: #cdd4e0; }
  .card-dashboard-one .card-header {
    padding: 20px;
    background-color: transparent; }
    @media (min-width: 576px) {
      .card-dashboard-one .card-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between; } }
    .card-dashboard-one .card-header .card-title {
      color: #1c273c;
      font-weight: 700;
      font-size: 14px;
      line-height: 1;
      margin-bottom: 3px; }
    .card-dashboard-one .card-header .card-text {
      margin-bottom: 0; }
    .card-dashboard-one .card-header .btn-group {
      margin-top: 15px; }
      @media (min-width: 576px) {
        .card-dashboard-one .card-header .btn-group {
          margin-top: 0; } }
      .card-dashboard-one .card-header .btn-group .btn {
        font-size: 12px;
        font-weight: 500;
        padding: 5px 10px;
        min-height: inherit;
        background-color: #fff;
        color: #7987a1;
        border: 1px solid #cdd4e0; }
        .card-dashboard-one .card-header .btn-group .btn:hover, .card-dashboard-one .card-header .btn-group .btn:focus {
          background-color: #f4f5f8;
          border-color: #cdd4e0; }
        .card-dashboard-one .card-header .btn-group .btn + .btn {
          margin-left: -1px; }
        .card-dashboard-one .card-header .btn-group .btn.active {
          color: #1c273c;
          background-color: #e3e7ed;
          border-color: #cdd4e0; }
  .card-dashboard-one .card-body {
    padding: 10px 0 20px;
    position: relative;
    overflow: hidden; }
    .card-dashboard-one .card-body .flot-chart-wrapper {
      position: relative;
      margin-left: -28px;
      margin-right: -20px; }
    .card-dashboard-one .card-body .flot-chart {
      width: 100%;
      height: 150px; }
      @media (min-width: 576px) {
        .card-dashboard-one .card-body .flot-chart {
          height: 275px; } }
      @media (min-width: 992px) and (max-width: 1199.98px) {
        .card-dashboard-one .card-body .flot-chart {
          height: 252px; } }
      .card-dashboard-one .card-body .flot-chart .flot-y-axis > div {
        transform: translateX(50px);
        text-shadow: 1px 1px rgba(255, 255, 255, 0.75);
        color: #031b4e;
        font-weight: 700;
        font-size: 11px; }
      .card-dashboard-one .card-body .flot-chart .flot-x-axis > div {
        color: #97a3b9;
        font-weight: 500;
        font-size: 11px; }
  .card-dashboard-one .card-body-top {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-left: 20px; }
    @media (min-width: 576px) {
      .card-dashboard-one .card-body-top {
        position: absolute;
        top: -5px;
        left: 20px;
        z-index: 5;
        padding-left: 0; } }
    .card-dashboard-one .card-body-top > div {
      flex-basis: 50%; }
      @media (min-width: 576px) {
        .card-dashboard-one .card-body-top > div {
          flex-basis: auto; } }
      @media (min-width: 576px) {
        .card-dashboard-one .card-body-top > div + div {
          margin-left: 30px; } }
    .card-dashboard-one .card-body-top label {
      font-size: 12px;
      margin-bottom: 3px; }
      @media (min-width: 576px) {
        .card-dashboard-one .card-body-top label {
          font-size: 0.875rem; } }
    .card-dashboard-one .card-body-top h2 {
      font-size: 20px;
      font-weight: 600;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      color: #1c273c; }
      @media (min-width: 576px) {
        .card-dashboard-one .card-body-top h2 {
          font-size: 24px;
          letter-spacing: -.5px; } }

.card-dashboard-two {
  height: 100%;
  border-radius: 0;
  border-color: #cdd4e0;
  background-color: rgba(255, 255, 255, 0.5); }
  .card-dashboard-two .card-header {
    background-color: transparent;
    padding: 20px 20px 0; }
    .card-dashboard-two .card-header h6 {
      font-size: 28px;
      font-weight: 600;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      color: #1c273c;
      display: flex;
      align-items: baseline;
      margin-bottom: 2px;
      line-height: 1;
      letter-spacing: -1px; }
      @media (min-width: 992px) and (max-width: 1199.98px) {
        .card-dashboard-two .card-header h6 {
          font-size: 24px; } }
      .card-dashboard-two .card-header h6 i {
        margin-left: 10px;
        font-size: 24px; }
      .card-dashboard-two .card-header h6 small {
        font-size: 12px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        margin-left: 5px;
        color: #7987a1;
        letter-spacing: normal; }
    .card-dashboard-two .card-header p {
      margin-bottom: 0;
      font-size: 13px; }
  .card-dashboard-two .card-body {
    padding: 0;
    overflow: hidden; }
  .card-dashboard-two .chart-wrapper {
    position: relative;
    margin: 0 -10px -10px; }
  .card-dashboard-two .flot-chart {
    width: 100%;
    height: 100px; }

.card-dashboard-three {
  height: 150px;
  border-radius: 0;
  border-color: #cdd4e0;
  background-color: rgba(255, 255, 255, 0.5); }
  @media (min-width: 768px) {
    .card-dashboard-three {
      height: 170px; } }
  @media (min-width: 992px) {
    .card-dashboard-three {
      height: 100%; } }
  .card-dashboard-three .card-header {
    background-color: transparent;
    padding: 20px;
    position: absolute;
    max-width: 50%; }
    .card-dashboard-three .card-header h6 {
      font-size: 28px;
      font-weight: 600;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      color: #1c273c;
      display: flex;
      align-items: baseline;
      margin-bottom: 15px;
      line-height: 1;
      letter-spacing: -1px; }
      @media (min-width: 1200px) {
        .card-dashboard-three .card-header h6 {
          font-size: 32px; } }
      .card-dashboard-three .card-header h6 small {
        font-size: 12px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        margin-left: 5px;
        letter-spacing: normal; }
    .card-dashboard-three .card-header p {
      margin-bottom: 10px;
      font-weight: 700;
      text-transform: uppercase;
      color: #1c273c; }
    .card-dashboard-three .card-header > small {
      font-size: 11px;
      display: none;
      color: #7987a1; }
      @media (min-width: 768px) {
        .card-dashboard-three .card-header > small {
          display: block; } }
  .card-dashboard-three .card-body {
    padding: 0 0 0 20px;
    display: flex;
    justify-content: flex-end; }
  .card-dashboard-three .chart {
    width: 70%;
    height: 150px; }
    @media (min-width: 375px) {
      .card-dashboard-three .chart {
        width: auto; } }
    @media (min-width: 768px) {
      .card-dashboard-three .chart {
        height: 170px; } }
    @media (min-width: 992px) {
      .card-dashboard-three .chart {
        height: 200px;
        width: 80%; } }

.card-dashboard-pageviews {
  border-color: #cdd4e0;
  border-radius: 0;
  padding: 20px; }
  .card-dashboard-pageviews .card-header {
    background-color: transparent;
    padding: 0 0 10px; }
  .card-dashboard-pageviews .card-title {
    font-weight: 700;
    font-size: 14px;
    color: #1c273c;
    margin-bottom: 5px; }
  .card-dashboard-pageviews .card-text {
    font-size: 13px;
    margin-bottom: 0; }
  .card-dashboard-pageviews .card-body {
    padding: 0; }

.card-dashboard-four {
  border-radius: 0;
  border-color: #cdd4e0;
  padding: 20px;
  height: 100%; }
  .card-dashboard-four .card-header {
    padding: 0 0 20px;
    background-color: transparent; }
  .card-dashboard-four .card-title {
    font-weight: 700;
    font-size: 14px;
    color: #1c273c;
    margin-bottom: 0; }
  .card-dashboard-four .card-body {
    padding: 0; }
    @media (min-width: 992px) {
      .card-dashboard-four .card-body {
        padding: 0 20px; } }
  .card-dashboard-four .chart {
    width: calc(100vw - 80px);
    height: 200px; }
    @media (min-width: 375px) {
      .card-dashboard-four .chart {
        width: auto; } }
    @media (min-width: 992px) {
      .card-dashboard-four .chart {
        height: 85%; } }

.card-dashboard-five {
  border-color: #cdd4e0;
  padding: 20px; }
  .card-dashboard-five .card-header {
    padding: 0;
    background-color: transparent; }
  .card-dashboard-five .card-title {
    font-weight: 700;
    font-size: 14px;
    color: #1c273c;
    margin-bottom: 5px; }
  .card-dashboard-five .card-text {
    display: block;
    font-size: 12px; }
  .card-dashboard-five .card-body {
    padding: 20px 0 5px; }
    .card-dashboard-five .card-body label {
      display: block;
      margin-bottom: 2px;
      font-size: 12px; }
    .card-dashboard-five .card-body h4 {
      color: #1c273c;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: 700;
      letter-spacing: -.5px;
      margin-bottom: 0; }
  .card-dashboard-five .card-chart {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px; }
    @media (min-width: 576px) {
      .card-dashboard-five .card-chart {
        margin-bottom: 0;
        margin-right: 10px; } }

.card-table-one {
  padding: 20px 20px 10px;
  border-color: #cdd4e0; }
  .card-table-one .card-title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px; }
  .card-table-one .table-responsive {
    width: calc(100vw - 80px); }
    @media (min-width: 576px) {
      .card-table-one .table-responsive {
        width: 100%; } }
  .card-table-one .table {
    margin-bottom: 0; }
    .card-table-one .table thead tr > th,
    .card-table-one .table thead tr > td,
    .card-table-one .table tbody tr > th,
    .card-table-one .table tbody tr > td {
      vertical-align: middle;
      white-space: nowrap;
      padding-right: 2px; }
      @media (min-width: 768px) {
        .card-table-one .table thead tr > th,
        .card-table-one .table thead tr > td,
        .card-table-one .table tbody tr > th,
        .card-table-one .table tbody tr > td {
          padding-left: 0;
          padding-right: 0; } }
      .card-table-one .table thead tr > th:nth-child(3), .card-table-one .table thead tr > th:nth-child(4), .card-table-one .table thead tr > th:nth-child(5),
      .card-table-one .table thead tr > td:nth-child(3),
      .card-table-one .table thead tr > td:nth-child(4),
      .card-table-one .table thead tr > td:nth-child(5),
      .card-table-one .table tbody tr > th:nth-child(3),
      .card-table-one .table tbody tr > th:nth-child(4),
      .card-table-one .table tbody tr > th:nth-child(5),
      .card-table-one .table tbody tr > td:nth-child(3),
      .card-table-one .table tbody tr > td:nth-child(4),
      .card-table-one .table tbody tr > td:nth-child(5) {
        text-align: right; }
      .card-table-one .table thead tr > th strong,
      .card-table-one .table thead tr > td strong,
      .card-table-one .table tbody tr > th strong,
      .card-table-one .table tbody tr > td strong {
        color: #1c273c; }
  .card-table-one .flag-icon {
    font-size: 20px;
    line-height: 1;
    border-radius: 100%; }

/* ###### 8.4 Dashboard Four  ###### */
.az-navbar-dashboard-four {
  box-shadow: 0 0 30px rgba(28, 39, 60, 0.08); }
  @media (min-width: 992px) {
    .az-navbar-dashboard-four .container-fluid, .az-navbar-dashboard-four .container-sm, .az-navbar-dashboard-four .container-md, .az-navbar-dashboard-four .container-lg, .az-navbar-dashboard-four .container-xl {
      padding-left: 25px;
      padding-right: 25px; } }

.az-content-dashboard-four {
  padding: 20px; }
  @media (min-width: 992px) {
    .az-content-dashboard-four {
      flex: 1;
      padding: 30px 25px; } }
  .az-content-dashboard-four ~ .az-footer .container,
  .az-content-dashboard-four ~ .az-footer .container-fluid,
  .az-content-dashboard-four ~ .az-footer .container-sm,
  .az-content-dashboard-four ~ .az-footer .container-md,
  .az-content-dashboard-four ~ .az-footer .container-lg,
  .az-content-dashboard-four ~ .az-footer .container-xl {
    padding-left: 25px;
    padding-right: 25px; }
  .az-content-dashboard-four > .media-dashboard {
    display: block; }
    @media (min-width: 1200px) {
      .az-content-dashboard-four > .media-dashboard {
        display: flex;
        align-items: stretch;
        height: 100%; } }
    .az-content-dashboard-four > .media-dashboard .media-aside {
      margin-top: 20px; }
      @media (min-width: 1200px) {
        .az-content-dashboard-four > .media-dashboard .media-aside {
          margin-top: 0;
          display: block;
          width: 320px; } }
    @media (min-width: 1200px) {
      .az-content-dashboard-four > .media-dashboard > .media-body {
        padding: 0 20px 0 0; } }
  .az-content-dashboard-four .az-content-header {
    height: auto;
    margin-bottom: 20px;
    align-items: flex-start;
    padding: 0; }
    @media (min-width: 768px) {
      .az-content-dashboard-four .az-content-header {
        display: flex; } }

.az-content-header-right {
  display: none; }
  @media (min-width: 992px) {
    .az-content-header-right {
      display: flex;
      align-items: center; } }
  .az-content-header-right .media label {
    margin-bottom: 2px;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .5px;
    text-transform: uppercase;
    color: #97a3b9; }
  .az-content-header-right .media h6 {
    color: #1c273c;
    margin-bottom: 0; }
  .az-content-header-right .media + .media {
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #cdd4e0; }
  .az-content-header-right .btn:first-of-type {
    margin-left: 30px; }
  .az-content-header-right .btn + .btn {
    margin-left: 5px; }

.card-dashboard-calendar {
  border-color: #cdd4e0;
  padding: 20px;
  box-shadow: 0 0 10px rgba(28, 39, 60, 0.1); }
  .card-dashboard-calendar .card-title {
    color: #1c273c;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px; }
  .card-dashboard-calendar .card-body {
    padding: 0; }
  .card-dashboard-calendar .ui-datepicker-inline {
    border-width: 0;
    max-width: none;
    padding: 0;
    margin: 0; }
  .card-dashboard-calendar .ui-datepicker .ui-datepicker-header {
    border-bottom: 1px solid #cdd4e0;
    padding: 10px;
    margin-bottom: 5px; }
    .card-dashboard-calendar .ui-datepicker .ui-datepicker-header .ui-datepicker-next::before,
    .card-dashboard-calendar .ui-datepicker .ui-datepicker-header .ui-datepicker-prev::before {
      top: 8px; }
  .card-dashboard-calendar .ui-datepicker .ui-datepicker-month {
    color: #5b47fb; }
  .card-dashboard-calendar .ui-datepicker .ui-datepicker-calendar {
    width: calc(100% - 20px); }
    @media (min-width: 576px) {
      .card-dashboard-calendar .ui-datepicker .ui-datepicker-calendar {
        width: 100%; } }
    .card-dashboard-calendar .ui-datepicker .ui-datepicker-calendar th {
      font-size: 10px; }
    .card-dashboard-calendar .ui-datepicker .ui-datepicker-calendar th,
    .card-dashboard-calendar .ui-datepicker .ui-datepicker-calendar td {
      text-align: center; }
    .card-dashboard-calendar .ui-datepicker .ui-datepicker-calendar td a {
      display: block;
      width: 34px;
      height: 34px;
      font-size: 12px;
      font-family: 'Archivo', sans-serif;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center; }
    .card-dashboard-calendar .ui-datepicker .ui-datepicker-calendar .ui-datepicker-today a {
      background-color: transparent;
      border: 2px solid #3366ff;
      color: #3366ff;
      font-weight: 700; }

.card-dashboard-twelve {
  border-color: #cdd4e0;
  box-shadow: 0 0 10px rgba(28, 39, 60, 0.1); }
  .card-dashboard-twelve .card-header {
    background-color: transparent;
    border-bottom: 1px solid #e3e7ed;
    padding: 20px; }
  .card-dashboard-twelve .card-title {
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px; }
    .card-dashboard-twelve .card-title span {
      font-weight: 400;
      color: #031b4e;
      text-transform: capitalize; }
  .card-dashboard-twelve .sales-overview {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap; }
    @media (min-width: 992px) {
      .card-dashboard-twelve .sales-overview {
        margin-bottom: 10px;
        flex-wrap: nowrap; } }
    .card-dashboard-twelve .sales-overview .media {
      align-items: flex-end;
      flex-shrink: 0;
      flex-basis: calc(50% - 10px); }
      @media (min-width: 576px) {
        .card-dashboard-twelve .sales-overview .media {
          flex-basis: auto; } }
      .card-dashboard-twelve .sales-overview .media + .media {
        margin-left: 20px; }
        @media (min-width: 576px) {
          .card-dashboard-twelve .sales-overview .media + .media {
            margin-left: 40px; } }
        @media (min-width: 992px) {
          .card-dashboard-twelve .sales-overview .media + .media {
            margin-left: 50px; } }
      @media (max-width: 575.98px) {
        .card-dashboard-twelve .sales-overview .media:nth-child(3) {
          margin-left: 0;
          margin-top: 15px; } }
      .card-dashboard-twelve .sales-overview .media:last-child {
        display: none; }
        @media (min-width: 768px) {
          .card-dashboard-twelve .sales-overview .media:last-child {
            flex: 1;
            display: block; } }
    .card-dashboard-twelve .sales-overview .media-icon {
      width: 45px;
      height: 45px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: -5px;
      margin-right: 15px;
      border-radius: 100%;
      display: none; }
      .card-dashboard-twelve .sales-overview .media-icon .typcn {
        line-height: .9;
        font-size: 24px; }
    .card-dashboard-twelve .sales-overview label {
      text-transform: uppercase;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .5px;
      color: #031b4e;
      margin-bottom: 8px; }
      @media (min-width: 576px) {
        .card-dashboard-twelve .sales-overview label {
          font-size: 10px;
          margin-bottom: 10px; } }
    .card-dashboard-twelve .sales-overview h4 {
      font-size: 20px;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: 600;
      color: #1c273c;
      line-height: 1;
      letter-spacing: -1px;
      margin-bottom: 3px; }
      @media (min-width: 576px) {
        .card-dashboard-twelve .sales-overview h4 {
          font-size: 28px; } }
      .card-dashboard-twelve .sales-overview h4 span {
        color: #031b4e;
        font-weight: 400; }
    .card-dashboard-twelve .sales-overview .media-body > span {
      display: block;
      font-size: 10px;
      color: #97a3b9; }
      @media (min-width: 576px) {
        .card-dashboard-twelve .sales-overview .media-body > span {
          font-size: 11px; } }
      .card-dashboard-twelve .sales-overview .media-body > span strong {
        font-weight: 500;
        color: #031b4e; }
    .card-dashboard-twelve .sales-overview p {
      font-size: 11px;
      margin-bottom: 0;
      color: #97a3b9; }
  .card-dashboard-twelve .card-body {
    position: relative;
    padding: 20px 5px; }
    @media (min-width: 576px) {
      .card-dashboard-twelve .card-body {
        padding: 20px; } }
  .card-dashboard-twelve .chart-legend {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    z-index: 10;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase; }
    @media (min-width: 576px) {
      .card-dashboard-twelve .chart-legend {
        top: 65px; } }
    .card-dashboard-twelve .chart-legend div {
      display: flex;
      align-items: center; }
      .card-dashboard-twelve .chart-legend div + div {
        margin-left: 15px; }
        @media (min-width: 576px) {
          .card-dashboard-twelve .chart-legend div + div {
            margin-left: 30px; } }
    .card-dashboard-twelve .chart-legend span {
      width: 10px;
      height: 4px;
      display: block;
      margin-right: 5px; }
      @media (min-width: 576px) {
        .card-dashboard-twelve .chart-legend span {
          width: 40px;
          margin-right: 10px; } }
  .card-dashboard-twelve .chart-wrapper {
    position: relative;
    margin-left: -13px;
    margin-right: -13px; }
    @media (min-width: 576px) {
      .card-dashboard-twelve .chart-wrapper {
        margin-left: -10px;
        margin-right: -15px; } }
  .card-dashboard-twelve .flot-chart {
    width: 100%;
    height: 200px;
    position: relative; }
    @media (min-width: 768px) {
      .card-dashboard-twelve .flot-chart {
        height: 250px; } }
    @media (min-width: 992px) {
      .card-dashboard-twelve .flot-chart {
        height: 300px; } }
    .card-dashboard-twelve .flot-chart .flot-x-axis > div span:first-child {
      display: block;
      text-transform: uppercase;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: 500;
      font-size: 10px;
      color: #7987a1; }
    .card-dashboard-twelve .flot-chart .flot-x-axis > div span:last-child {
      display: block;
      font-size: 16px;
      font-weight: 700;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      color: #1c273c;
      line-height: 1; }

.az-media-date h1 {
  font-size: 42px;
  font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #1c273c;
  line-height: .95; }

.az-media-date .media-body {
  margin-left: 5px; }

.az-media-date p {
  color: #1c273c;
  font-weight: 700;
  margin-bottom: 0;
  text-transform: uppercase; }

.az-media-date span {
  display: block;
  line-height: 1.2; }

.card-dashboard-thirteen {
  border-color: #cdd4e0;
  padding: 20px;
  box-shadow: 0 0 10px rgba(28, 39, 60, 0.1); }
  .card-dashboard-thirteen .az-content-label {
    font-size: 13px; }
  .card-dashboard-thirteen .media {
    margin-bottom: 15px; }
  .card-dashboard-thirteen .media-icon {
    font-size: 45px;
    line-height: 1;
    margin-right: 10px;
    display: flex; }
    .card-dashboard-thirteen .media-icon i {
      line-height: 0; }
  .card-dashboard-thirteen .media-body h6 {
    font-size: 22px;
    font-weight: 600;
    font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #1c273c;
    letter-spacing: -.5px;
    margin-bottom: 2px; }
    .card-dashboard-thirteen .media-body h6 span {
      font-weight: 400;
      color: #031b4e; }
  .card-dashboard-thirteen .media-body label {
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 0;
    display: block;
    letter-spacing: .5px; }

.card-dashboard-events {
  border-color: #cdd4e0;
  box-shadow: 0 0 10px rgba(28, 39, 60, 0.1); }
  .card-dashboard-events .card-header {
    padding: 20px;
    background-color: transparent; }
  .card-dashboard-events .card-title {
    color: #7987a1;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1px; }
  .card-dashboard-events .card-subtitle {
    color: #1c273c;
    font-weight: 400;
    font-size: 18px; }
  .card-dashboard-events .card-body {
    padding: 0; }
  .card-dashboard-events .list-group-item {
    padding: 15px 20px 15px 40px;
    border-left-width: 0;
    border-right-width: 0;
    position: relative; }
    .card-dashboard-events .list-group-item:first-child, .card-dashboard-events .list-group-item:last-child {
      border-radius: 0; }
    .card-dashboard-events .list-group-item label {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 10px;
      color: #596882;
      margin-bottom: 5px;
      letter-spacing: .5px; }
      .card-dashboard-events .list-group-item label span {
        color: #97a3b9;
        font-weight: 500; }
    .card-dashboard-events .list-group-item h6 {
      font-size: 14px;
      font-weight: 700;
      color: #1c273c;
      margin-bottom: 5px;
      display: flex;
      align-items: center; }
    .card-dashboard-events .list-group-item p {
      margin-bottom: 5px; }
      .card-dashboard-events .list-group-item p strong {
        font-weight: 500; }
    .card-dashboard-events .list-group-item small {
      font-size: 11px; }
      .card-dashboard-events .list-group-item small span {
        font-weight: 700;
        text-transform: uppercase; }
  .card-dashboard-events .event-indicator {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 21px;
    left: 20px;
    border-radius: 100%; }
  .card-dashboard-events .event-user {
    margin-top: 10px;
    display: flex;
    align-items: center; }
    .card-dashboard-events .event-user .az-img-user {
      width: 28px;
      height: 28px; }
      .card-dashboard-events .event-user .az-img-user::after {
        display: none; }
      .card-dashboard-events .event-user .az-img-user + .az-img-user {
        margin-left: -6px; }
    .card-dashboard-events .event-user a:last-child {
      margin-left: 10px;
      color: #7987a1;
      font-weight: 500;
      font-size: 11px; }
      .card-dashboard-events .event-user a:last-child:hover, .card-dashboard-events .event-user a:last-child:focus {
        color: #596882; }

.card-dashboard-fourteen {
  border-color: #cdd4e0;
  box-shadow: 0 0 10px rgba(28, 39, 60, 0.1);
  padding: 20px; }
  @media (min-width: 768px) {
    .card-dashboard-fourteen {
      height: 100%; } }
  .card-dashboard-fourteen .az-content-label {
    font-size: 0.875rem;
    margin-bottom: 20px; }
    .card-dashboard-fourteen .az-content-label span {
      font-weight: 400;
      color: #97a3b9;
      text-transform: none; }
  .card-dashboard-fourteen .card-body {
    padding: 0;
    min-height: 100px; }
    .card-dashboard-fourteen .card-body h1 {
      color: #1c273c;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: 600;
      letter-spacing: -1px;
      margin-bottom: 0; }
      .card-dashboard-fourteen .card-body h1 span {
        color: #97a3b9;
        letter-spacing: normal;
        font-weight: 400;
        margin-right: 5px; }
    .card-dashboard-fourteen .card-body h4 {
      color: #1c273c;
      font-weight: 700;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      margin-bottom: 0;
      letter-spacing: -.5px; }
    .card-dashboard-fourteen .card-body .progress {
      margin-bottom: 2px; }
    .card-dashboard-fourteen .card-body small {
      font-size: 11px;
      color: #97a3b9; }
  .card-dashboard-fourteen .sparkline-wrapper canvas {
    width: 100% !important; }
  .card-dashboard-fourteen .card-footer {
    background-color: transparent;
    padding: 0;
    margin-top: 15px;
    border-top-width: 0; }
    .card-dashboard-fourteen .card-footer h6 {
      color: #1c273c;
      font-size: 20px;
      font-weight: 700;
      font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      margin-bottom: 0;
      letter-spacing: -.5px; }
    .card-dashboard-fourteen .card-footer label {
      display: block;
      margin-bottom: 0;
      color: #97a3b9;
      font-size: 11px; }
      @media (min-width: 576px) {
        .card-dashboard-fourteen .card-footer label {
          font-size: 0.875rem; } }
</style>