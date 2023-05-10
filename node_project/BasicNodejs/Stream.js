var fs = require('fs')
var data = ''
//创建可读流
var readStream = fs.createReadStream('input.txt')
//设置编码格式
readStream.setEncoding('utf-8')
//处理流事件
// data
readStream.on('data' , function (chunk){
    data += chunk
})
//end
readStream.on('end' , function (chunk) {
    console.log(data)
})
//error
readStream.on('error' , function (err) {
    console.log(error.stack)
})
console.log('Successfully!!!')
//写入流
var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> finish、error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");
//管道流    读取一个文件内容并写入到另一个文件
var fs = require('fs')
//创建一个可读流
var readStream = fs.createReadStream('input.txt')
//创建一个可写流
var writeStream = fs.createWriteStream('output.txt')
// 从可读流中读取数据并传给可写流
readStream.pipe(writeStream)
console.log("程序执行完毕")
//链式流 连接输入流到另一个流并创建多个留操作的机制
//压缩文件
var fs = require('fs')
var zlib = require('zlib')
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))
console.log("文件压缩完毕")
//解压文件
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");
