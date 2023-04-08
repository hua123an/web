//call方法：需要通过函数对象调用，当函数调用call方法时会调用此函数执行，在调用call可以将一个对象指定为第一个参数，则这个对象将成为函数执行时的this，call方法可以将实参在对象之后依次传递
function fn(a , b ) {
    console.log("a = " + a)
    console.log("b = " + b)
    console.log("c = " + this)
}
var obj = {
    name : 'obj',
    sayName : function () {
        console.log(this.name)
    }
}
fn(2 , 3)
fn.call(obj , 2 ,3)
//默认fn函数调用，指向是window对象，也可以使用call调用函数，在调用的时候传入一个对象，这个对象就是this所指向的对象，也就是说，可以指定this的指向，然后从第二个参数开始，实参一次传递
