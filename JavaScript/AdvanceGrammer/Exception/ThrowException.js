/*
* 一般情况下可以使用try....catch自动抛出，但是有时try....catch无法抛出。
* 此时，就需要手动抛出，使用throw抛出
* 注意事项：
* 1.throw后面就是我们需要抛出的对象
* 2.只要有异常对象抛出，都会让程序停止执行，如果想继续执行，需要加入try....catch来捕获
* 3.每一个错误类型都可以传入一个参数，表示实际的错误信息
* 4.可以在适当时抛出任意想抛出的异常类型。throw new SyntaxError("语法错误")
* */
/*主动抛出异常
* */

//该函数接收一个数字，返回它的平方
function foo(num) {
    if (typeof num == "number") {
        return num * num;
    }else {
        throw new TypeError("输入了非法字符")
    }
}
console.log(foo(4))
console.log(foo("abc"))
/*
* 主动抛出自定义异常
* */
function MyError(message) {
    this.message = "注意，这是自定义的错误！！！"
    this.name = "自定义名字"
}
MyError.prototype = new MyError();
try {
    throw new MyError("注意，这是自定义错误类型！！！")

}catch (error) {
    console.log(error.message);
}
