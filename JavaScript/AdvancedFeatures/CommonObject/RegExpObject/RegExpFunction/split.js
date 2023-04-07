/*
* split方法：将一个字符串拆分成一个数组，可以传递一个正则，根据正则拆分字符串
* */
var str = "abc123abc"
var result = str.split(/[A-z]c/)
console.log(result)