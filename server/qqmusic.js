const config = require('./config').QQMusic
const axios = require('./axios')
const headers = {
  referer: 'https://c.y.qq.com/',  //源域名
  host: 'c.y.qq.com'
}
const headers2 = {
  referer: 'https://c.y.qq.com/',  //源域名
  host: 'u.y.qq.com' 
}
const POST = 'post'
const ajax = {
  // 首页
  home() {
    return axios.fetch({ url: config.QQHOME_URL, params: config.default_params })
  },

  // 获取歌曲列表
  songInfo(param) {
    const params = {
      ...config.default_params,
      new_format: 1,
      pic: 500,
      type: 1,
      json: 1,
      utf8: 1,
      onlysong: 0,
      picmid: 1,
      nosign: 1,
      song_begin: 0,
      song_num: 15,
      ...param
    }
    return axios.fetch({
      url: config.QQSONG_INFO,
      params,
      headers
    })
  },

  // 热门歌单列表，音乐地址
  songSrc(songmid) {
    const params = {  _: new Date().getTime() }
    const data = {
      req_0:{
        ...config.default_req_0,
        param:{
          ...config.default_req_0_param,
          songmid
        }
      },
        comm: config.default_comm
    }
    return axios.fetch({
      url: config.QQSONG_LIST,
      headers: {
        ...headers2,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      method: POST,
      params,
      data
    })
  },

  // 获取歌词
  lyric(param) {
    const params = {
      ...config.default_params,
      nobase64: 1,
      songtype: 0,
      _: new Date().getTime(),
      jsonpCallback: 'jsonp1',
      ...param
    }
    return axios.fetch({
      url: config.QQ_LYRIC,
      params,
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },

  // 获取电台所显示的歌单
  radio(labelid) {
    const params = {
      labelid,
      ...config.default_params,
    }
    return axios.fetch({
      url: config.QQRADIO,
      params,
    })
  },

  // 获取排行榜
  ranking() {
    const params = {
      ...config.default_params,
    }
    return axios.fetch({
      url: config.QQRANKING,
      params,
    })
  },

  // 获取排行榜详情
  rankingInfo(topid) {
    const params = {
      ...config.default_params,
      uin: 702167947,
      tpl: 3,
      page: 'detail',
      type: 'top',
      topid
    }
    return axios.fetch({
      url: config.QQRANKING_INFO,
      params,
    })
  },

  // 热门搜索
  hotKeys() {
    const params = {
      ...config.default_params,
    }
    return axios.fetch({
      url: config.QQHOT_KEYS,
      params,
    })
  }
}
module.exports = ajax
