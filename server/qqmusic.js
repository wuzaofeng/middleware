const request = require('request')
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
      url: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
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
      url: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
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
      uin: 702167947
    }
    return axios.fetch({
      url: 'https://szc.y.qq.com/v8/fcg-bin/fcg_v8_radiosonglist.fcg',
      params,
    })
  },

  // 获取电台
  radioInfo() {
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
  },
}
// 将一个对象拼接在url的后面
function createURL(url, param) {
  var urlLink = '';
  for(key in param) {
    var link = '&' + key + "=" + param[key];
    urlLink += link;
  }

  urlLink = url + "?" + urlLink.substr(1);
  return urlLink.replace(' ', '');
}
// 解析url 拿到参数对象
function parseQueryString(url) {
  var result = {};
  if (url.indexOf('?') > -1) {
      var str = url.split('?')[1];  
      var temp = str.split('&');  
      for (var i = 0; i < temp.length; i++) {     
          var temp2 = temp[i].split('=');     
          result[temp2[0]] = temp2[1];  
      }  
  }
  return result;
}
module.exports = ajax
