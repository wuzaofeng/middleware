const tagsModel = require('../../schema/blog/tags')

const tags = {
  read: async (ctx, next) => {
    const data = await tagsModel.find()
    ctx.body = data
  },
  create: async (ctx, next) => {
    const { name, type } = ctx.request.body
    // 判断是否有传参数
    if (!name || !type) {
      ctx.body = {
        message: '参数错误'
      }
    } else {
      // 查找是否有name字段
      const res = await tagsModel.findOne({ name })
      if (!res) {
        const data = await tagsModel.create({
          name,
          type
        })
        ctx.body = data
      } else {
        ctx.body = {
          message: '不能重复填写'
        }
      }
    }
  }
}

module.exports = tags