/*原型链继承
* 核心思想：子类型的原型为父元素的一个实例对象
* 基本做法：
* 1.定义父类型构造函数
* 2.给父类型添加方法
* 3.定义子类型的构造函数
* 4.创建父类对象赋值给子类原型
* 5.将子类原型的构造属性设置为子类型
* 6.给子类型添加方法
* 7.创建子类型对象：可以调用父类方法
* */
//定义父类型构造函数
function SuperType(){
    this.supProp = 'super prototype';
}
//给父类型添加方法
SuperType.prototype.showSuperProp = function () {
    console.log(this.supProp)
}
//定义子类构造函数
function SubType () {
    this.subProp = 'sub prototype'
}
//创建父类对象赋值给子类
SubType.prototype = new SuperType();
//将子类型原型的构造函数设置为子类型
SubType.prototype.constructor = SubType;
//给子类型原型中加入方法
SubType.prototype.showSubProp = function () {
    console.log(this.subProp)
}
//创建子类型，调用父类方法
let subType = new SubType();
subType.showSuperProp();
subType.showSubProp();
/*缺点描述：
* 1.原型链继承多个实例的引用类型属性指向相同，一个实例修改了原型属性，另一个实例的原型属性也会被改变
* 2.不能传递参数
* 3.继承单一，一次只能继承一个对象
* */