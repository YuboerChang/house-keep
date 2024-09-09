import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home";
import Login from "@/views/login";
import Welcome from "@/views/welcome";
import AddApplyTemp from "@/views/add-apply-temp";
import ListApplyTemp from "@/views/list-apply-temp";

let routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: Welcome,
      },
      {
        path: "/addApplyTemp",
        name: "addApplyTemp",
        component: AddApplyTemp,
      },
      {
        path: "/listApplyTemp",
        name: "listApplyTemp",
        component: ListApplyTemp,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

let router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active",
});

// token验证
// if (storage.get('token')) {
//     store.commit('setToken', localStorage.getItem('token'));
// }
// router.beforeEach((to, from, next) => {
//     if (token) {
//         next('/')
//     }
// })

export default router;
