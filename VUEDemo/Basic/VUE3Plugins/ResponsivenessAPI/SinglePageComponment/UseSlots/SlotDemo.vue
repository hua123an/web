<script setup>

import SlotChild from "./SlotChild.vue";

</script>

<template>
  <SlotChild>
      <p>I am a default slot from SlotDemo</p>
      <template #msg>
          <p>I am a msg slot from SlotDemo</p>
      </template>
  </SlotChild>
</template>

<style scoped>

</style>