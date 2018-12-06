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
    QQHOME_URL: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
    QQSONG_INFO: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
    QQSONG_List: 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  }
}

module.exports = config