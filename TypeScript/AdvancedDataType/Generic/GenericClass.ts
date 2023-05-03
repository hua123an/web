/*泛型类可以支持不特定的数据类型，要求传入的参数和返回的参数必须一致，T表示泛型，具体是什么类型在调用时才决定
* */
//累的泛型
class MyClass<T>{
    public list : T[] = [];
    add(value : T) : void {
        this.list.push(value)
    }
    min() : T {
        var minNum = this.list[0];
        for (var i = 0 ; i < this.list.length ; i++){
            if (minNum > this.list[0]){
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
// 创建实例化对象
// 数字类型
var m1 = new MyClass<number>();
m1.add(1);
m1.add(2);
m1.add(3);
console.log(m1.min())
// 字符串类型
var m2 = new MyClass <String> ();
m2.add('a');
m2.add('b');
m2.add('c');
console.log(m2.min())
