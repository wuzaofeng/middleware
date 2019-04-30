const articles = require('./articles')
const user = require('./user')
const tags = require('./tags')
const categories = require('./categories')
const common = require('./common')

const controller = {
  Index: async (ctx, next) => {
    ctx.body = '989'
  }
}

console.log({
  user,
  articles,
  tags,
  categories,
  common,
  ...controller
})

module.exports = {
  user,
  articles,
  tags,
  categories,
  common,
  ...controller
}
