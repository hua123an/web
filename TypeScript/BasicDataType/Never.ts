/*never类型是表示那些永不存在的值类型。例如，never类型是那些爬出异常或根本不会存在返回值的函数表达式或箭头表达式的返回值类型；
变量也可能是never类型，即他们被永不为真的类型保护所约束。
* never类型是任何类型的子类型，也可以赋值给任何类型，然而，没有类型是never的子类型或可以赋值给never类型(除了never本身之外)。即使any也不可以赋值给never
* */
//返回never的函数必须存在无法达到的终点
function error(message : string)  : void {
    throw new Error(message)
}
//推断的返回值类型是never
function fail() {
    return error("Something failed")
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() : never {
    while(true){

    }

}
