import { createRouter, createWebHistory } from 'vue-router'
import Store from './store'

// Import component
import Login from './components/pages/Login.vue';
import Home from './components/pages/Home.vue';


const routes = [
    { path: '/', component: Home, name: 'home', meta: { requiresAuth: true } },
    { path: '/login', component: Login, name: 'login', meta: { requiresAuth: true } },
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
    linkActiveClass: 'active',
})

// router.beforeEach((to, from, next) => {


//     // console.log(to.matched.some((record) => record.meta.requiresAuth));
//     console.log(Store.getters);
//     // if (Store.state.user) {
//     //     next();
//     // } else {

//     // }
// })
export default router;