<script setup>
import {defineProps} from 'vue'
// defineProps({
//     count : {
//         type : Number,
//         default : 100
//
// },
// const props = defineProps([
//     'name',
//     'nameinfo',
//     'tags'
// ])
// console.log(props.name)
defineProps({
    name : {
        type : String ,
        required : false,
        default : "Petter"
    },
    userinfo : Object,
    tags : Array
})

</script>
<template>
  <div>
      child {{count}}
  </div>
</template>

