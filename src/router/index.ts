import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/HomePage.vue')
  },
  {
    path : "/homepage",
    name: "homepage",
    component: ()=>import('../views/HomePage.vue')
  },
  {
    path: '/newsDetails/:id',
    name: 'newsDetails',
    component: ()=>import('../views/NewsDetails.vue')
  },
  {
    path : "/loginpage",
    name : "login",
    component :()=>import('../views/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
