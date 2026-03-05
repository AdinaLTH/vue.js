<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">TOP</RouterLink>
    > <RouterLink :to="{ path: '/member/list' }">회원 리스트</RouterLink>
    > 회원 정보 추가
  </p>
  <h3>회원 정보 추가</h3>
  <p>정보를 입력하고 등록 버튼을 클릭해주세요</p>
  <div>
    <div><span>ID</span><input type="text" /></div>
    <div><span>이름</span><input type="text" /></div>
    <div><span>이메일</span><input type="email" /></div>
    <div><span>연락처</span><input type="text" /></div>
    <button type="button">등록</button>
  </div>
</template>
