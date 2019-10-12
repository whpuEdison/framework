import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// store全局引入 ajax
export default new Vuex.Store({
  state: {
    // 菜单
    menuData: localStorage.getItem('menuData') ? JSON.parse(localStorage.getItem('menuData')) : [],
    // 权限
    permissions: localStorage.getItem('permissions') ? JSON.parse(localStorage.getItem('permissions')) : [],
    // 用户名
    userName: sessionStorage.getItem('userName') || '',
    // 登录状态
    loginState: sessionStorage.getItem('loginState') || false,
    // token
    token: localStorage.getItem('token') || null
  },
  mutations: {
    // 获取菜单
    setMenuData (state, source) {
      state.menuData = source
      // 设置权限
      state.permissions = getPermission(source)
      localStorage.setItem('menuData', JSON.stringify(source))
      localStorage.setItem('permissions', JSON.stringify(state.permissions))
    },
    // 登录
    login (state, {loginState, userName, token}) {
      sessionStorage.setItem('loginState', loginState)
      sessionStorage.setItem('userName', userName)
      localStorage.setItem('token', token)
      state.loginState = loginState
      state.userName = userName
      state.token = token
    },
    // 登出
    logOut (state) {
      sessionStorage.removeItem('loginState')
      sessionStorage.removeItem('userName')
      localStorage.removeItem('menuData')
      localStorage.removeItem('token')
      localStorage.removeItem('permissions')
    }
  },
  actions: {
  },
  getters: {
  }
})

/**
 * 获取权限
 */
function getPermission (menuData) {
  let permissions = []
  menuData.forEach(menu => {
    menu.menuPath && permissions.push(menu.menuPath)
    if (menu.children && menu.children.length) {
      permissions = permissions.concat(getPermission(menu.children))
    }
  })
  // 数组去重
  return [...new Set(permissions)]
}
