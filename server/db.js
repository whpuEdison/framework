/**
 * 封装数据库操作
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/framework', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

let db = mongoose.connection
mongoose.Promise = global.Promise
db.on('error', function (err) {
  console.log('数据库连接出错', err)
})
db.on('open', function () {
  console.log('数据库连接成功')
})
db.on('disconnected', function () {
  console.log('数据库连接断开')
})

/**
 * 每一个 schema 都映射到一个 Mongodb 的集合(collection)，
 * 并定义了该集合(collection)中的文档(document)的形式。
 * Model的每一个实例（instance）就是一个document，
 * document可以保存到数据库和对数据库进行操作。
 */
// const basicInfo = require('./model/basicInfo')
const schema = mongoose.Schema()
const model = {
  basicInfo: mongoose.model('basic_infos', schema),
  user: mongoose.model('users', schema),
  role: mongoose.model('roles', schema),
  menu: mongoose.model('menus', schema),
  user_role: mongoose.model('user_roles', schema),
  role_menu: mongoose.model('role_menus', schema)
}

module.exports = model
