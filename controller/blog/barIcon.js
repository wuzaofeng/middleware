const barIconModel = require('../../schema/blog/barIcon')
const {CODE} = require('../../public/javascripts/blogConfig')

const barIcon = {
  read: async (ctx, next) => {
    const data = await barIconModel.find()
    ctx.body = data
  },
  create: async (ctx, next) => {
    const { link, type, icon } = ctx.request.body
    // 判断是否有传参数
    if (!link || !type || !icon) {
      ctx.body = {
        message: '参数错误',
        code: CODE.PARAMS_ERROR
      }
    } else {
      const data = await barIconModel.create({
        link,
        type,
        icon
      })
      ctx.body = data
    }
  }
}

module.exports = barIcon