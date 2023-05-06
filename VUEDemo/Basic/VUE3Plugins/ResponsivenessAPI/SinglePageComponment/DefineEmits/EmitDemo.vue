<script setup>
import Counter from "../DefineProps/Counter.vue";
const showData = (data) => {
    console.log(data)
}
</script>
<template>
  <p>parent</p>
  <Counter @handleEvent="showData"></Counter>

</template>

<style scoped>

</style>