const CODE = {
  SUCCESS: 0,  // 成功
  PARAMS_ERROR: -1, // 参数错误
  REPEAT_ERROR: -2, // 重复错误 
  ERROR: 500 // 服务器错误
}

module.exports = {
  CODE,
  BASE: 'http://localhost:2222/'
}