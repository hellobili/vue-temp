export default [
  {
    path: '/examples',
    component: () => import(/* webpackChunkName: "about" */ '@/views/example/index')
  }
]
