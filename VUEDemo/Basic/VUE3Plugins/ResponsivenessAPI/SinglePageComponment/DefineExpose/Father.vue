<script setup>
import Child from "./Child.vue";
import {ref} from "vue";
function getChildData(){
    console.log(childRef.value.sonName)
    console.log(childRef.value.sonName.name)
}
</script>

<template>
  <child ref="childRef"></child>
  <button @click="getChildData">receive</button>

</template>

<style scoped>

</style>