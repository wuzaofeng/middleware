const userModel = require('../../schema/blog/user')
const tagsModel = require('../../schema/blog/tags')
const articlesModel = require('../../schema/blog/articles')
const categoriesModel = require('../../schema/blog/categories')
const barIconModel = require('../../schema/blog/barIcon')

const user = {
  read: async (ctx, next) => {
    const { email } = ctx.request.query
    // 通过email来查询单个用户
    if (email) {
      const { _id, authorSrc, username, location } = await userModel.findOne({ email: '673908452@qq.com' })
      const tags = await tagsModel.find()
      const articles = await articlesModel.find()
      const categories = await categoriesModel.find()
      const barIcon = await barIconModel.find()
  
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
        barIcon: barIcon.map(i => ({
          link: i.link,
          icon: i.icon,
          type: i.type
        }))
      }
    } else {
      const list = await userModel.find()
      ctx.body = {
        list,
        total: list.length
      }
    }
  },
  create: async (ctx, next) => {
    const req = ctx.request.body

    const data = await userModel.create({
      authorSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1401422158,2435265343&fm=26&gp=0.jpg',
      username: 'WEIC`S BLOG',
      location: 'shenzhen China',
      email: '673908452@qq.com',
    });
    ctx.body = data
  },
}

module.exports = user