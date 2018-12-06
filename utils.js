const func = {
  formatJsonp: function (data, callback = 'jsonp1') {
    const patt = new RegExp(`${callback}`)
    if (patt.test(data)) {
      const strArr = JSON.stringify(data).replace(`${callback}(`, '').split(')')
      if (strArr.length > 2) {
        const last = strArr.pop()
        const str = strArr.join(')').concat(last)
        return str
      }
      return JSON.parse(strArr.join(''))
    }
  }
}
module.exports = func
