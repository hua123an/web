/*
* 常见的异常，及其捕获方式：
* */
/*1.Eval错误
* 新版本请使用SyntaxError
* */
try {
    SyntaxError("alert('hello,world')")
}catch (error) {
    console.log(error)
}
/*2.范围错误
* RangeError会将在使用合法数字之外的值抛出
* 示例代码：不能将数组的有效位数设置为500位
* */
var sum = 1;
try {
    num.toExponential(500)
    //数无法拥有500个有效数
}catch (error) {
    console.log(error);
}
/*
* 3.引用错误
* 加入引入了未定义的变量，则ReferenceError会抛出
*实例代码：
* */
var x ;
try {
    x = y + 1;
}catch (error) {
    console.log(error);
}
/*4.语法错误
* 出现语法错误时，SyntaxError会抛出
* */
try {
    eval(
        alert("Hello")
    )
}catch (error) {
    console.log(error)
}
/*5.类型错误
* 使用值转换时不在期望值中，TypeError抛出
* 实例代码：
* */
var numm = 1;
try {
    num.toUpperCase()
    //数字无法转大写
}catch (error) {
    console.log(error)
}
/*6.URL错误
* URL函数使用非法字符时，URLError会抛出
* 实例代码：
* */
try {
    decodeURI("%%")
}catch (error) {
    console.log(error)
}



