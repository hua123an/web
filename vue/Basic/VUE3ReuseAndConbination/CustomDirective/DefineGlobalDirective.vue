<script setup>
import {createApp} from "vue";

const app = createApp({});
app.directive("my-directive" , {
  mounted(el) {
    el.focus()
  }
})
app.mount("#app")

</script>

<template>
  <div id="app">
    <p>when page onload , input element get focus</p>
    <input v-focus>
  </div>

</template>

<style scoped>

</style>