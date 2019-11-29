export default [
  {
    path: '/ECharts',
    name: 'ECharts',
    meta: {
      title: 'ECharts图表'
    },
    component: resolve => require(['@/views/eCharts/ECharts'], resolve)
  }
]
