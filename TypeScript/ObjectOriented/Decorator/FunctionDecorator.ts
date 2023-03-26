/*方法修饰器会被应用到方法描述上，可以用来监视、修改和替换定义方法
方法修饰器会在运行时传入下列三个参数
(1)对于静态成员来讲是类的构造函数，对于实例成员来讲是类的原型对象
* (2)成员名字
* (3)成员属性描述
* */
//@ts-nocheck
function get(params : any) {                      //params是当前类传递进来的参数
    return function (target : any , methodName : any , desc : any) {
        console.log(target)
        console.log(methodName)
        console.log(desc)
        target.apiUrl = params
        target.run = function () {
            console.log("run")

        }
    }
}
class HttpTool {
    public url : any | undefined
    constructor() {
    }
    @get("http://www.baidu.com" )
    getData (){
        console.log(this.url)
    }
}
var http = new HttpTool();
console.log(http.apiUrl)
http.run()