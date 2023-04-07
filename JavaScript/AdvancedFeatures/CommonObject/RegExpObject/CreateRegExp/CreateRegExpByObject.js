//使用对象创建正则表达式
var reg = new RegExp("正则表达式","匹配模式");
/*
* 匹配模式：
* i : 忽略大小写
* g : 全局匹配模式
* ig : 全局匹配且忽略大小写
* */
var reg1 = new RegExp("ab" , 'i')
var str= "abc"
var result = reg1.test(str)
console.log(result)