/*抽象类，也就是不允许实例化对象的类，它是提供其他类继承的基类
* 用abstract关键词定义抽象类和抽象方法，抽象类中的抽象方法不包括具体实现并且必须在派生类
* (也就是其子类)中实现，abstract抽象方法只能在抽象类中
* */
//动物抽象类，所有动物都会跑，但是每个动物吃的不一样，叫声不一样，吃和叫声来定义的方法就是抽象方法
abstract class Animal {
    name : string ;
    age : number ;
    constructor(name : string , age : number) {
        this.name = name ;
        this.age = age ;
    }
    //构造抽象方法
    abstract eat() : any ;
        run() {
            console.log(this.name+"会跑")
        }
}
//创建子类
class Dog extends Animal {
    constructor(name : string , age : number) {
        super(name , age);
    }
    eat() : any {
        console.log(this.name+"吃")
    }
}
//创建实例化对象
let dog = new Dog("小明", 20);
dog.run();
dog.eat();
//创建子类，猫
class Cat extends Animal {
    constructor(name : string , age : number) {
        super(name , age);
    }
//     实现抽象放阿飞
    eat() : any {
        console.log(this.name+"吃老鼠")
    }
}
//创建猫对象实例
let cat = new Cat('heizi' , 2)
cat.run();
cat.eat();