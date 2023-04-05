/*使用构造函数继承
*核心思想：使用.call和.apply将父类构造函数引入子类函数，使用父类构造函数增强子类实例，等同于复制父类实例给子类
*基本做法：
* 1.定义父类构造函数
* 2.定义子类构造函数
* 3.给子类型的原型添加方法
* 4.创建子类对象然后调用
* */
//定义父类构造函数
function SuperType (name) {
    thia.name = name;
    this.showSupperName = function () {
        console.log(this.name)
    }
}
//定义子类构造函数
function SubType (name , age) {
    //继承父类属性
    SuperType.call(this , name)
    // SuperType.apply(this , name)
    this.age = age;
}
//给子类型的原型对象添加方法
SubType.prototype.showSubInformation = function () {
    console.log(this.name , this.age)
}
//创建子类对象
var sub = new SubType('huaan' , 20)
//调用方法
subType.showSupperName()
subType.showSubInformation()
console.log(sub.name , sub.age)
/*缺点描述：
* 1.只能继承父类的属性和方法，不能继承原型对象的属性和方法
* 2.无法实现构造函数的复用，每个子类都有父类函数的副本，代码会臃肿
* */
