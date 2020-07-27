const program = require('commander')
const ora = require('ora')
const printProgramInfo = require('./info')
const datetime = require('./datetime')

// const waitTime = Number(process.argv[3])
// const message = process.argv[5]

program.option('-t, --time <number>', '等待时间（秒）', 3).option('-m, --message <string>', '要输出的信息', 'hello qtzx').parse(process.argv)

setTimeout(() => {
  spinner.stop()
  console.log(program.message)
}, program.time * 1000)

process.on('exit', () => {
  console.log('期待下次再见~')
})

// setTimeout(() => {
//   console.log(message)
// }, waitTime * 1000)

// setTimeout(() => {
//   console.log('hello world')
// }, 3000)

// console.log('当前进程：' + process.pid)
// console.log('当前脚本文件路径：' + __dirname)
// console.log('当前脚本所在目录路径：' + __filename)

// const time = new Date()
// console.log('当前时间：' + time.toLocaleString())

printProgramInfo()
console.log('当前时间：', datetime.getCurrentTime())
const spinner = ora('正在加载中，请稍后...').start()
