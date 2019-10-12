/**
 * 生成token
 */
const jwt = require('jsonwebtoken')
const serect = 'whpuedison' // 密钥

// 创建token并导出
module.exports = (userInfo) => {
  const token = jwt.sign({
    account: userInfo.account,
    password: userInfo.password
  }, serect, {expiresIn: '30s'})
  return token
}
