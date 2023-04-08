/*组合继承
* 核心思想：原型链+借用构造函数的组合继承
* 基本做法：
* 1.利用原型链实现对父类对象的方法继承
*2,利用super借用父类型构建函数初始化相同属性
* */
//创建构造函数
function Person (name , age) {
    thia.anme = name ;
    this.age = age;
}
//设置原型对象方法
Person.prototype.setName = function (name) {
    this.anme = name ;
}
//创建子类型，继承构造函数
function Student(name , age , price) {
    //继承父类属性
    Person.apply(this , age , name)
    //创建子类属性
    this.price = price
}
//完善原型链
//将父属性赋值给子类型
Student.prototype = new Person()
//修正constructor属性指向
Student.prototype.constructor = Person
//添加子类私有属性
Student.prototype.setPrice = function (price) {
    this.price = price
}
//创建子类实例对象
var s = new Student('huaan' , 19 , 3000000000)
console.log(s.name , s.age , s.price)
//调用父类子类方法
s.setName('jian')
s.setPrice(2000000)
console.log(s.name , s.age , s.price)
/*缺点描述：
* 父类属性和方法会存在于子类和子类原型对象中，在使用子类创建实例对象时，会出现两份相同的属性和方法
*但是这种继承方式是javaScript中最常见的继承模式
* */