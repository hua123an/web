import { createRouter, createWebHistory } from 'vue-router'
// createRouter：创建路由实例对象
// createWebHistory ： 创建history模式的路由对象
// 常见的路由有history 和 hash
import {Login} from '@/views/Login/index.vue'
import {Layout} from "@/views/Layout/index.vue"
import {Home} from "@/views/Home/index.vue"
import {Category} from "@/views/Category/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  //     配置path和component
    {
      path : '/',
      component : Layout,
      children : [
        {
          path : "",
          component : Home
        },
        {
          path : '/Category',
          component : Category
        }
      ]
    },
    {
      path : '/Login',
      component : Login
    },
  ]
})

export default router
