/*在调用函数时，浏览器会传递两个隐含参数
* 1.函数上下文对象：this
* 2.封装实参的对象：arguments
* arguments是一个类数组对象，它可以通过索引操作对象，可以获取长度，在调用函数时，我们所传递的实参都会在arguments中保存，比如：arguments.length可以用来获取实参长度，我们即使不定义形参，也可以通过arguments来使用实参
*它里面有个属性叫做callee，这个属性对应一个函数对象，就是当前正在指向的函数的对象
* */
function fun(a , b) {
    //获取第一个参数
    console.log(arguments[0])
    //获取实参个数
    console.log(arguments.length)
    //查看它的函数对象
    console.log(arguments.callee)
    console.log(arguments.callee == fun)
    //返回布尔值，此时返回的是true
}
fun("Hello" , 'World')