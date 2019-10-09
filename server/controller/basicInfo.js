const basicInfo = require('../db').basicInfo

const getBasicInfo = async (ctx) => {
  let errorCode = 0 // 状态码
  let data = '' // 返回内容
  try {
    let doc = await basicInfo.find()
    if (doc.length > 0) {
      data = doc
    } else {
      errorCode = -1
      data = []
    }
  } catch (err) {
    errorCode = err
    data = []
  }
  ctx.response.body = {
    errorCode: errorCode,
    data: data
  }
  return data
}

module.exports = {
  getBasicInfo
}
