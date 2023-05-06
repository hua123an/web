/*实现类接口
* */
interface Animal {
    name : string ;
    eat() : void ;
}
class Cat implements Animal {
    name : string ;
    constructor(name : string) {
        this.name = name ;
    }
    eat() : void {
        console.log(this.name + "吃饭");
    }
}
class Dog implements Animal {
    name : string ;
    constructor(name : string) {
        this.name = name ;
    }
    eat() : void {
        console.log(this.name + "吃饭");
    }
}
//创建实例对象
var cat = new Cat("小明");
cat.eat();
var dog = new Dog("小红");
dog.eat();