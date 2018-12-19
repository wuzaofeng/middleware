const config = {
  // qqmusic

  QQMusic: {
    default_params: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: new Date().getTime()
    },
    default_comm: {
      g_tk:5381,
      uin:0,
      format:"json",
      ct:23,
      cv:0
    }, 
    default_req_0: {
      module:"vkey.GetVkeyServer",
      method:"CgiGetVkey",
    },
    default_req_0_param: {
      guid: "4980529125",
      songtype: [],
      uin: "0",
      loginflag:0,
      platform: "23",
      h5to: 'speed'
    },
    QQHOME_URL: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
    QQSONG_INFO: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
    QQSONG_LIST: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
    QQ_LYRIC: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg',
    QQRADIO: 'https://szc.y.qq.com/v8/fcg-bin/fcg_v8_radiosonglist.fcg'
  }
}

module.exports = config