<script setup>
import {useSlots} from "../../../../../Package/vue.global";

const slots =  useSlots()

</script>

<template>
  <div>
      <p>{{slots.default ? slots.default()[0].children : ''}}</p>
      <p>{{slots.msg ? slots.msg()[0].children : ''}}</p>
  </div>
</template>

<style scoped>

</style>