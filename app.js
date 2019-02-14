const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
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
  useNewUrlParser: true
});

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
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
