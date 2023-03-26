/*接口能够描述JavaScript中对象拥有的各种外形。除了可以描述自带属性的普通对象外，接口也可以描述函数类型。
为了使用接口表示函数类型，需要给接口定义一个调用签名。它就像一个只有参数列表和返回值类型的函数定义。
参数列表里的每个参数都需要名字和类型。
* */
interface IInfo {
    (name : string , age : number) : string
}
let getName1 : IInfo = function (name : string , age : number) : string {
    return '${name}----------${age}';
}
console.log(getName1('me' , 19))