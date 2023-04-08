/*JS对象转为json字符串
* JSON.stringify():将一个js对象转化为json，需要一个js对象作为参数，此时就会返回json字符串
* */
//定义一个js对象
var person = {name : "huaan" , age : 19}
var jsonstr = JSON.stringify(person)
console.log(jsonstr)