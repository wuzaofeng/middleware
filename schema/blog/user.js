const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 用户模型
const userSchema = Schema({
  authorSrc: String,
  username: String,
  location: String,
  email: {
    type: String,
    unique: true,
    require: true
  },
  create: { type: Date, default: Date.now },
})

module.exports = mongoose.model('user', userSchema) 