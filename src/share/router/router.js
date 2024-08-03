import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'

let routes = [
    {
        path: '/home',
        name: 'home',
        component: Home

    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }

]

let router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active'
})


// token验证
// if (storage.get('token')) {
//     store.commit('setToken', localStorage.getItem('token'));
// }
// router.beforeEach((to, from, next) => {
//     if (token) {
//         next('/')
//     }
// })

export default router