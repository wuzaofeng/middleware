const fs = require('fs')
const path = require('path')
const {CODE, BASE} = require('../../public/javascripts/blogConfig')
const utils = require('../../utils')

const common = {
  avatar: async (ctx, next) => {
    // 上传单个文件
    const file = ctx.request.files.file // 获取上传文件
    const reader = fs.createReadStream(file.path)
    const fp = path.join(__dirname, `../../public/images/upload`)
    if (!fs.existsSync(fp)) { // 检查是否有“public/upload/”文件夹
      fs.mkdirSync(fp); // 没有就创建
    }
    let filePath = fp + `/${utils.getUploadDirName()}-${file.name}`
    // 创建可写流
    const upStream = fs.createWriteStream(filePath)
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    ctx.body = {
      code: CODE.SUCCESS,
      path: BASE + filePath.split('public/')[1]
    }
  }
}

module.exports = common