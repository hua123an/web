// /*命名空间：在代码量太大时，为了避免各种变量名冲突，可将相似功能的函数、类、接口等放置在命名空间内，
// 同java的包、.net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间的对象通过export关键词对外暴露
// 命名空间和模块的区别：
// 命名空间是内部模块，主要用于组织代码，避免命名冲突；
// 模块te是外部模块的简称，侧重代码的复用，一个模块里可能有多个命名空间
// * */
// // @ts-nocheck
// namespace A {
//     interfaceAnimal {
//         name : string
//         eat() : void {
//         }
//         export class Dog implements Animal {
//             name : string
//             constructor(theName : string) {
//                 this.name = theName
//             }
//             eat( ) : void {
//                 console.log( this.name + "吃狗粮" )
//             }
//         }
//         export class Cat implements Animal {
//             name : string
//             constructor(theName : string) {
//                 this.name = theName
//             }
//             eat() : void {
//                 console.log(this.name + "吃猫粮")
//             }
//         }
//     }
// }
// var cat = new A.Cat();