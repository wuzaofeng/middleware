const router = require('koa-router')()
const ajax = require('../server/qqmusic')
const utils = require('../utils')
router.prefix('/qqmusic')

// 首页
router.get('/', async(ctx, next) => {
  try {
    const res = await ajax.home()
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

// 热门歌单信息 + 歌单列表
router.get('/song_info',async (ctx,next)=>{
  try {
    const {id, song_begin, song_num} = ctx.query
    const res = await ajax.songInfo({ disstid: id, song_begin, song_num  })
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

// 热门歌单列表 音乐地址
router.post('/song_src',async (ctx,next)=>{
  try {
    const { songmid } = ctx.request.body
    console.log(songmid)
    const res = await ajax.songSrc(songmid)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})
// 获取歌词
router.get('/lyric',async (ctx,next)=>{
  try {
    const {musicid} = ctx.query
    const res = await ajax.lyric({ musicid })    
    const data = utils.formatJsonp(res)
    ctx.body = data
  } catch (err) {
    console.log(err)
  }
})

// 获取电台歌单
router.post('/radio', async(ctx, next) => {
  try {
    const { labelid } = ctx.request.body
    const res = await ajax.radio(labelid)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

// 获取电台排行榜
router.get('/ranking', async(ctx, next) => {
  try {
    const res = await ajax.ranking()
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

// 获取排行榜详情
router.post('/ranking_info', async(ctx, next) => {
  try {
    const { topid } = ctx.request.body
    const res = await ajax.rankingInfo(topid)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

// 热门搜索
router.get('/hot_keys', async(ctx, next) => {
  try {
    const res = await ajax.hotKeys()
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

router.get('/search_keyword', async(ctx, next) => {
  try {
    const { w, n = 20, p = 1} = ctx.query
    const res = await ajax.searchKeysWord({ w, n, p })
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
