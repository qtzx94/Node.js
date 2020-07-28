const mongoose = require('mongoose')
const path = require('path')

const Schema = mongoose.Schema

// 定义了一个Schema，即数据对象的模式，描述了这个模型的所有字段及相应的属性
const ImageSchema = new Schema({
  title: { type: String },
  description: { type: String },
  filename: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now() }
})

// 虚字段uniqueId和普通字段最大区别是不会保存到数据库中，而是每次查询时临时计算，通常用于对普通字段进行格式调整或组合
ImageSchema.virtual('uniqueId').get(function () {
  return this.filename.replace(path.extname(this.filename), '')
})

module.exports = mongoose.model('Image', ImageSchema)
