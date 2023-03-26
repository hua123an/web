// /*类修饰器是普通修饰器，无法传递参数*/
//
// //@ts-nocheck
// function logClass(params: any) {
//     console.log(params)    //params是当前类
//     params.prototype.apiUrl = "apiUrl是动态扩展的属性"
//     params.prototype.run = function () {
//         console.log("run是动态扩展方法")
//     }
// }
//
// // @ts-ignore
// @logClass
// class HttPTool {
//
// }
//
// var http: any = new HttPTool();
// console.log(http.apiUrl)
// http.run()
//
// // 类装饰器：装饰器工厂(可传参)
// function logClass(params: string) {
//     return function (target: any) {
//         console.log(target)
//         console.log(params)
//         target.prototype.apiUrl = params
//     }
// }
//
// @logClass("Http://www.baidu.com:)
// class HttpTool {
// }
//
// var http: any = new HttpTool()
// console.log(http.apiUrl)
