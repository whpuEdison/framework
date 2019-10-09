export default [
  {
    path: '/',
    name: 'root',
    component: resolve => require(['@/App'], resolve),
    redirect: () => {
      return '/basicInfo'
    }
  },
  {
    path: '/basicInfo',
    name: 'basicInfo',
    meta: {
      title: '基本信息'
    },
    component: resolve => require(['@/views/information/BasicInfo'], resolve)
  }
]
