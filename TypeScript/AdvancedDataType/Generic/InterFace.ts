//泛型接口实例如下：
interface IConfigFn <T> {
    (value : T ) : T;
}
function getData <T> (value : T) : T {
    return value;
}
var myData : IConfigFn<string> = getData;
// @ts-ignore
console.log(myData<'20'>)