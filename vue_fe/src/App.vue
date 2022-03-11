<script setup>
import Header from './components/layouts/Header.vue'
import Loading from './components/layouts/Loading.vue'

</script>

<template>
    <main>
      <Header />
      <!-- <Loading v-if="loading"/> -->
      <router-view></router-view>

    </main>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.css';

.title-page{
  /* text-align: center; */
  font-weight: 500;
  font-size: 1.6rem;
}

</style>
<script>
    
import axios from 'axios';

export default {
    data(){
        return { 
            msg: '',
            loading: false
        }
    },
    mounted(){
        this.checkLoggedIn()
    },
    methods: {
        checkLoggedIn: function(){
            let token =JSON.parse(window.localStorage.getItem('user'));
            console.log(token);
            if(!token){
                this.$router.push({name: 'login'})
            }
            axios.get('http://localhost:8000/api/user-info', {
                headers: {
                    Authorization: 'Bearer '+ token
                }
            })
            .then(response => {
                this.user = response.data;
                // window.localStorage.setItem('user', JSON.stringify(this.user))
                this.msg = `Xin chào ${this.user.name}`
            })
            .catch(error => {
                if(error.response){
                    console.log(error.response.data.message);
                }
            })
            // .then(() => {
            //     if(this.user != null){
            //       this.$router.push({name: 'home'})
            //     }
            //     else{
            //       this.$router.push({name: 'login'})
            //     }
            // });  
        }
    }
}
</script>
