import { createRouter, createWebHistory } from 'vue-router'
import Store from './store'

// Import component
import Login from './components/pages/Login.vue';
import Home from './components/pages/Home.vue';
import UserManagement from './components/pages/UserManagement.vue';
import Register from './components/pages/Register.vue';


const routes = [{
        path: '/',
        component: Home,
        name: 'home',
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: { requiresAuth: true }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: { requiresAuth: true }
    },
    {
        path: '/user-management',
        component: UserManagement,
        name: 'user-management'
    }
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