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
    require: true
  },
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
})

tagsSchema.pre('save', function (next) {
  this.update = Date.now();
  next()
});


const Model = mongoose.model('tags', tagsSchema)

module.exports = Model
