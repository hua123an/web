/*接口的作用：限制接口实现对象严格按照接口定义的规划来进行赋值，所以使用接口可以帮助开发者进行检查
* */
interface ISum {
    x : number ;
    y : number ;
}
// 检查函数
function create(config : ISum) : void {
}
//检查对象
create({x : 1 , y : 2} as ISum)
//在JavaScript中这段代码并不会出现bug，因为对于对象当传进一个未知属性时并不是错误，虽然可能会引发潜的bug，但是在TypeScript中这个错误非常明显，编译器并不会通过编译，除非显式地使用类型断言
