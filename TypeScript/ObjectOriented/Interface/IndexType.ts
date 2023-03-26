/*索引类型具有一个索引签名，它描述对象索引的类型，还有对应的索引返回值类型
* */
interface SomeArray {
    [index : number] : string;
}
let SomeArray : SomeArray;
SomeArray = ['String1' , 'String2']
let str : string = SomeArray[0];
console.log(str)