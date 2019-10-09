import axios from 'axios'
import store from '@/store'

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// 定义超时时间为30秒
axios.defaults.timeout = 60000
// 全局配置axios ，注冊token、
let CancelToken = axios.CancelToken
axios.interceptors.request.use(config => {
  // 每一个ajax请求添加cancelToken
  let source = CancelToken.source()
  config.cancelToken = source.token
  store.commit('addAjaxSource', source)
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器：
// 1、每次请求结束后，都要更新token值，用于处理登录超时的情况
// 2、响应失败，给全局提示
axios.interceptors.response.use(response => {
  try {
    // 响应头信息
    let headInfo = response.data.head
    if (headInfo) {
      if (response.status === 200 || response.status === 304) {
        if (headInfo.errorCode === 0) {
          return response
        } else {
          return Promise.reject(response)
        }
        // 请求没找到，有两种可能，一种是请求的地址错误，一种是服务器挂掉，找不到请求地址
      } else if (response.status === 404) {
        // router.replace({name: 'notFound', query: {status: response.status}})
        // 服务器内部错误
      } else if (response.status === 500 || response.status === 504) {
        // router.replace({name: 'notFound', query: {status: response.status}})
      } else {
        return Promise.reject(response)
      }
    }
    return response
  } catch (e) {
    return Promise.reject(response)
  }
}, err => {
  if (err.code === 'ECONNABORTED') {
    console.log('请求超时，请稍后再试！')
  } else if (err.message === 'ajax cancel') {
    console.log('ajax请求被取消')
  } else {
    console.error('axios错误信息', err)
    return Promise.reject(err.response)
  }
})

export default axios