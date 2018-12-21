const QQ_BASE_C = 'https://c.y.qq.com'
const QQ_BASE_U = 'https://u.y.qq.com'
const config = {
  // qqmusic
  QQMusic: {
    default_params: {
      g_tk: 5381,
      uin: 702167947,
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
    QQHOME_URL: `${QQ_BASE_C}/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`,
    QQSONG_INFO: `${QQ_BASE_C}/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg`,
    QQSONG_LIST: `${QQ_BASE_U}/cgi-bin/musicu.fcg`,
    QQ_LYRIC: `${QQ_BASE_C}/lyric/fcgi-bin/fcg_query_lyric.fcg`,
    QQRADIO: 'https://szc.y.qq.com/v8/fcg-bin/fcg_v8_radiosonglist.fcg',
    QQRANKING: `${QQ_BASE_C}/v8/fcg-bin/fcg_myqq_toplist.fcg`,
    QQRANKING_INFO: `${QQ_BASE_C}/v8/fcg-bin/fcg_v8_toplist_cp.fcg`,
    QQHOT_KEYS: `${QQ_BASE_C}/splcloud/fcgi-bin/gethotkey.fcg`,
    QQSEARCH: `${QQ_BASE_C}/soso/fcgi-bin/search_for_qq_cp`
  }
}

module.exports = config