/*元组类型表示一个已知元素数量和类型的数组，个元素类型不必相等。例如：可以定义一对值分别为string和number类型的元组
当访问一个已知索引的元素就会得到正确类型
当访问一个越界的元素时就会使用到联合类型替代
* */
let x : [string , number]
x = ['hello' , 10]         //此时会正确输出
// x = [10 , 'hello']        //此时就会报错，因为数据类型不对应
//访问元组
console.log(x[0].substr(1))           //此时提示ok
// console.log(x[1].substr(1))              //此时会报错，因为number类型无此方法
//当访问一个越界元素时就会出现联合类型替代
// @ts-ignore
x[1] = 'world'        //正确，字符串可以给(string | number)类型赋值
// @ts-ignore
console.log(x[5].toString())    //正确，string和number类型都有toString方法
// @ts-ignore
x[6] = true          //由于上面定义的类型为(string | number)类型，无法写入boolean类型
