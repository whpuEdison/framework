// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import './assets/less/elementui-reset.less'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(ElementUI, {
  size: 'mini' // 统一设置系统样式为小号
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
