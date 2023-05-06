/*
* JSON数组也类似于JSON对象的值对象，只是将大括号变成了方括号
* */
var person = {
    "array" : ["one" , 1 , 3 , "true"]
}
console.log(person.array[3])