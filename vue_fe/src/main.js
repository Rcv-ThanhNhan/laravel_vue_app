import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap'


// Import component
import Login from './components/pages/Login.vue'
import Home from './components/pages/Home.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
]
const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
    linkActiveClass: 'active',
})
export default { router }

createApp(App).use(router).mount('#app')