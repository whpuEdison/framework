const mongoose = require('mongoose')
const basicInfo = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    require: true
  },
  job: {
    type: String,
    require: true
  }
})
module.exports = basicInfo
