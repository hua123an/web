<script setup>
import Counter from '/VUEDemo/Basic/VUE3Plugins/ResponsivenessAPI/SinglePageComponment/DefineProps/PropDemo.vue'
import {ref} from "vue";
let num = ref(100)

</script>

<template>
  <p>parent</p>
  <Counter :count="num"></Counter>
</template>

