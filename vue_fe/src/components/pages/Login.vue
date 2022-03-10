<template>
    <div class="container">
        <h3 class="title-page">
            Đăng nhập
        </h3>
        <form class="w-50 mx-auto needs-validation" @submit.prevent="login()" novalidate>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="email@example.com"
                        v-model="user.email" required>
                <div class="invalid-feedback" v-if="errors.email">
                    {{ errors.email[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" placeholder="password" v-model="user.password" 
                       minlength="4" required>
                <div class="invalid-feedback" v-if="errors.password">
                    {{ errors.password[0] }}
                </div>
            </div>
            <div class="mb-3 text-center">
                <button type="submit" class="btn btn-primary" @click="validation()">Đăng nhập</button>
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
                password: '123123'
            },
            errors: {}
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
        }
    }
}
// Example starter JavaScript for disabling form submissions if there are invalid fields

</script>