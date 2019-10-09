import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes,
  linkActiveClass: 'routerActive',
  mode: 'history'
})

// 全局路由配置，控制用户访问权限
router.beforeEach((to, from, next) => {
  ajaxAbort()
  next()
})

// 路由切换时，中止上一个页面的ajax请求
function ajaxAbort () {
  let ajaxSource = store.state.ajaxSource
  ajaxSource.forEach(source => {
    source.cancel('ajax cancel')
  })
  store.commit('resetAjaxSource')
}

export default router
