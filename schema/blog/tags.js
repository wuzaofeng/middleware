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
  }
})

const Model = mongoose.model('tags', tagsSchema)

module.exports = Model
