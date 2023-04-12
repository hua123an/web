<!--创建模块化组件时需要将组件配置写入.vue文件中。
文件包括三部分：
1.template:用来组织组件的视图部分(html)
2.script:书写组件逻辑代码(利用js代码，逻辑实现)
3.style:用来定义组件样式(css)
下面以单击组件为例，作为演示
-->
<!--第一部分 定义视图-->
<tamplate>
<div id="app">

</div>
</tamplate>
<!--第二部分 定义逻辑实现-->
<script>
//创建vue实例
const app = Vue.createApp({})
app.component("my-counter" , {
    data(){
        return {
            num : 0
        }
    },
    template : '<button @click="num++">点击了{{num}}次</button>'
})
app.mount("#app")
</script>
<!--第三部分 设置组件样式-->
<style>
button{
    width: 10px;
    height: 20px;
    border: 1px;
    border-radius: 30px;
}
</style>