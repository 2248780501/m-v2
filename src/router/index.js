//路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login')
  },
  // {
  //   path: '/',
  //   // name: 'layout', // 如果父路由有默认子路由，那它的 name 没有意义
  //   component: () => import('@/views/layout'),
  //   children: [
  //     {
  //       path: '', // 默认子路由，只能有1个
  //       name: 'home',
  //       component: () => import('@/views/home')
  //     }
  //   ]
  // },
 
]

const router = new VueRouter({
  routes
})

export default router
