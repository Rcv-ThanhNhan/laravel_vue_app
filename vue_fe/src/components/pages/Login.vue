
<template>
    <div class="container mt-2">
        <h3 class="title-page">
            <img src="../../assets/img/banner-login.png" alt="">
        </h3>
        <form class="w-50 mx-auto needs-validation" @submit.prevent="login()" novalidate>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <div class="input-group">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input type="email" class="form-control" placeholder="email@example.com"
                            v-model="user.email" required>
                    <div class="invalid-feedback" v-if="errors.email">
                        {{ errors.email[0] }}
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <div class="input-group">
                    <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
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
                </div>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="remember"
                            :checked="user.remember">
                    <label class="form-check-label" for="remember">
                        Lưu mật khẩu
                    </label>
                </div>
            </div>
            <div class="mb-3 text-center">
                <button type="submit" class="btn btn-primary" @click="validation()">
                    Đăng nhập</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
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
            axios.post('http://localhost:8000/api/login', this.user)
            .then(response => {
                window.localStorage.setItem('token', response.data.token);
                // direction
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