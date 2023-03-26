/*TypeScript支持通过getter和setter来截取对对象成员的访问。它能帮助开发者有效地控制对对象的访问。
在下面的例子中对成员变量fullName的访问是通过存储器访问的，可以在set方法中添加与权限相关的逻辑来控制对内部成员的操作
* */
let passcode = 'password'
class Employee {
    private _fullName : string;
    get fullName () : string {
        return this._fullName
    }
    set fullName (name : string) {
        if (passcode && passcode === 'passcode') {
            this._fullName = name
        }else {
            console.log("授权失败")
        }
    }
}
let employee = new Employee();
employee.fullName = "zhangSan"
if (employee.fullName) {
    console.log(employee.fullName)
}