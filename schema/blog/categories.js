const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 标签模型
const categoriesSchema = Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  type: {
    type: Number,
    require: true,
    unique: true
  },
  count: {
    type: Number,
    require: true,
    default: 0
  }
})

module.exports = mongoose.model('categories', categoriesSchema) 