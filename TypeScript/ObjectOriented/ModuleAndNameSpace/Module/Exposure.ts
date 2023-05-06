/*
* 模块化暴露
* 方法一：分别暴露
* */
// @ts-nocheck
//方式一：分别暴露
export let school = "北京大学"
export function study() {
    console.log("学习 TypeScript" )
}
//方法二：统一暴露
let school = "北京大学"
function search() {
    console.log("研究技术" )
}
export { school , search}
//方法三：默认暴露
export default {
    school : "北京大学",
    search : function () {
        console.log("研究技术")
    }
}