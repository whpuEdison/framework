const basicInfo = require('../db').basicInfo
const util = require('../util')
const provingToken = require('../token/provingToken')
const createToken = require('../token/createToken')

const getBasicInfo = async (ctx) => {
  let token = ctx.request.header.authorization
  let res = provingToken(token)
  if (res.errorCode === 0) {
    let newToken = null
    if (global.tokenParam) {
      newToken = createToken(global.tokenParam)
    }
    let doc = await basicInfo.find()
    ctx.response.body = util.packResponse(doc, newToken)
  } else {
    ctx.response.body = res
  }
}

module.exports = {
  getBasicInfo
}
