// const http = require('http')
const express = require('express')
const path = require('path')

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')

const hostname = 'localhost'
const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//   res.end('hello world\n')
// })

const app = express()

// 指定模板存放目录
app.set('views', 'views')

// 指定模板引擎为Handlebars
app.set('view engine', 'hbs')

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next 触发下一个中间件执行
 * 中间件是一种软件工程概念，是指将具体的业务逻辑和底层逻辑解耦的组件（在express中，中间件就是一个函数）
 */
function loggingMiddleware(req, res, next) {
  const time = new Date()
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`)
  next()
}

app.use(loggingMiddleware) // 全局中间件

app.use(express.static('public')) // 静态文件中间件

// app.get('/', (req, res) => {
//   // res.send('hello qtzx')
//   res.render('index')
// })

// app.get('/contact', (req, res) => {
//   res.render('contact')
// })

// app.get('/broken', (req, res) => {
//   throw new Error('Broken!')
// })

// app.get('/api', (req, res) => {
//   res.status(200).json({ name: '图雀社区', website: 'https://tuture.co' })
// })

app.use('/', indexRouter)
app.use('/api', apiRouter)

app.use('*', (req, res) => {
  res.status(404).render('404', { url: req.originalUrl })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render('500')
})

// server.listen(port, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
