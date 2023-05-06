<script setup>
import {reactive , ref} from "vue";
let sonNum = ref(0)
let sonName = reactive({
    name : 'ali'
})
defineExpose({
    sonNum,
    sonName
})
</script>

<template>
  <div class="card">
      child
  </div>

</template>

<style scoped>

</style>