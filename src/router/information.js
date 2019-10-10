export default [
  {
    path: '/basicInfo',
    name: 'basicInfo',
    meta: {
      title: '基本信息'
    },
    component: resolve => require(['@/views/information/BasicInfo'], resolve)
  }
]
