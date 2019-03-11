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
  update: { type: Date, default: Date.now },
})

userSchema.pre('save', function (next) {
  this.update = Date.now();
  next()
});

module.exports = mongoose.model('user', userSchema) 