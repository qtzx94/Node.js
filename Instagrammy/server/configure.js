const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars') // 用于渲染用户界面的模板引擎
const bodyParser = require('body-parser') // 用于解析客户端请求的中间件，包括HTML表单和JSON请求
const cookieParser = require('cookie-parser') // 用于收发cookie
const morgan = require('morgan') // 用于记录日志的中间件，对于开发调试和生产监控都很有用
const methodOverride = require('method-override') // 为老的浏览器提供REST请求的兼容性支持
const errorHandler = require('errorhandler') // 用于在发生错误时打印调用栈，仅在开发时使用
const moment = require('moment') // 处理时间的库

const routes = require('./routes')

module.exports = function (app) {
  // 定义moment全局语言
  moment.locale('zh-cn')

  app.engine(
    'handlebars',
    exphbs.create({
      helpers: {
        timeago: function (timestamp) {
          return moment(timestamp).startOf('minute').fromNow()
        }
      }
    }).engine
  )
  app.set('view engine', 'handlebars')

  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(methodOverride())
  app.use(cookieParser('secret-value'))
  app.use('/public/', express.static(path.join(__dirname, '../public'))) // express.static是express自带的静态资源中间件，用于向客户端发送图片、css等静态文件

  if (app.get('env') === 'development') {
    app.use(errorHandler())
  }

  routes(app)
  return app
}
