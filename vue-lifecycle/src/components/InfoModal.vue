<script setup>
import ModelLayout from "@/layout/ModelLayout.vue";
const checkFun = () => {
  console.log("성공적으로 처리");
};
const qanFun = () => {
  console.log("문의게시판으로 연결");
};
</script>
<template>
  <ModelLayout>
    <template v-slot:footer>
      <button v-on:click="checkFun()">예</button>
      <button v-on:click="qanFun()">문의하기로</button>
    </template>
    <template v-slot:default>
      <p>관리자에게 문의하세요</p>
    </template>
  </ModelLayout>
</template>
