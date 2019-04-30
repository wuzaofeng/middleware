const tagsModel = require('../../schema/blog/tags')
const {CODE} = require('../../public/javascripts/blogConfig')

const tags = {
  read: async (ctx, next) => {
    const list = await tagsModel.find()
    ctx.body = {
      list,
      total: list.length,
      code: CODE.SUCCESS
    }
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
      const res = await tagsModel.findOne({ name })
      if (!res) {
        const data = await tagsModel.create({
          name,
          type
        })
        ctx.body = {
          data,
          code: CODE.SUCCESS
        }
      } else {
        ctx.body = {
          message: '不能重复填写',
          code: CODE.REPEAT_ERROR
        }
      }
    }
  },
  update: async (ctx, next) => {
    const {_id, ...updateData} = ctx.request.body
    if (_id) {
      const data = await tagsModel.findByIdAndUpdate({ _id }, { ...updateData });
      console.log(data)
      ctx.body = {
        message: '更新成功',
        code: CODE.SUCCESS
      }
    } else {
      ctx.body = {
        message: '参数错误',
        code: CODE.PARAMS_ERROR
      }
    }
  },
  delete: async (ctx, next) => {
    const {delData} = ctx.request.body
    if (delData.length) {
      for(let i=0;i<delData.length;i++) {
        const _id = delData[i]
        const data = await tagsModel.findByIdAndRemove(_id);
        console.log(data)
      }
      ctx.body = {
        message: '删除成功',
        code: CODE.SUCCESS
      }
    } else {
      ctx.body = {
        message: '参数错误',
        code: CODE.PARAMS_ERROR
      }
    }
  }
}

module.exports = tags