
<template>
    <div class="container mt-2">        
        <div class="az-signin-wrapper">
        <div class="az-card-signin">
            <h1 class="az-logo">
                <img src="../../assets/img/banner-login.png" alt="">
            </h1>
            <div class="az-signin-header">
            <h2>Welcome back!</h2>

            <form action="index.html" @submit.prevent="login()" novalidate>
                <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="email@example.com"
                            v-model="user.email" required>
                <div class="invalid-feedback" v-if="errors.email">
                    {{ errors.email[0] }}
                </div>
                </div><!-- form-group -->
                <div class="form-group">
                    <label>Password</label>
                    <input :type="passwordFieldType" class="form-control password-toggle" placeholder="password"
                                v-model="user.password" minlength="4" required>
                    <span class="toggle-password" @click="toggleShowPassword" v-if="showing">
                        <i class="fa-solid fa-eye"></i>
                    </span>
                    <span class="toggle-password" @click="toggleShowPassword" v-if="!showing">
                        <i class="fa-solid fa-eye-slash"></i>
                    </span>
                    <div class="invalid-feedback" v-if="errors.password">
                        {{ errors.password[0] }}
                    </div>
                </div><!-- form-group -->
                <div class="form-group">
                    <input class="form-check-input" type="checkbox" value="" id="remember"
                                :checked="user.remember">
                    <label class="form-check-label ms-2 mb-0" for="remember">
                        Lưu mật khẩu
                    </label>
                </div>
                <button class="btn btn-az-primary btn-block" @click="validation()">Đăng nhập</button>
            </form>
            </div><!-- az-signin-header -->
            <div class="az-signin-footer">
            <!-- <p><a href="">Quên mật khẩu?</a></p> -->
            <p>Bạn chưa có tài khoản? <router-link :to="{ name: 'register' }">Đăng ký</router-link></p>
            </div><!-- az-signin-footer -->
        </div><!-- az-card-signin -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: {
                // email: '',
                // password: '',
                email: 'admin@admin.com',
                password: '123123',
                remember: false
            },
            errors: {},
            showing: true,
            passwordFieldType: "password"
        }
    },
    methods:{
        login: function(){
            this.$axios.post('http://localhost:8000/api/login', this.user)
            .then(response => {
                window.localStorage.setItem('user', JSON.stringify(response.data));
                this.$router.push({name: 'home'})
            })
            .catch(error => {
                this.errors = error.response.data.errors
            });
        },
        validation: function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
            })
        },
        toggleShowPassword: function(){
            this.showing = !this.showing;
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        }
    }
}

</script>

<style>
    .toggle-password{
        background: transparent;
        border: unset;
        position: absolute;
        right: 10px;
        top: 6px;
        cursor: pointer;
        z-index: 3;
    }
    .was-validated .password-toggle.form-control:invalid, .form-control.is-invalid{
        background-position: right calc(0.375em + 1.6rem) center;
    }
</style>