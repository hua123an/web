// @ts-nocheck        //忽略全文检查
//@ts-ignore         //忽略单行检查
/*@ts-check         //取消忽略全文*/
/*联合类型既可以是A也可以是B，伪代码就是A | B
* */
var exericse : string | number | boolean = '1'
exericse = 12
exericse = true
//下面定义一种由字面值组合成的一个新的联合类型
type WorkDays = | 1 | 2 | 3 | 4 | 5 ;
let days : WorkDays = 1;
days = 5;
days = 6;          //此时会报错，此时超界了
//字面量联合类型的形式与枚举类型有些相似，所以，如果仅使用数字，则可以考虑是否使用具有表达式的枚举类型
