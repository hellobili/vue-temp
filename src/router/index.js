import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = []

/**
 * 自动引入 src/views 内各文件下路由配置文件 router.js，该文件为每个模块的路由配置文件
 *
 * */
const pages = require.context('../views', true, /router\.js$/)

pages.keys().forEach(page => {
  const tmp = pages(page).default
  routes = routes.concat(...tmp)
})

const router = new VueRouter({
  routes
})

export default router
