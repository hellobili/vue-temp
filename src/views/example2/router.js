import Layout from '@/layout'
export default [
  {
    path: '/examples2',
    name: 'examples2',
    component: Layout,
    redirect: '/examples2/index',
    children: [{
      path: 'index',
      name: 'Example',
      component: () => import(/* webpackChunkName: "about" */ './index')
    }]
  }
]
