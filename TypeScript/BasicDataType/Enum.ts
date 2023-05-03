//Enum值类型是对JavaScript标准数据库的一种补充，
enum Color {red , green, blue}
let FavoriteColor : Color = Color.red


console.log(FavoriteColor);

//枚举对象的下标是从0开始的，但是也可以手动赋值
// @ts-ignore
enum Number {1 = 1, 2 , 3}
//此时修改元素编号，后面的编号会以此更改，在可选范围内都可以随意更改元素编号
// 枚举类型提供了一个便利就是，不管是直接访问对象还是访问其元素编号都可以进行访问，唯一不同的是，当访问元素编号时，数据类型为string类型
let favoritreColor : string = Color[1]
console.log(favoritreColor)