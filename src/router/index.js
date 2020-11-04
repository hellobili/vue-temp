import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const pages = require.context('../views', true, /router\.js$/)

pages.keys().forEach(page => {
  const tmp = pages(page).default
  routes = routes.concat(...tmp)
})

const router = new VueRouter({
  routes
})

export default router
