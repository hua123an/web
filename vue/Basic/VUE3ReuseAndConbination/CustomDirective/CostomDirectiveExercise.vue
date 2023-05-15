<script setup>
const directive = {
  styles : {
    mounted(el , params) {
      console.log(params)
      el.style[params.arg] = params.value
    }
  }
};

const app = Vue.createApp({
  directive,
  data(){
    return {
      color : "red"

    }
  }
})
</script>

<template>
<!--change text color-->
  <div id="app">
    <p>this is test text</p>
  </div>

</template>

<style scoped>

</style>