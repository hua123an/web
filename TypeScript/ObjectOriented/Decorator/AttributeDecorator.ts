// /*属性修饰器会被应用到属性描述上，可以用来修改、监视或者替换属性值
// * 属性装饰器会在运行时传入两个参数
// * (1)对于静态成员来讲是类的构造函数，用于实例成员来讲是类的原型对象
// * (2)成员的名字
// * */
// //属性修饰器
// //@ts-nocheck
// function log(params : any) {
//     return function (target : any , attr : any) {
//         console.log(target)
//         console.log(attr);
//         target[attr] = params
//     }
// }
// class HttpTool {
//     @log("http://www.baidu.com:)
//         // public url : any | undefined
//         getData () {
//         console.log(this.url)
//     }
// }
// var http = new HttpTool();
// http.getData()