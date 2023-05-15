<!-- father send son -->
<!-- son template -->
<!-- <script setup>
import { defineProps } from 'vue';
const props = defineProps({
    message : String,
    count : Number
})
console.log(props)
</script>
<template>
<div class="son">
    <h2>This is son template</h2>
</div>
<div>
    father template send message{{ meaage }}
</div>


 -->

<!-- </template> -->
<!-- son send father -->
<!-- <script setup>
import defineEmits from 'vue'
// set fucntion  emut send data
const emit = defineEmits(['get-message'])
const sendMsg = () => {
    emit('get-message' , 'this is son message')
}
</script>
<template>
<div class="son">
    This is son template
    <button @click="sendMsg">emit custom event</button>
</div>
</template> -->
<!-- <script setup>
import { ref } from 'vue';
import { defineExpose } from 'vue';
const name = ref('test-name')
const changeName = () => {
    name.value = "huaan"
}
// change attribute can visit
defineExpose({
    name,
    changeName
})
</script>
<template>
    <div>{{ name }}</div>
    <button @click="changeName">name</button>
</template> -->
<!--<script setup>-->
<!--import { inject } from 'vue';-->

<!--const message = inject("topdata")-->
<!--const count = inject("countData")-->
<!--const change = inject("changeData")-->
<!--</script>-->
<!--<template>-->
<!--<div>bottom data<br>-->
<!--    data from top : {{ message }}-->
<!--</div>-->
<!--<p>{{ count }}</p>-->
<!--<button @click="change">change data</button>-->
<!--</template>-->