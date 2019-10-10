import request from '@/utils/request'

function getUsers (params) {
  return request('post', '/if/login/getUsers', params)
}

function getMenus (params) {
  return request('post', '/if/login/getMenus', params)
}

export default { getUsers, getMenus }
