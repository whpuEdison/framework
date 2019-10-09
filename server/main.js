/**
 * 后台服务入口
 */
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const router = require('./route')
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(9527)
