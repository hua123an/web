/*
* match方法：从一个字符串提取内容
* */
//不分大小写全局匹配字母
var str = 'abc123890dafrf'
var result = str.match(/[a-z]/ig)
console.log(result)