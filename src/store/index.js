import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// store全局引入 ajax
export default new Vuex.Store({
  state: {
    // 菜单
    menuData: sessionStorage.getItem('menuData') ? JSON.parse(sessionStorage.getItem('menuData')) : [],
    // 用户名
    userName: sessionStorage.getItem('userName') || '',
    // 登录状态
    loginState: sessionStorage.getItem('loginState') || false
  },
  mutations: {
    // 获取菜单
    setMenuData (state, source) {
      state.menuData = source
      sessionStorage.setItem('menuData', JSON.stringify(source))
    },
    // 登录
    login (state, {loginState, userName}) {
      sessionStorage.setItem('loginState', loginState)
      sessionStorage.setItem('userName', userName)
      state.loginState = loginState
      state.userName = userName
    }
  },
  actions: {
  },
  getters: {
  }
})
