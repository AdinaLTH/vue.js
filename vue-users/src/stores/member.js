import { ref, computed } from "vue";
import { defineStore } from "pinia";
const server = "https://jsonplaceholder.typicode.com";
export const useMemberStore = defineStore(
  "member",
  () => {
    // state
    // 전체 회원 정보
    const members = ref([]);
    // 선택한 회원 정보
    const member = ref({});
    // getters
    // 전체 회원 수
    const count = computed(() => {
      return members.value.length;
    });

    // action
    // 서버에서 전체 회원 정보 가져오기
    const findMemberList = async () => {
      const list = await fetch(`${server}/users`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      members.value = list;
    };
    // 서버에서 지정한 회원의 상세정보 가져오기
    const findMemberById = async (memberId) => {
      let info = await fetch(`${server}/users/${memberId}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      member.value = info;
    };
    // 서버에서 회원 정보 등록하기
    const createMember = async (memberInfo) => {
      let info = await fetch(`${server}/users`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(memberInfo),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
      return info.id;
    };

    return {
      members,
      member,
      count,
      findMemberList,
      findMemberById,
      createMember,
    };
  },
  {
    persist: true, // 상태 자동 저장 활성화
  },
);
