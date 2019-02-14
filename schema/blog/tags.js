const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 标签模型
const tagsSchema = Schema({
  name: String,
  type: Number
})

module.exports = mongoose.model('tags', tagsSchema) 