//使用构造方法创建对象
//使用工厂方法创建对象
function createPerson(name , age) {
    //创建新对象
    var obj  = new Object();
    //设置对象属性
    obj.name = name ;
    obj.age = age;
    //设置对象方法
    obj.sayHello = function () {
        console.log(this.name)
    }
    //返回对象
    return obj;
}
//循环输出对象
for (var i = 1 ; i < 1000 ; i++){
    var person = createPerson("person" + i , 18 + i);
    console.log(typeof person);
}
//用构造函数创建的对象我们可以也可以成为累的实例：
function Person(name , age) {
    this.nam = name ;
    this.age = age ;
    this.sayHello = function (){
        console.log(this.name +"hello!")
    };
}
//创建对象
var person1 = new Person('huaan' , 19)
console.log(person1)
//构造函数其实和普通函数差不多，只是调用构造函数时，需要使用new关键词来调用
/*构造函数创建过程：
* 1.调用构造函数，它会立即创建一个新的对象
* 2.将新建对象设置为函数中的this，在构造函数中可以使用this来引用新的对象
* 3.逐步执行函数中的代码
* 4.将新建的对象作为返回值返回
* */
/*
* 构造函数有点类似工厂方法，但是它创建对象和返回对象给我们隐藏了，使用同一个构造函数创建的对象，我们称为一类对象，
* 也将一个构造函数称为一个类。我们将通过一个构造函数创建的对象，称为该类的实例。
* */
/*this指代
* 当以函数调用时，this指的是window
* 当以方法调用时，谁调用方法谁就是this
* 当以构造函数形式调用时，this就是创建的那个对象
* 此时我们可以用instanceof运算符检查一个对象是否是一个类的实例，它返回的是布尔值类型
* 基本语法格式为：
* 对象 instanceof 构造函数
* */
//判断person1是否是person的实例对象
console.log(person instanceof Person)
