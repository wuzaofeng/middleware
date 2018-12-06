const JSONP = require('node-jsonp')
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
  home() {
    return axios.fetch({ url: config.QQHOME_URL, params: config.default_params })
  },
  // 获取单曲信息
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
  songList(songmid) {
    const params = {
      _: new Date().getTime()
    }
    const data = {
      req_0: {
        module: "vkey.GetVkeyServer",
        method: "CgiGetVkey",
        param: {
          guid: 5800615146,
          songmid,
          songtype: [],
          uin: "0",
          loginflag:0,
          platform:23,
          h5to: 'speed'
        }
      },
      comm: {
        g_tk:5381,
        uin:0,
        format:"json",
        ct:23,
        cv:0
      }
    }
    return axios.fetch({
      url: config.QQSONG_List,
      params,
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data,
      method: POST
    })
  },
  // 获取key
  songVkey(songmid = '0010hBPF4TtDbz', filename = 'C1000010hBPF4TtDbz.m4a') {
    return new Promise((resolve, reject) => {
      JSONP(`https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=678733985&jsonpCallback=MusicJsonCallback8015407264426806&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&callback=MusicJsonCallback8015407264426806&songmid=${songmid}&filename=${filename}&guid=1674273789`,
        function (json) {
          console.log(json)
          resolve(json)
      })
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
      url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
      params,
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  songSrc() {
    // const data = '{"req_0":{"module":"track_info.UniformRuleCtrlServer","method":"GetTrackInfo","param":{"ids":[4962990,1889266,8292,476205,1672450,1248135,4029059,102654611,106291312,1032932,105838893,103048995,200363210,1293976,158265],"types":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},"comm":{"g_tk":5381,"uin":0,"format":"json","ct":23,"cv":0}}'
    // console.log(data)
    return axios.fetch({
      url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?_=1541662551668',
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      method: POST
    })
  },
  // 获取电台
  radioList() {
    const data = {"comm":{"g_tk":5381,"uin":0,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"detail":{"module":"music.pf_song_detail_svr","method":"get_song_detail","param":{"song_id":214193203}},"simsongs":{"module":"rcmusic.similarSongRadioServer","method":"get_simsongs","param":{"songid":214193203}},"gedan":{"module":"music.mb_gedan_recommend_svr","method":"get_related_gedan","param":{"sin":0,"last_id":0,"song_type":1,"song_id":214193203}},"video":{"module":"MvService.MvInfoProServer","method":"GetSongRelatedMv","param":{"songid":"214193203","songtype":1,"lastmvid":0,"num":5}}}
    return axios.fetch({
      url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?_=1544079236484',
      headers: {
        ...headers2,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      method: POST,
      data
    })
  }
}
module.exports = ajax