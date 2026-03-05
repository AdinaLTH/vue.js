<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();

import { reactive } from "vue";
import MemberDetail from "./MemberDetail.vue";
// 회원정보
const member = reactive({
  // 필드명: 서버와 통신 시 서버에서 제공하는 이름 참조
  id: "",
  name: "",
  email: "",
  phone: "",
});
import { useMemberStore } from "@/stores/member";
const memberStore = useMemberStore();

// const server = "https://jsonplaceholder.typicode.com";
const addMember = async () => {
  // 1) 서버에 등록 요청
  let newId = await memberStore.createMember(member);
  // 2) 페이지 전환: 상세페이지
  router.push({ name: "memberDetail", params: { id: newId } });
  // router.go(-1); // 뒤로가기
};
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
    <div><span>ID</span><input type="text" v-model="member.id" /></div>
    <div><span>이름</span><input type="text" v-model="member.name" /></div>
    <div><span>이메일</span><input type="email" v-model="member.email" /></div>
    <div><span>연락처</span><input type="text" v-model="member.phone" /></div>
    <button type="button" @click="addMember()">등록</button>
  </div>
</template>
