/*使用函数对象来创建一个函数*
* */
var myFunction = new Function("写入执行语句");
//使用函数声明来创建一个函数
function fun() {
    console.log("这是我的第二个函数")
}
//使用函数表达式创建一个函数
var myfunction = function() {
    console.log("这是我的第三个函数")
}
