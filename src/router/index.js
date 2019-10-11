import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

Vue.use(Router)

const router = new Router({
  routes,
  linkActiveClass: 'routerActive',
  mode: 'history'
})

// 全局路由配置，控制用户访问权限
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else if (to.name === 'notFound') {
    next()
  } else if (store.state.loginState || from.name === 'login') {
    NProgress.start()
    if (to.name) {
      menuList(to.name) ? next() : next({name: 'notFound'})
    } else {
      next({name: 'notFound'})
    }
    NProgress.done()
  } else {
    next({name: 'login'})
  }
})

/**
 * 判断是否拥有权限
 * @param permission
 * @returns {boolean}
//  */
function menuList (name) {
  let menuData = store.state.menuData
  for (let i = 0; i <= menuData.length; i++) {
    if (menuData[i] && name === menuData[i].pathName) {
      return true
    }
  }
  return false
}

export default router
