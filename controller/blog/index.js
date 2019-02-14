const articles = require('./articles')
const user = require('./user')
const tags = require('./tags')

const controller = {
  Index: async (ctx, next) => {
    ctx.body = '989'
  }
}

console.log({
  user,
  articles,
  tags,
  ...controller
})

module.exports = {
  user,
  articles,
  tags,
  ...controller
}
