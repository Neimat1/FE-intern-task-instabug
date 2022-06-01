import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta:{
      title:'Login | Instabug'
    },
    component: LoginView
  },
  {
    path: '/404',
    name: '404',
    meta:{
      title:'User Feedback & Bug reporting | Instabug'
    },
    component: () => import( '../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  document.title=`${to.meta.title}`;
  next();
})

export default router
