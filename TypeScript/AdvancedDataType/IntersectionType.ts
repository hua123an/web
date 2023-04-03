/*交叉类型是将多种类型合并为一种类型。这就可以把现有的多种类型叠加到一起成为一种类型，它包含了
所需的所有类型的特征。交叉类型包括a的类型也包括b的类型，一句话讲就是a和b的交集
* */
interface Person {
    name : string
    age : number
}
interface Student {
    school : string
}
const student : Person & Student = {
    name : '张三',
    age : 26,
    school : "清华大学"
}
//同时交叉类型还可以使用类型别名
interface Person {
    name : string
    age : number
}
interface Student {
    school : string
}
type studentInfo = Person & Student
const student1 : studentInfo = {
    name : '李四',
    age : 26,
    school : "清华大学"
}
