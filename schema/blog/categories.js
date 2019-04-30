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
    type: String,
    require: true,
    unique: true
  },
  count: {
    type: Number,
    require: true,
    default: 0
  },
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
})

categoriesSchema.pre('save', function (next) {
  this.update = Date.now();
  next()
});


module.exports = mongoose.model('categories', categoriesSchema) 