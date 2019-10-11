const db = require('../db')
const util = require('../util')
const createToken = require('../token/createToken')

const getUsers = async (ctx) => {
  try {
    let doc = await db.user.find(ctx.request.body)
    let res = util.packResponse(doc)
    // 生成token
    let token = createToken(ctx.request.body)
    ctx.response.body = {
      token: token,
      errorCode: res.errorCode
    }
  } catch (e) {
    ctx.response.body = util.packResponse([])
  }
}

const getMenus = async (ctx) => {
  let menuPath = []
  let userDoc = await db.user.find(ctx.request.body)
  if (userDoc.length > 0) {
    let userId = userDoc[0].toJSON().userId
    let roleDoc = await db.user_role.find({userId: userId})
    if (roleDoc.length > 0) {
      let roleId = roleDoc[0].toJSON().roleId
      let menuDoc = await db.role_menu.find({roleId: roleId})
      if (menuDoc.length > 0) {
        let menuIdArr = menuDoc[0].toJSON().menuId.split(',')
        let params = []
        menuIdArr.forEach(item => {
          params.push({
            menuId: item
          })
        })
        let menuList = await db.menu.find({$or: params})
        menuList.forEach(item => {
          menuPath.push({
            name: item.toJSON().menuName,
            pathName: item.toJSON().menuPath
          })
        })
      }
    }
  }
  ctx.response.body = util.packResponse(menuPath)
}

module.exports = {
  getUsers,
  getMenus
}
