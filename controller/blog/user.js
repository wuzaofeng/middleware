const userModel = require('../../schema/blog/user')
const tagsModel = require('../../schema/blog/tags')
const articlesModel = require('../../schema/blog/articles')
const categoriesModel = require('../../schema/blog/categories')
const {CODE} = require('../../public/javascripts/blogConfig')

const user = {
  read: async (ctx, next) => {
    const { email } = ctx.request.query
    // 通过email来查询单个用户
    if (email) {
      const { _id, authorSrc, username, location } = await userModel.findOne({ email }) || {}
      const tags = await tagsModel.find()
      const articles = await articlesModel.find()
      const categories = await categoriesModel.find()
  
      ctx.body = {
        _id, authorSrc, username, location, email,
        count: {
          tags: tags.length,
          articles: articles.length
        },
        tags: tags.map(i => ({
          name: i.name,
          type: i.type
        })),
        categories: categories.map(i => ({
          name: i.name,
          count: i.count
        })),
        code: CODE.SUCCESS
      }
    } else {
      const list = await userModel.find()
      ctx.body = {
        list,
        total: list.length,
        code: CODE.SUCCESS
      }
    }
  },
  create: async (ctx, next) => {
    const req = ctx.request.body
    const data = await userModel.create(req)
    ctx.body = {
      message: '添加成功',
      code: CODE.SUCCESS
    }
  },
  update: async (ctx, next) => {
    const {_id, ...updateData} = ctx.request.body
    if (_id) {
      const data = await userModel.findByIdAndUpdate({ _id }, { ...updateData });
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
    console.log(delData)
    if (delData.length) {
      for(let i=0;i<delData.length;i++) {
        const _id = delData[i]
        console.log(_id)
        const data =await userModel.findByIdAndRemove(_id);
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
 },
}

module.exports = user