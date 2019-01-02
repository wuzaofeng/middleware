const axios = require('../axios')
const config = require('./config')

const headers = {
  referer: 'http://m.weather.com.cn',
  host: 'd1.weather.com.cn',
}

const weather = {
  // 获取当前地址的早晚天气详情
  localDetails(params) {
    return axios.fetch({
      url: config.LOCAL_DEATILS,
      params
    })
  },

  // 近日40天和24小时
  recently(params) {
    const { citycode } = params
    return axios.fetch({
      url: `${config.RECENTLY_INFO}/${citycode}.html`,
      headers: {
        ...headers,
        'Content-Type': 'text/html'
      }
    })
  },

  // 城市的天气信息
  localInfo(params) {
    const { citycode } = params
    return axios.fetch({
      url: `${config.LOCAL_INFO}/${citycode}.html`,
      params,
      headers: {
        ...headers,
        'Content-Type': 'text/html'
      }
    })
  },

  // http://doc.tianqiapi.com/603579
  tianQiApi(params) {
    return axios.fetch({
      url: config.TIANQI_API,
      params
    })
  }
}
module.exports = weather