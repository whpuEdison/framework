export default [
  {
    path: '/eCharts',
    name: 'eCharts',
    meta: {
      title: 'ECharts图表'
    },
    component: resolve => require(['@/views/eCharts/ECharts'], resolve)
  }
]
