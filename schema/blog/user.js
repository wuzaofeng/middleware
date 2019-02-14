const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 用户模型
const userSchema = Schema({
  authorSrc: String,
  username: String,
  location: String,
  email: String
})

module.exports = mongoose.model('user', userSchema) 