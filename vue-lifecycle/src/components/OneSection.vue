<script setup>
import { defineProps, onBeforeMount } from "vue";
// props: ReadOnly 프로퍼티
const props = defineProps(["title", "content"]);

onBeforeMount(() => {
  // 주의: <script> 밑에선 변수를 통해서 props에 접근 title x props.title o
  console.log(props.title);
});
</script>
<template>
  <section class="box">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <p><button type="button">임의값 생성</button></p>
  </section>
</template>
<style scoped>
section {
  border: 3px solid olivedrab;
  margin: 10px;
}
</style>
