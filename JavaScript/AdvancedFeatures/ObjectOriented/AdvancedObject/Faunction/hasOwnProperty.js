/*hasOwnProperty
* 此方法为了判断当前对象是否含有该属性或者方法
* 可以使用in运算符完成判断
* */
//新建构造函数
function MyClass (){

}
//为构造函数中加入属性
MyClass.prototype.name = 'huaan'
//创建构造函数实例
var mc = new MyClass()
mc.age = 20

//判断属性
console.log('age' in mc)
console.log('name' in mc)
//in运算符和hasOwnProperty函数的区别：
/*当使用in运算符时，如果对象中没有该属性，就会在原型对象中继续寻找，原型对象中没有才会返回false
* 当使用hasOwnProperty函数是，只会判断当前构造函数的属性中是否有检索属性，没有则会返回false，不会去访问原型对象
* */
console.log(mc.hasOwnProperty('age'))
console.log(mc.hasOwnProperty('name'))