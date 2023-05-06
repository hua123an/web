<script setup>
const em  = defineEmits(['handleEvent'])
function handleEvent () {
    em('handleEvent' , 'child run with parent')
}

</script>

<template>
<div>
    child
    <button @click="handleEvent">run event</button>
</div>
</template>

<style scoped>

</style>