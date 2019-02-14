const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 标签模型
const tagsSchema = Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  type: {
    type: Number,
    require: true,
    unique: true
  }
})

module.exports = mongoose.model('tags', tagsSchema) 