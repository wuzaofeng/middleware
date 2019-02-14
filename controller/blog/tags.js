const tagsModel = require('../../schema/blog/tags')

const tags = {
  read: async (ctx, next) => {
    const data = await tagsModel.find()
    ctx.body = data
  },
  create: async (ctx, next) => {
    const req = ctx.request.body
    const data = await tagsModel.create({
      name: 'javascript',
      type: 0
    });
    ctx.body = data
  },
  delete: async(ctx, next) => {
    
  }
}

module.exports = tags