/*buffer就是node的一个缓冲区，在未加载完成时，作为数据临时存放地
* 常见的node字节编码：
*ascii                         常见的Ascii编码
*utf-8                         常见的中文编码
* utf16le(ucs2)                小字节编码的unicode字符
* base64                       base64编码
* latin1(binary)               一种把buffer编码成一字节编码的字符串的方式
* hex                          将每个字节编码为两个十六进制字符
*
*
*
*
*
* 常见的buffer类创建接口
* Buffer.alloc                    返回一个指定大小的buffer实例
* Buffer.allocUnsafe(size)        返回一个指定大小但不安全的buffer实例
* Buffer,allocUnsafeSlow(size)
* Buffer.from(array)              返回一个被array的值初始化的新buffer实例(传入的array只能是数字，不然会被0自动覆盖)
* Buffer.from(arrayBuffer , byteOffset , length) 返回一个新建的与给定的ArrayBuffer共享同一内存的Buffer
*Buffer.from(buffer)              复制传入的buffer实例数据，并返回一个新的Buffer实例
* Buffer.from(string , encoding)  返回一个被string的值初始化的新的buffer实例
*
*
*
* */
//创建buffer实例对象
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
//写入缓冲区 buf.write(string[, offset[, length]][, encoding])
let buf = Buffer.alloc(256)
len = buf.write("hello world")
console.log("写入字节" , + len)
//从缓冲区读取数据  buf.toString([encoding[, start[, end]]])
 buf = Buffer.alloc(26)
for (var i = 0 ; i < 26 ; i++){
    buf[i] = i + 97
}
console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
console.log( buf.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde
//将buffer转化为json对象 buf.toJSON()
const buf = Buffer.from([0x1 , 0x2  , 0x3 , 0x4 , 0x5])
const json = JSON.stringify(buf)
console.log(json)
const copy = JSON.parse(
    json , (key , value) => {
        return value && value.type == 'buffer'?
            Buffer.from(value.data) :
            value
    })
console.log(copy)
//缓冲区合并 Buffer.concat(list[, totalLength])
var buf1 = Buffer.from("111")
var buf2 = Buffer.from("www.baidu.com")
var buf3 = Buffer.concat([buf1 , buf2])
console.log("buf3的内容为" + buf3.toString())
// 缓冲区比较 buf.compare(otherBuffer);
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
// 拷贝缓冲区 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
// 插入位置索引从0开始
buf2.copy(buf1, 2);

console.log(buf1.toString());
//缓冲区裁剪 buf.slice([start[, end]]) 裁剪范围左闭右开，直接返回裁剪结果
var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
//缓冲区长度 buf.length
var buffer = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);