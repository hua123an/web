/*toString函数是将当前对象转化为字符串。
该方法属于Object对象，由于所有的对象都继承了Object的对象实例，因此所有对象都可以使用该方法，所有主流浏览器都支持此函数
* */
//使用构造函数创建对象
function person(name , age) {
    this.name = name ;
    this.age = age
}
var Person = new person('zhangsan' , 19)
console.log(Person.toString())
/*JS中的许多对象都重写了该函数，已实现自身功能需要
* 类型                             行为描述
* String                          返回String对象的值
* Number                          返回Number的字符串显示
* Boolean                         返回布尔值类型，true和false
*Object(默认)                      返回[object ObjectName]，其中ObjectName是对象名
* Array                           将Array每个元素转化为字符串，并将他们吧一次连接，两个元素之间用因为逗号作为分隔符进行拼接。
* Date                            返回日期的文本显示
* Error                           返回一个包含相关错误的字符串
* Function                        返回如下格式的字符串，其中functionName是函数名。
*                                 此函数的toString方法被调用：function functionName(){native code}
* */
//字符串
var str = 'huaan'
console.log(str.toString())
//数字
var num = 1389
console.log(num.toString())
//布尔值
var bol = true
console.log(bol.toString())
//Object
var obj = {name : 'zhangsan' , age : 19}
console.log(obj.toString())
//数组(其实可以是说是元组)
var array = ['huaan' , 19 , 2132]
console.log(array.toString())
//日期
var date = new Date(2023 , 4 , 5 , 16 , 7 , 20)
console.log(date.toString())
//Error
var error = new Error("输入有误，请重新输入")
console.log(error.toString())
//函数
console.log(Function.toString())
