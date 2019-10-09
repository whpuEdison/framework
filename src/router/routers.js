export default [
  {
    path: '/',
    name: 'root',
    component: resolve => require(['@/App'], resolve),
    redirect: () => {
      return '/userList'
    }
  },
  {
    path: '/userList',
    name: 'userList',
    meta: {
      title: '用户信息列表'
    },
    component: resolve => require(['@/views/UserList'], resolve)
  },
  {
    path: '/bulletinSendManage',
    name: 'bulletinSendManage',
    meta: {
      title: '公告发送管理'
    },
    component: resolve => require(['@/views/BulletinSendManage'], resolve)
  },
  {
    path: '/questionnaireConfig',
    name: 'questionnaireConfig',
    meta: {
      title: '问卷调查配置'
    },
    component: resolve => require(['@/views/QuestionnaireConfig'], resolve)
  },
  {
    path: '/advertisementDefend',
    name: 'advertisementDefend',
    meta: {
      title: '广告维护'
    },
    component: resolve => require(['@/views/AdvertisementDefend'], resolve)
  },
  {
    path: '/convenientServiceDefend',
    name: 'convenientServiceDefend',
    meta: {
      title: '便捷服务维护'
    },
    component: resolve => require(['@/views/ConvenientServiceDefend'], resolve)
  },
  {
    path: '/hotspotIssuesDefend',
    name: 'hotspotIssuesDefend',
    meta: {
      title: '热点问题维护'
    },
    component: resolve => require(['@/views/HotspotIssuesDefend'], resolve)
  }
]
