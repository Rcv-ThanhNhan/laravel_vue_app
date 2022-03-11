<template>
    <div class="az-signup-wrapper justify-content-center">
      <div class="az-column-signup">
        <img src="../../assets/img/banner-login.png" alt="">
        <div class="az-signup-header">
          <h2 class="text-center">ĐĂNG KÝ</h2>

          <form action="">
            <div class="form-group">
              <label>Họ và tên</label>
              <input type="text" class="form-control" placeholder="Nhập họ và tên của bạn...">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Nhập email của bạn...">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Mật khẩu</label>
              <input type="password" class="form-control" placeholder="Nhập mật khẩu...">
            </div>
            <div class="form-group">
              <label>Mật khẩu xác nhận</label>
              <input type="password" class="form-control" placeholder="Nhập mật khẩu xác nhận...">
            </div>
            <button class="btn btn-az-primary btn-block">Tạo tài khoản</button>
          </form>
        </div><!-- az-signup-header -->
        <div class="az-signup-footer">
          <p>Bạn đã có tài khoản? <router-link :to="{ name: 'login' }">Đăng nhập</router-link></p>
        </div><!-- az-signin-footer -->
      </div>
    </div>
</template>

<style scoped>

/* ###### 7.10 Signup  ###### */
.az-signup-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: rgba(244, 245, 248, 0.2); }
  @media (min-width: 992px) {
    .az-signup-wrapper {
      justify-content: flex-end; } }


.az-column-signup {
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; }
  @media (min-width: 576px) {
    .az-column-signup {
      padding: 40px;
      width: 500px; } }
  @media (min-width: 992px) {
    .az-column-signup {
      border-left: 1px solid #cdd4e0;
      border-right: 1px solid #cdd4e0; } }

.az-signup-header h2 {
  font-weight: 700;
  color: #5b47fb;
  letter-spacing: -1px; }

.az-signup-header h4 {
  font-size: 20px;
  font-weight: 400;
  color: #1c273c;
  margin-bottom: 25px; }

.az-signup-header label {
  color: #7987a1; }

.az-signup-header .form-control {
  color: #1c273c;
  font-weight: 500;
  border-width: 2px;
  border-color: #cdd4e0; }
  .az-signup-header .form-control:focus {
    border-color: #b4bdce;
    box-shadow: none; }
  .az-signup-header .form-control::placeholder {
    font-weight: 400;
    color: #97a3b9; }

.az-signup-header > .btn {
  margin-top: 25px; }

.az-signup-header .row {
  margin-top: 20px; }
  .az-signup-header .row > div .btn i {
    font-size: 15px;
    line-height: 0;
    margin-right: 5px; }
  .az-signup-header .row > div:first-child .btn {
    background-color: #4267b2;
    color: #fff; }
    .az-signup-header .row > div:first-child .btn:hover, .az-signup-header .row > div:first-child .btn:focus {
      background-color: #375694;
      color: #fff; }

.az-signup-footer p {
  color: #7987a1;
  margin-bottom: 0; }

.az-signup-footer a {
  color: #1c273c;
  font-weight: 700; }
  .az-signup-footer a:hover, .az-signup-footer a:focus {
    color: #5b47fb; }

</style>