// import store from '@/store'
import information from './information'
import eCharts from './eCharts'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: resolve => require(['@/Login'], resolve)
  },
  {
    path: '/',
    name: 'root',
    component: resolve => require(['@/views/layout/Root'], resolve),
    redirect: () => {
      return '/basicInfo'
      // return store.state.menuData.length > 0 ? store.state.menuData[0].pathName : 'login'
    },
    children: [
      ...information,
      ...eCharts
    ]
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: resolve => require(['@/NotFound'], resolve)
  }
]
