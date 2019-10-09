import axios from '@/utils/request'

/**
 * 新增用户信息
 */
function addUserMsg (params) {
  return new Promise((resolve, reject) => {
    axios.post('/if/erip/user/add', params).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      console.log('新增用户信息接口调用报错，错误信息', error)
      reject(error)
    })
  })
}

/**
 * 删除用户信息
 */
function deleteUserMsg (params) {
  return new Promise((resolve, reject) => {
    axios.post('/if/erip/user/delete?id=' + params.id).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      console.log('删除用户信息接口调用报错，错误信息', error)
      reject(error)
    })
  })
}

/**
 * 更新用户信息
 */
function updateUserMsg (params) {
  return new Promise((resolve, reject) => {
    axios.post('/if/erip/user/update', params).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      console.log('更新用户信息接口调用报错，错误信息', error)
      reject(error)
    })
  })
}

/**
 * 查询用户信息
 */
function getUserMsg (params) {
  return new Promise((resolve, reject) => {
    axios.get('/if/erip/user/list', { params: params }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      console.log('查询用户信息接口调用报错，错误信息', error)
      reject(error)
    })
  })
}

export default {addUserMsg, deleteUserMsg, updateUserMsg, getUserMsg}
