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
  tag: Number,
  categories: Number
})

const model = mongoose.model('articles', articlesSchema)

module.exports = model