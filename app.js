// const path = require('path')
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-body')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const mongoose = require('mongoose')
const index = require('./routes/index')
const qqmusic = require('./routes/qqmusic')
const weather = require('./routes/weather')
const blog = require('./routes/blog')

require('babel-core/register')

const SQL_URL = 'mongodb://localhost:27017/blog'

// mongoose
mongoose.connect(SQL_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text'],
  multipart: true, // 是否支持 multipart-formdate 的表单
  strict: false, //如果为true，不解析GET,HEAD,DELETE请求
  formidable: {
    // uploadDir: path.join(__dirname, 'public/upload/'), // 设置文件上传目录
    keepExtensions: true, // 保持文件的后缀
    maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小，缺省2M
    // onFileBegin: (name, file) => { // 文件上传前的设置
    //   const fp = path.join(__dirname, 'public/upload/');
    //   if (!fs.existsSync(fp)) { // 检查是否有“public/upload/”文件夹
    //     fs.mkdirSync(fp); // 没有就创建
    //   }
    //   console.log(`bodyparse: name:${name}; file:${util.inspect(file)}`);
    // }
  }
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(cors({
  origin: function(ctx) {   
    return "*";
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(qqmusic.routes(), qqmusic.allowedMethods()) // qq音乐
app.use(weather.routes(), weather.allowedMethods()) // 中国天气网
app.use(blog.routes(), weather.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
