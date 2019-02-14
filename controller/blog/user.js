const userModel = require('../../schema/blog/user')

const user = {
  read: async (ctx, next) => {
    const data = await userModel.find()
    ctx.body = data
  },
  create: async (ctx, next) => {
    const req = ctx.request.body
    console.log(req)
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