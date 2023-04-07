/*
* search方法：搜索字符串中是否含有指定内容，如果搜索到指定内容，就会返回第一次的索引，如果没有则返回-1，它可以接受一个正则作为参数，根据正则去检索字符串，search只能查找一个，即使设置全局匹配也不行
* */
var str= 'abc123abc'
var result = str.search(/abc/)
console.log(result)