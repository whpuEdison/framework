/**
 * 验证token
 */
const jwt = require('jsonwebtoken')
const serect = 'whpuedison' // 密钥

module.exports = (token) => {
  let res = {}
  if (token) {
    // 解析
    let decoded = jwt.decode(token, serect)
    if (decoded && decoded.exp <= new Date() / 1000) {
      res = {
        errorMsg: 'token过期',
        errorCode: 2
      }
    } else {
      res = {
        errorMsg: '解析成功',
        errorCode: 1
      }
    }
  } else {
    res = {
      errorMsg: 'token不存在',
      errorCode: 3
    }
  }
  return res
}
