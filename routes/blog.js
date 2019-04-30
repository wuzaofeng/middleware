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
router.put('/user', controller.user.update)
router.delete('/user', controller.user.delete)

// 标签
router.post('/tags', controller.tags.create)
router.get('/tags', controller.tags.read)
router.put('/tags', controller.tags.update)
router.delete('/tags', controller.tags.delete)

// 文章分类
router.post('/categories', controller.categories.create)
router.get('/categories', controller.categories.read)
router.put('/categories', controller.categories.update)
router.delete('/categories', controller.categories.delete)

// 上传图片
router.post('/common/avatar', controller.common.avatar)

module.exports = router
