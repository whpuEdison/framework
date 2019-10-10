const basicInfo = require('../db').basicInfo
const util = require('../util')

const getBasicInfo = async (ctx) => {
  let doc = await basicInfo.find()
  ctx.response.body = util.packResponse(doc)
}

module.exports = {
  getBasicInfo
}
