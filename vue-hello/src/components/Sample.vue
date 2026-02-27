<template>
  <h3>Sample Page</h3>
  <p>이름은 {{ name }}</p>
  <p>카운트는 {{ count }}</p>
  <p>원의 반지름은 {{ data.radius }} 원의 너비 {{ area }}</p>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

// data 선언
const name = ref("홍길동"); // 반응형 변수
const count = ref(0);
// 객체 반응형
const data = reactive({ PI: 3.14, radius: 3, area: 0 }); // 변경 ->
// 계산된 속성
const area = computed(() => {
  return data.PI * data.radius * data.radius;
}); // 계산된 속성

setInterval(() => {
  count.value += 1;
  data.radius = Math.ceil(Math.random() * 10);
  // data.area = data.PI * data.radius * data.radius;
}, 3000);

setTimeout(() => {
  name.value = "Hong";
}, 3000);
</script>
