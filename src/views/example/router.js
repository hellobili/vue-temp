export default [
  {
    path: '/examples',
    name: 'examples',
    component: () => import(/* webpackChunkName: "about" */ './index')
  }
]
