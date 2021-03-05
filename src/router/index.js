import { createRouter, createWebHistory } from "vue-router";
import Account from "../views/Account.vue";

const routes = [
  {
    path: "/",
    name: "Account",
    component: Account
  },
  {
    path: '/cost',
    name: 'Cost',
    component: () => import('@/views/Cost')
  },
  {
    path: '/income',
    name: 'Income',
    component: () => import('@/views/Income')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'font-semibold'
});

export default router;
