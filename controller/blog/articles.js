const articlesModel = require('../../schema/blog/articles')
const categoriesModel = require('../../schema/blog/categories')
const {CODE} = require('../../public/javascripts/blogConfig')

const articles = {
  read: async (ctx, next) => {
    const articles = await articlesModel.find()
    ctx.body = {
      data: {
        list: articles,
        count: articles.length
      },
      code: CODE.SUCCESS
    }
  },
  create: async (ctx, next) => {
    const { body } = ctx.request
    const _default = {
      author: 'jack',
      link: 'https://jspang.com/post/flutterDemo.html',
      img: 'http://jspang.com/static/upload/20190102/9SpnvSzav06JfPUrVtc1hNu9.jpg',
      title: '20个Flutter实例视频教程  让你轻松上手工作',
      tag: 0,
      categories: 0,
      visitor: 200,
      content: '<p>到目前位置，作一个页面已经没有什么问题了，接下来需要学习一下页面间的跳转，学会了这一季内容，就可以从一个单页面的应用制作一个项目了。</p>\n' +
        '<p>不过提前跟小伙伴们说一下，其实这章也是有难度的，因为这跟前端的导航或者说超链接有所不同。如果你能有空杯心态，学习来会容易一点。</p>\n' +
        '<p>不过你不要害怕，其实也不难，大不了多练习几遍，熟练一下就好。</p>\n' +
        '<p>学习这个视频，你最好先把Flutter的前三季给看了，否则你可能看蒙圈。</p>\n' +
        '<ul>\n' +
        '<li>第一季Flutter视频教程地址：<a href="http://jspang.com/post/flutter1.html">http://jspang.com/post/flutter1.html</a></li>\n' +
        '</ul>\n' +
        '<ul>\n' +
        '<li><p>第二季Flutter视频教程地址：<a href="http://jspang.com/post/flutter2.html">http://jspang.com/post/flutter2.html</a></p>\n' +
        '</li>\n' +
        '<li><p>第三季Flutter视频教程地址：<a href="http://jspang.com/post/flutter3.html">http://jspang.com/post/flutter3.html</a></p>\n' +
        '</li>\n' +
        '</ul>\n'
    }
    const data = await articlesModel.create(_default)
    const { categories } = data
    const { ok } = await categoriesModel.update({type: categories}, {$inc: { count: 1 }})
    if(ok) {
      ctx.body = {
        data,
        code: CODE.SUCCESS
      }
    } else {
      ctx.body = {
        message: "添加失败",
        code: code.ERROR
      }
    }
  },
}

module.exports = articles