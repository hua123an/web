/*参数装饰器会在运行时当作函数被调用，可以使用参数书装饰器为类的原型增加一些元素数据
* (1)对于静态成员来讲是类的构造函数，对于实例对象来讲是类的原型对象
* (2)方法的名字
* (3)参数在函数参数列表中的索引
* */
// @ts-nocheck
function logParams (params : any) {
    return function(target : any , methodName : any , paramsIndex : any) {
        console.log(target)
        console.log(methodName)
        console.log(paramsIndex)
        target.apiUrl = params
}
}
class HttpTool {
    getData(@logParams('10000') uuid : any){
        console.log(uuid);
    }
}
var http : any = new HttpTool();
http.getData(123)
console.log(http.apiUrl)