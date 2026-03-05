<script setup>
import { useRoute } from "vue-router";
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">TOP</RouterLink>
    > <RouterLink :to="{ path: '/member/list' }">회원 리스트</RouterLink>
    > 회원 상세 정보
  </p>
  <h3>회원 상세 정보</h3>
  <div>
    <div><span>ID</span>55126</div>
    <div><span>이름</span>세호</div>
    <div><span>이메일</span>seho@wow.com</div>
    <div><span>연락처</span>010-1234-1234</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
