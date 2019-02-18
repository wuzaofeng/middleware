const categoriesModel = require('../../schema/blog/categories')
const {CODE} = require('../../public/javascripts/blogConfig')

const categories = {
  read: async (ctx, next) => {
    const data = await categoriesModel.find()
    ctx.body = data
  },
  create: async (ctx, next) => {
    const { name, type } = ctx.request.body
    // 判断是否有传参数
    if (!name || !type) {
      ctx.body = {
        message: '参数错误',
        code: CODE.PARAMS_ERROR
      }
    } else {
      // 查找是否有name字段
      const res = await categoriesModel.findOne({ name })
      if (!res) {
        const data = await categoriesModel.create({
          name,
          type
        })
        ctx.body = data
      } else {
        ctx.body = {
          message: '不能重复填写',
          code: CODE.REPEAT_ERROR
        }
      }
    }
  }
}

module.exports = categories