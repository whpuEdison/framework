export default [
  {
    path: '/ZRender',
    name: 'ZRender',
    meta: {
      title: 'ZRender图表'
    },
    component: resolve => require(['@/views/zrender/ZRender'], resolve)
  }
]
