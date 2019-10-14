'use strict'

var fs = require('fs');

// fs.readFile('hello.txt', 'utf-8', function(err, data) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// })

// try {
//     var data = fs.readFileSync('hello.txt', 'utf-8');
//     console.log(data);
// }catch(err) {
//     console.log(err)
// }

// var data = 'hello, Node.js';

// fs.writeFile('hello.txt', data, function(err) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log('ok')
//     }
// })

// fs.readFile('hello.txt', 'utf-8', function(err, data) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// })

// fs.stat('hello.txt', function(err, stat) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log('isFile:' + stat.isFile());
//         console.log('isDirectory:' + stat.isDirectory());
//         if(stat.isFile()) {
//             console.log('size: ' + stat.size);
//             console.log('birth time:' + stat.birthtime);
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// })

// 打开一个流
var rs = fs.createReadStream('hello.txt', 'utf-8');

rs.on('data', function(chunk) {
    console.log('DATA:');
    console.log(chunk);
})

rs.on('end', function() {
    console.log('END');
})

rs.on('error', function(err) {
    console.log('ERROR: ' + err);
})

// 以流的形式写入文件
var ws1 = fs.createWriteStream('output.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END');
ws1.end();