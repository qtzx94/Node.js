const express = require('express')

const router = express.Router()
const home = require('../controllers/home')
const image = require('../controllers/image')

module.exports = function (app) {
  router.get('/', home.index) // 网站主页
  router.get('/images/:image_id', image.index) // 展示单张图片
  router.post('/images', image.create) // 上传图片
  router.post('/images/:image_id/like', image.like) // 点赞图片
  router.post('/images/:image_id/comment', image.comment) // 评论图片
  app.use(router)
}
