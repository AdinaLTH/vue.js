<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>You did it!</h1>
  <p>
    <RouterLink to="/watch">Watch</RouterLink> |
    <RouterLink to="/lifecycle">Lifecycle</RouterLink> |
    <RouterLink to="/parent">Parent</RouterLink> |
  </p>
  <RouterView />
</template>

<style scoped></style>
