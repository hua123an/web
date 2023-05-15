/*接口中的属性可以加入刻度标记readOnly，添加可读属性后，表示该属性只能读取不能赋值
* */
interface ReadOnly {
    readonly x : number ;
    readonly y : string ;
}
let p : ReadOnly = {x : 10 , y : "string"};
console.log(p.x,p.y)
// 如果给可读属性赋值，此时会出现报错
