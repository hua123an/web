/*
* slice方法：可以指定截取字符串内容，不会影响原字符串，而是将截取的字符串返回
* 参数：
* 第一个参数：开始位置的索引
* 第二个参数：结束位置的索引(不包括结束位置)
* 也可以传递一个负数，也就是从后面开始计数
* */
var srt = "Hello,World"
var result = str.slice(0 , 5)
console.log(result)
result = str.slice(1 , -1)
