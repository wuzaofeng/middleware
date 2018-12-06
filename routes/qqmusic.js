const router = require('koa-router')()
const ajax = require('../server/qqmusic')
const utils = require('../utils')
router.prefix('/qqmusic')

router.get('/', async(ctx, next) => {
  try {
    const res = await ajax.home()
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

router.get('/song_info',async (ctx,next)=>{
  try {
    const {id, song_begin, song_num} = ctx.query
    const res = await ajax.songInfo({ disstid: id, song_begin, song_num  })
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

router.get('/song_list',async (ctx,next)=>{
  try {
    const songmid = ["002ZKnKQ34rbZu","001G5IgY2gHy1T","002ihFxm1EarI4","003vebij0oHGXE","000Ih2kc2fBXPT","000nabdy2vrA0S","004aStGo17PsB2","0018YBhh2vDLzQ","001FPOIM20siE6","001tNpVH2WfcN0","004btPxv0CSo8q","0049WGCk10fTUK","000vEse41c28Rt"]
    const res = await ajax.songVkey()
    console.log(res)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

router.get('/song_vkey',async (ctx,next)=>{
  try {
    const {songmid, filename} = ctx.query
    const res = await ajax.songVkey(songmid, filename)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

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

router.post('/song_src',async (ctx,next)=>{
  try {
    ctx.body = 'aaaa'
  } catch (err) {
    console.log(err)
  }
})

router.get('/radio_list', async (ctx,next)=>{
  try {
    const res = await ajax.radioList()
    console.log(res)
    ctx.body = res
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
