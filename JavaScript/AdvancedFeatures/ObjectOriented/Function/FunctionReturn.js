//函数返回值
var person = {
    name : 'huaan',
    age : 19
}
let fun = function() {
    return person.name
}
//在函数中加入return时，会返回return后面的值，如果return后面不加任何值，此时返回的值为undefined，如果函数中不写return，则也会返回undefined，return后可以跟任何类型的值
function sum(num1 , num2) {
    if (num1 == num2) {
        return 'yes'
}else {
    return 'no'
}
}
var result = sum(10 , 20)
console.log(result)