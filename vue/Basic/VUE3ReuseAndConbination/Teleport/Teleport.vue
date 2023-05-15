<!--teleport可以直接操作dom节点 , 将模板渲染到制定的dom节点处-->
<script setup>
import {createApp} from "vue";

const app = createApp({})
app.component("nodal" , {
  template : '<button @click="modalOpen = true">打开全屏Modal(展示在Teleport中)</button><teleport to="#teleport-target"><div v-if="modalOpen" class="modal"></div>这里是一个teleport modal!<button @click="modalOpen = false">关闭</button></teleport>',
  data(){
    return {
      modalOpen : false
    }
  }
})
app.mount("#app")
</script>

<template>
  <div id="app">
    <modal></modal>
  </div>
  <div id="teleport-target"></div>

</template>

<style scoped>

</style>