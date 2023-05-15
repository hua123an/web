/*Any数据类型是为了那些在编程阶段不知道的数据类型的变量指定一种数据类型。此时，这些值可能来自动态的内容
例如来自用户输入或者来自第三方库。在这种情况下，不希望类型检查器对这些值进行检查而不是直接让它们通过编译阶段的检查，
此时可以使用any数据类型来标记这些变量
* */
let notSure : any = 4        //为指定数据类型的any类型的4
notSure = 'maybe not any type'
notSure = false              //any类型指定之后也可以修改数据类型
/*在对现有代码进行修改，any类型还是有用的，它允许在编译时可选择性地包括或移除一种数据类型检查。
可能会认为Object有类似功能，就像它在其他语言那样。但是Object类型只允许给它赋任意值，而不能够在它上面调用任意方法，即使它真的有这些方法
* */
let botSure : any = 4;
notSure.ifItExists()             //正确，ifItExists方法可以通过编译器检查
notSure.toFixed()                //正确，toFixed方法可以通过编译器检查
let prettySure : Object = 4;
// prettySure.toFixed()              //错误，Object对象没有这个方法
//当我们只知道一部分数据的类型时，any类型也是有用的。例如，有一个数组，它包含了不同数据类型
let list : any = [1, true , "Hello"]
//此时可以继续单独赋值
list[1] = 100