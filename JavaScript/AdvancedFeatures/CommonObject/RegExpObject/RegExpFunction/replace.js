/*
* replace方法：将指定字符串替换为指定字符串，默认只会替换第一个，可以设置全局匹配，设置全局替换
* */
var str= 'abc123abc'
var result = str.replace(/abc/gi, '123')
console.log(result)
