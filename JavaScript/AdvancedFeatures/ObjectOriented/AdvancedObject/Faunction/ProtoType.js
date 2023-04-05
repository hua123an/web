//创建原型对象
function Person(name , age) {
    //设置对象属性
    this.name = name ;
    this.age = age ;
}
//在Person的原型对象中添加方法
Person.prototype.sayHello = function () {
    console.log(this.name)
}
var person = new Person("huaan" , 19)
/*原型
* 当创建一个函数时，解析器会给函数中加入一个属性prototype，这个属性对应一个对象，这个对象就是所谓的原型对象，即显式原型，
* 原型对象就相当于一个公共区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。
* 如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它创建的对象都有一个隐含的属性，指向构造函数原型对象，我们可以通过_proto_(隐式原型)来访问该属性。
* 当我们访问对象的一个属性和方法时，它会先在对象自身中寻找，如果有可以直接使用，如果没有就会去原型对象中寻找，如果找到则直接使用
*以后创建构造函数时，我们就可以将全局参数直接写入原型对象中
* */
//创建一个对象
function sum(num1 , num2) {
    return num1 + num2;
}
sum.prototype.setNum = function (num1 , num2) {
    num1 = 10 ;
    num2 = 20 ;
}

