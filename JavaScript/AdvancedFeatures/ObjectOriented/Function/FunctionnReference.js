//函数调用
//无参函数
var fun = function() {
    console.log("无参调用")
}
//直接调用函数
fun()
//对于有参函数
var sum = function (num1 , num2) {
    var result = num1 + num2
    console.log("num1 + num2 =" +result)
}
//有参调用
sum(10 , 20)