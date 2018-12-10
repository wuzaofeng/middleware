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

// 获取电台信息
router.get('/radio_info', async (ctx,next)=>{
  try {
    const res = await ajax.radioInfo()
    console.log(res)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
