<script setup>

const app = {
  data(){
    return {

    }
  },
  directives : {
    focus: {
      mounted(el) {
        el.focus
        el.styles.backgroundColor = "red"
      }
    }
  }
}
Vue.createApp(app).mount("#app")
</script>

<template>
  <div id="app">
    <p>when the page onload , input element get focus</p>
    <input v-focus>
  </div>

</template>

<style scoped>

</style>