//创建一个简单的js对象
//第一种方式
let person = new Object();
person.name = "huaan"
person.age = 19
console.log("名字:"+person.name+"年龄："+person.age);
//第二种方式(对象创建方法)
let person = {
    name : 'huaan',
    age :19
}
console.log("名字："+person.name+"年龄"+person.age);