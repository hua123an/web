/*在某种成都上来讲，void类型和any类型相反，它表示没有任何类型，当一个函数没有返回值时，通常会见到其返回值的类型为void
* */
function warning() : void {
    console.log("This is my warning message.")
}
//声明一个void类型的变量没什么大用，因为有已经存在的null和undefined
let error : void = undefined