//遍历数组
//枚举对象遍历，可以用for .... in语句遍历
//基本语法格式为：for(var 变量 in 对象)
var person = {
    name : 'huaan',
    age : 19
}
for (var personKey in person) {
    var personKey = person[personKey];
    console.log(personKey + ":" + personVal)

}