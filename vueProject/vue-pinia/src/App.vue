<script setup>
/*
* create pinia
* first : import package form store
* second : create  instance  object
* third : call function from store
*
* */
import { useCounterStore } from '@/stores/counter'
import {onMounted} from "vue";
import {storeToRefs} from "pinia";


const counter = useCounterStore()
onMounted(() => {
  counter.returnThis()
})
// use  deconstructed assignment , can use data and function directly
// data need to use storeToRefs achieve deconstructed assignment
const { count , doubleCount } = storeToRefs(counter)
// but function don't need the function of storeToRefs achieve deconstructed saaignment
const { changeData } = counter
</script>
<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ count }}</div>
  <div>{{doubleCount}}</div>
  <button @click="changeData">{{count}}</button>
  <ol>
    <li v-for="item in counter.list" :key="item.id">{{item.name}}</li>
  </ol>

</template>