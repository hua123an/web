/*接口中的属性和方法可以标记为可选实现的，和c#中的可选属性一样，在一个属性值的后面加上一个？，表示这个属性是可选的
* */
// @ts-nocheck
interface ISum {
    x : number ;
    y? : number ;
}
ISum({x : 0});