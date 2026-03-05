<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter(); // Router 객체를 반환
const goToDetail = (memberId) => {
  // 호출하고자 하는 Route 정보를 전달
  router.push({
    name: "memberDetail",
    params: { id: memberId },
    // query: { keyword: "Hello" },
  });
};
</script>
<template>
  <h1>회원 관리</h1>
  <p><RouterLink :to="{ name: 'main' }">TOP</RouterLink> > 회원 리스트</p>
  <h3>회원 리스트</h3>
  <p>
    신규등록은 <RouterLink :to="{ path: '/member/add' }">여기</RouterLink>를
    클릭
  </p>
  <ul>
    <li v-on:click="goToDetail(33456)">ID가 33456인 영희님</li>
    <li v-on:click="goToDetail(47783)">ID가 47783인 철수님</li>
  </ul>
</template>
