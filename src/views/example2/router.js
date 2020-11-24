export default [
  {
    path: '/examples2',
    name: 'examples2',
    component: () => import(/* webpackChunkName: "about" */ './index')
  }
]
