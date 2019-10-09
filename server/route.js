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

module.exports = router
