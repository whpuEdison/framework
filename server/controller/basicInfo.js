const basicInfo = require('../db').basicInfo
const util = require('../util')
const provingToken = require('../token/provingToken')

const getBasicInfo = async (ctx) => {
  let token = ctx.request.header.authorization
  let res = provingToken(token)
  if (res.errorCode === 1) {
    let doc = await basicInfo.find()
    ctx.response.body = util.packResponse(doc)
  } else {
    ctx.response.body = res
  }
}

module.exports = {
  getBasicInfo
}
