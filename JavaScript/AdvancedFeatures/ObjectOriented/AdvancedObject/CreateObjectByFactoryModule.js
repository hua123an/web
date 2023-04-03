//如果需要创建多个对象，普通方法
var person1 = {
    name : 'jian',
    age : 19,
    sayHello : function () {
        alert(this.name+"hello")
    }
}
var person2 = {
    name : 'hua',
    age : 20,
    sayHello : function () {
        alert(this.name+"hello")
    }
}
var person3 = {
    name : 'an',
    age : 21,
    sayHello : function () {
        alert(this.name+"hello")
    }
}
console.log(person1)
console.log(person2)
console.log(person3)
//这种方式可以创建简单的几个对象，但是对象一多就要很难创建
//此时，我们可以将对象创建的方法写入函数中，需要创建对象时，直接调用函数
//使用工厂方法创建对象
function createPerson (name , age) {
//     创建一个新对象
    var obj = new Object();
    //设置对象及其属性
    obj.name = name
    obj.age = age
//     调用函数时，直接传入name和age参数值
//     设置对象方法
    obj.sayName = function() {
        console.log(this.name)
    }
}
var person1 = createPerson('huaan' , 19)
console.log(person1)
//批量创建对象
function createPerson1 (name , age) {
//     创建一个新对象
    var obj = new Object();
    //设置对象及其属性
    obj.name = name
    obj.age = age
//     调用函数时，直接传入name和age参数值
//     设置对象方法
    obj.sayName = function() {
        console.log(this.name)
    }
//     返回新对象
    return obj;
}
//循环产生新对象
for (var i = 1 ; i < 1000 ; i++){
    var person = createPerson("person" + i , 18 + i)
}