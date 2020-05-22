// import store from '@/store'
import information from './information'
import eCharts from './eCharts'
import zRender from './zRender'
import model from './model'

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
    },
    children: [
      ...information,
      ...eCharts,
      ...zRender,
      ...model
    ]
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: resolve => require(['@/NotFound'], resolve)
  }
]
