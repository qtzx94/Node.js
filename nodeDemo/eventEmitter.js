const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

// 监听connect事件，注册回调函数
emitter.on('connect', function (username) {
  console.log(username, '已连接')
})

// 触发connect事件，并加上一个参数
emitter.emit('connect', 'qtzx94')
