const router = require('koa-router')()
const controller = require('../controller/blog/index')
router.prefix('/blog')

router.get('/', controller.Index)

// 文章
router.post('/articles', controller.articles.create)
router.get('/articles', controller.articles.read)

// 用户
router.post('/user', controller.user.create)
router.get('/user', controller.user.read)

// 标签
router.post('/tags', controller.tags.create)
router.get('/tags', controller.tags.read)

// 文章分类
router.post('/categories', controller.categories.create)
router.get('/categories', controller.categories.read)

// 链接
router.post('/baricon', controller.barIcon.create)
router.get('/baricon', controller.barIcon.read)

module.exports = router
