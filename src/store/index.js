import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// store全局引入 ajax
export default new Vuex.Store({
  state: {
    // ajax请求资源
    ajaxSource: []
  },
  mutations: {
    // 添加ajax请求资源
    addAjaxSource (state, source) {
      state.ajaxSource.push(source)
    },
    // 重置ajaxSource对象
    resetAjaxSource (state) {
      state.ajaxSource.length = 0
    }
  },
  actions: {
  },
  getters: {
  }
})
