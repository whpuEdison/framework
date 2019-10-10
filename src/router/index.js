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
  if (to.name === 'login') {
    next()
  } else if (store.state.loginState || from.name === 'login') {
    if (to.name) {
      next()
    } else {
      next({name: 'notFound'})
    }
  } else {
    next({name: 'login'})
  }
})

/**
 * 判断是否拥有权限
 * @param permission
 * @returns {boolean}
//  */
// function menuList (name) {
//   let menuData = store.state.menuData
//   for (let i = 0; i <= menuData.length; i++) {
//     if (menuData[i] && name === menuData[i].pathName) {
//       return true
//     }
//   }
//   return false
// }

export default router
