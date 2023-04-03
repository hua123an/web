//This对象
/*
* 解析器在调用函数每次都会向函数传递一个隐含的参数，
* 这个隐含参数就是一个对象，这个对象就被我们成为函数执行的上下文对象，根据函数的调用方式不同的对象：
* 以函数的形式调用时，this永远都是window
* 以方法调用时，this就是调用方法的那个对象
* */
//创建一个全局变量
var name = "huaan";
//创建一个函数
function fn() {
    console.log(this.name)
    //此时的this.name指的就是那个全局变量
}
//创建一个带函数的对象
var person  = {
    name : 'jian',
    age : 19,
    sayName : fn
}
obj.sayName()
//此时obj.sayName调用的name并不是那个全局变量，而是对象属性里面的name