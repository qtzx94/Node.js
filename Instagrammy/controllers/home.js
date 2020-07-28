// 每个控制器实际上都是一个Express中间件
const ImageModel = require('../models/image')

module.exports = {
  index: function (req, res) {
    // res.send('The home: index controller')
    // res.render('index')
    // const viewModel = {
    //   images: [
    //     {
    //       uniqueId: 1,
    //       title: '示例图片1',
    //       description: '',
    //       filename: 'sample1.jpg',
    //       views: 0,
    //       likes: 0,
    //       timestamp: Date.now()
    //     },
    //     {
    //       uniqueId: 2,
    //       title: '示例图片2',
    //       description: '',
    //       filename: 'sample2.jpg',
    //       views: 0,
    //       likes: 0,
    //       timestamp: Date.now()
    //     },
    //     {
    //       uniqueId: 3,
    //       title: '示例图片3',
    //       description: '',
    //       filename: 'sample3.jpg',
    //       views: 0,
    //       likes: 0,
    //       timestamp: Date.now()
    //     }
    //   ]
    // }
    // res.render('index', viewModel)

    const viewModel = { images: [] }

    ImageModel.find({}, {}, { sort: { timestamp: -1 } }, function (err, images) {
      if (err) throw err
      viewModel.images = images
      res.render('index', viewModel)
    })
  }
}
