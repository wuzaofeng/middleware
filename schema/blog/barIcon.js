const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 链接模型
const barIconSchema = Schema({
  icon: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  link: {
    type: String,
    require: true
  },
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
})

barIconSchema.pre('save', function (next) {
  this.update = Date.now();
  next()
});

const model = mongoose.model('barIcon', barIconSchema)

module.exports = model