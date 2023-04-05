/*
* js拥有垃圾回收机制，会自动从何内存中销毁垃圾对象，我们不需要也不能进行垃圾回收操作，我们需要将不再使用的对象设置null即可
* */
//构造对象
function person (name , age) {
    this.name = name ;
    this.age = age ;
}
//创建实例对象
var p1 = new person('huaan' , 19 );
p1 = null;