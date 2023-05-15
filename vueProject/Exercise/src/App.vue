<!--<script setup>-->
<!--import {watch , ref} from "vue";-->
<!--// 创建响应式数据-->
<!--const count = ref(0)-->
<!--const name = ref('jane')-->
<!--const add = () => {-->
<!--  count.value++-->
<!--}-->
<!--const changeName = () => {-->
<!--  name.value = 'huaan'-->
<!--}-->
<!--watch([count , name],-->
<!--    ([newCount , newName],-->
<!--    [oldCount , oldName]) => {-->
<!--  console.log("count变化了" ,[oldCount , oldName] , [newCount , newName])-->
<!--},-->
<!--    {-->
<!--      immediate : true-->
<!--    })-->
<!--</script>-->
<!--<template>-->
<!--  <div>{{count}}</div>-->
<!--  <button @click="add">{{count}}</button>-->
<!--  <button @click="changeName">{{name}}</button>-->
<!--</template>-->
<!--精确监听-->
<!-- <script setup>
import {ref , watch} from "vue";
const state = ref({count : 0})
const changeCount = () => {
  state.value.count++
}
watch(state, 
  () => state.value.count ,
  console.log("age changing!!!")
)
</script>
<template>
  <button @click="changeCount">{{state.count}}</button>
</template> -->
<!-- 父子组组件 -->
<!-- <script setup>
import { ref } from 'vue';
import Soncom from './son-com.vue'
const count = ref(0)
const add = () => {
  count.value++
}
</script>
<template>
<Soncom message="this is father message" :count="count"/>
<h2>this is father template</h2>
<button @click="add">{{ count }}</button>
</template> -->
<!-- son send father -->
<!-- <script setup>
// set function recsive msg
import Soncom from './son-com.vue'
const getMessage = (msg) => {
  console.log(msg);
}
</script>
<template>
  <div>This is father template</div>
  <Soncom @get-message="getMessage"/>
</template> -->
<!-- template injetc -->
<!-- <script setup>
import { onMounted, ref } from 'vue';
import Soncom from './son-com.vue'
// set variable to save ref object
const ref1 = ref(null)
const comRef = ref(null)
// it finish at mounted
onMounted(() => {
  console.log(ref1.value);
  console.log(comRef.value)
})
</script>
<template>
<div ref="ref1">this is a ref </div>
<Soncom  ref="comRef"/>
</template> -->
<!-- privode and inject fucntion -->
<!--<script setup>-->
<!--import { provide, ref} from 'vue';-->
<!--import Soncom from './son-com.vue'-->
<!--// provide date to bottom -->
<!--provide('topdata' , "this is top data")-->
<!--// provide ref onject-->
<!--const count  = ref(0)-->
<!--provide("countData" , count)-->

<!--setTimeout(() =>{-->
<!--  count.value = 10-->
<!--},1000) -->
<!--const add = () =>{-->
<!--    count.value++-->
<!--}-->
<!--provide("changeData" , add)-->
<!--</script>-->
<!--<template>-->
<!--<div class="father">-->
<!--  <h2>top date</h2>-->
<!--</div>-->
<!--<Soncom />-->
<!--</template>-->
