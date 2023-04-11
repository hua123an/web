/*在TypeScript中实现继承可以使用extends关键词，一旦实现继承，子类就拥有了父类的属性和方法，
而在执行过程中，首先从子类开始查找，如果有，就使用，如果没有，就去父类中查找。类的继承只能是单向继承，也就是只能子承父类。
* */
//定义父类
class Parent {
    name : string;
    age : number;
//     构造函数，实例化属性
    constructor(name : string , age : number) {
        this.name = name
        this.age = age
    }
//     父类方法
    run() : void {
        console.log("我叫"+this.name+",'我今年'"+this.age+"岁了！")
    }
}
//创建父类实例对象
const p = new Parent("zhangsan", 10);
p.run()

//定义子类
class Child extends Parent{
//     添加新属性
    phone : number
//     构造函数，创建实例对象
    constructor(name : string , age : number , phone : number) {
       super(name , age)
        this.phone = phone
    }
//     子类方法
    speak () : void {
        console.log(this.phone)
    }
//     重写父类方法
    run() : void {
        console.log("我叫" + this.name + ",'我今年'" + this.age + "岁了！")
    }
}
//创建子类实例对象
let child = new Child("lisi" , 20 , 15399341569)
child.run()
child.speak()