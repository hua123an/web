/*在面向对象编程中，接口是一种规范，它定义了行为和动作的规范，在程序设计中，接口起到一种限制和规范的作用
编程接口和计算机的各种接口相似，接口定义好后，插头满足定义规范，就可以使用
* TypeScript中的接口类似于c#和Java语言中的概念，同时增加了更多灵活的接口，包括：属性、函数、可索引和类等。
在TypeScript中定义函数形参{x , y}
* */
function sum({x , y} : {x : number , y : number}) {
    return x + y;
}
//在上面代码中，当参数属性多的时候就不方便阅读，因此可以用接口的方式来定义
interface Isum {
    x : number ;
    y : number ;
}
function sum1({x , y} : Isum) : number{
    return x + y;
}
//上面代码使用接口的方式，让代码有了更好的可读性