<script setup>
// composition APi
import { ref, reactive, computed } from "vue";
const info = ref("<strong>https://vuejs.orj</strong>");
const url = ref("https://vuejs.orj");
const isDisabled = ref(true);
const imgAttributes = reactive(
  // 필드명 => 속성이름
  { src: "./src/assets/logo.svg", alt: "vue 기본로고", width: "150px" },
);
</script>
<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="info"></p>
  <p v-text="info"></p>
  <p>vuejs 공식 사이트: {{ info }}</p>
  <hr />
  <h2>일반속성</h2>
  <p><a href="https://vuejs.orj">vue.js사이트</a></p>
  <p><a v-bind:href="url">vue.js사이트</a></p>
  <p><a v-bind:href="url + '/guide/introduction.html'">vue.js사이트</a></p>
  <p><button v-bind:disabled="isDisabled">동의합니다</button></p>
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
</template>
<style></style>
