/*接口可以继承其它接口，与类的继承类似，同时还具有多重继承功能
* */
interface Shape {
    color : string ;
}
interface Stroke {
    width : number ;
}
interface Square extends Shape , Stroke {
    length : number
}
let Square = <Square> {};
Square.color = "blue" ;
Square.width = 3000
Square.length = 2000
//在上面代码中，变量Square并不是实现了该接口的类，所以不能使用new实现，只能利用泛型实现
