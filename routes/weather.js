const router = require('koa-router')()
const ajax = require('../server/weather/weather')
const utils = require('../utils')
router.prefix('/weather')

// 首页
router.get('/', async(ctx, next) => {
  try {
    const params = ctx.query
    const res = await ajax.localDetails(params)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})
 
// 近日40天和24小时
router.get('/recently', async(ctx, next) => {
  try {
    const params = ctx.query
    const res = await ajax.recently(params)
    ctx.body = utils.formatVar(res)
  } catch (err) {
    console.log(err)
  }
})

// http://doc.tianqiapi.com/603579
// cityid, city, ip
router.get('/tianqiapi', async(ctx, next) => {
  try {
    const params = ctx.query
    const res = await ajax.tianQiApi(params)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

module.exports = router