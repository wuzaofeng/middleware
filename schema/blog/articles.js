const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 文章模型
const articlesSchema = Schema({
  author: String,
  link: String,
  img: String,
  create: { type: Date, default: Date.now },
  title: String,
  content: String,
  visitor: Number,
  tag: Number
})

module.exports = mongoose.model('articles', articlesSchema) 