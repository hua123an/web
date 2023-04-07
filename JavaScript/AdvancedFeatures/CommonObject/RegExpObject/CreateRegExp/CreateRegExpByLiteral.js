/*
* 使用字面量创建正则表达式
* */
var reg = /ab/i;
var str = 'abc'
var result = reg.test(str)
console.log(result);
