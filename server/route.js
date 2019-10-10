/**
 * 控制路由分发
 */
const Router = require('koa-router')
const router = new Router({
  prefix: '/if'
})

/**
 * 基础信息
 */
const basicInfo = require('./controller/basicInfo')
router.get('/basicInfo/getBasicInfo', basicInfo.getBasicInfo)

/**
 * 用户、角色与权限
 */
const login = require('./controller/login')
router.post('/login/getUsers', login.getUsers)
router.post('/login/getMenus', login.getMenus)

module.exports = router
