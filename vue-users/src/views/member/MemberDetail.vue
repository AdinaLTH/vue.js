<script setup>
import { useRoute } from "vue-router";
const route = useRoute(); // 호출당한 정보
// {name: "memberDetail", params: { id: memberId }}
const memId = route.params.id;
// const search = route.query.keyword;
console.log(memId);

import { ref, onBeforeMount } from "vue";
// 회원 정보
const member = ref({});

// const server = "https://jsonplaceholder.typicode.com";
const findMemberById = async (id) => {
  let info = await fetch(`/fallback/users/${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));

  member.value = info;
};

onBeforeMount(() => {
  findMemberById(memId);
});
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
    <div><span>ID</span>{{ member.id }}</div>
    <div><span>이름</span>{{ member.name }}</div>
    <div><span>이메일</span>{{ member.email }}</div>
    <div><span>연락처</span>{{ member.phone }}</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
