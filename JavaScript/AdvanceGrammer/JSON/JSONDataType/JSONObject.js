/*
* json中的值可以是对象，也可以构造一个对象，但是需要遵守JSON对象规则
* */
//构造函数创建JSON对象
var person = {
    "name" : "huaan" ,
    "age" : 19 ,
    "class" : "ruanjian2132"
}
console.log(person.class)
//使用值创建对象
var person = {
    "employee" : {
        "name" : "huaan" ,
        "age" : 19
    },

    "student" : {
        "name" : "jian" ,
        "age" : 19
    }
}
console.log(person.employee.age)
console.log(person.student.age)