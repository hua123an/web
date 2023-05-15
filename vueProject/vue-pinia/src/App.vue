<script setup>
import {useCounterStore} from "@/stores/counter";
const counter = useCounterStore()
console.log(counter)
</script>

<template>
  <button @click="counter">{{counter.count}}</button>

</template>

<style scoped>

</style>
