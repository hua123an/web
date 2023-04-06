/*
* subString方法：
* 使用方式和slice类似，参数和slice一样
* 但是需要注意的是，subString不能传入负值，如果传入负值，默认会使用0，而且它还会自动调整参数位置，当第二个参数小于第一个参数时，则会交换位置
* */
var str = 'Hello,World'
var result = srt.substring(1 , 4)
console.log(result)
result.substring(1 , 0)
console.log(result)
