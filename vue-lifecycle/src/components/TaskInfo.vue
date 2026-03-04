<script setup>
import { defineProps } from "vue";
// props: todo { no: 1, task: "Hit the gym", complete: false }
const props = defineProps(["todo"]);

// emit: checked 변경, 삭제요청
const emit = defineEmits(["taskChecked", "delTask"]);

const todoComplete = () => {
  emit("taskChecked", props.todo.no);
};

const delTodo = () => {
  emit("delTask", props.todo.no);
};
</script>
<template>
  <li
    v-bind:class="{ checked: todo.complete }"
    v-on:click.self="todoComplete(todo.no)"
  >
    {{ todo.task }}
    <span class="close" v-on:click.self="delTodo(todo.no)">X</span>
  </li>
</template>
