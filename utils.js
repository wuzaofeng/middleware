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
  },

  formatVar: function (data) {
    const _data = JSON.parse("{" + data.replace(/var\s/g, '"').replace(/;/g, ',').replace(/=/g, '":') + "}")
    const _new = {}
    for(key in _data) {
      const _key = key.replace(/("|\s)/g, '')
      _new[_key] = _data[key]
    }
    return _new
  },

  getUploadDirName: function (){
    const date = new Date();
    let month = Number.parseInt(date.getMonth()) + 1;
    month = month.toString().length > 1 ? month : `0${month}`;
    const dir = `${date.getFullYear()}${month}${date.getDate()}`;
    return dir;
  }
  
}

module.exports = func
