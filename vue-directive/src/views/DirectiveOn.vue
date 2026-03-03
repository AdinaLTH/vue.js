<script setup>
import { ref } from "vue";
const randValue = ref(0);
const onClickFunc = () => {
  randValue.value = parseInt(Math.random() * 100);
};
</script>
<template>
  <h3>On 디렉티브 기본</h3>
  <button type="button" v-on:click="onClickFunc">클릭</button>
  <p>결과: {{ randValue }}</p>
</template>
