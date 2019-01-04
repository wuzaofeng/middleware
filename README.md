# 🔥 koa2中间件

> 用的是koa2充当中间件
> 在开发的过程中，可能会没发现到一些特别的问题，有什么建议和问题，欢迎大牛们在[Issues](https://github.com/wuzaofeng/middleware/issues)提出更加好的方案。

## 相关项目
 基于vue全家桶 [高仿qq音乐](https://github.com/wuzaofeng/qq-music)
 微信小程序 [天气预报](https://github.com/wuzaofeng/weather)

## qq音乐接口功能
- [x]  qq音乐接口模块
- [x]  首页
- [x]  热门歌单信息 + 歌单列表
- [x]  热门歌单列表 音乐地址
- [x]  获取歌词
- [x]  获取电台歌单
- [x]  获取电台排行榜
- [x]  获取排行榜详情
- [x]  热门搜索
- [x]  关键字搜索

## 天气预报接口功能
- [x] 获取当前地址的早晚天气详情
- [x] 近日40天和24小时天气情况
- [x] 城市的天气信息
- [x] [调用天气api接口](http://doc.tianqiapi.com/603579)

## 目录结构
```
-  server               音乐请求的接口
    - api.js                接口
    - config.js             配置文件
    - qqmusic.js            请求qq音乐
- routes                路由
    - qqmusic.js            提供客户端接口

```

##路由地址
##### qq音乐
```
- /qqmusic              所有qq音乐路径前面加qqmusic
    - /                     首页
    - /song_info            热门歌单信息 + 歌单列表
    - /song_src             热门歌单列表 音乐地址
    - /lyric                获取歌词
    - /radio                获取电台歌单
    - /ranking              获取电台排行榜
    - /ranking_info         获取排行榜详情
    - /hot_keys             热门搜索
    - /search_keyword       关键字搜索
```

##### 天气预报
```
- /weather            所有天气路径前面加weather
    - /                     首页（获取当地信息）
    - recently              近日40天和24小时天气情况
    - local-info            城市的天气信息
    - tianqiapi             天气api接口
```

## 其他

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:2222
$ npm run start
```
