/*
* apply方法：和call方法使用类似，都是将一个对象指定为第一个参数，此时这个对象就是函数执行的this，apply方法需要将实参封装到一个数组中统一传递
* */
function fn(a , b) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("fn = " + this)
}
var obj = {
    name : 'obj',
    sayName : function () {
        console.log(this.name);
    }
}
fn(2 , 3)
console.log("==================")
fn.apply(obj , [2 , 3])