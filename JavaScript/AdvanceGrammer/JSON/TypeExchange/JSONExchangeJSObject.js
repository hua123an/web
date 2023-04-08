/*
* JSON字符串转化为js对象
* JSON.parse():可以将json字符串转化为js对象，只需要一个json字符串作为参数，此时返回的就是js对象
* */
//定义一个json字符串
var jsonStr = '{"name" : "huaan" , "age" : 19}'
var obj = JSON.parse(jsonStr)
console.log(obj)