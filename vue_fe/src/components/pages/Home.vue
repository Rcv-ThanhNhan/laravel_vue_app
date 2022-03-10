<template>
    <div class="container">
        {{ msg }}
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return { 
            msg: '',
        }
    },
    props:{
        
    },
    mounted(){
        this.checkLoggedIn();
    },
    methods: {
        checkLoggedIn: function(){
            let token = window.localStorage.getItem('token');
            if(!token){
                this.$router.push({name: 'login'})
            }
            axios.get('http://localhost:8000/api/user-info', {
            headers: {
                Authorization: 'Bearer '+ token
            }
            })
            .then(response => {
                this.msg = `Xin chào ${response.data.name}`
                // this.$router.push({name: 'home'})
            })
            .catch(error => {
                console.log(error.response.data.message);
                this.$router.push({name: 'login'})
            })
            // .then(function () {
            //     // always executed
            // });  
        }
    }
}
</script>