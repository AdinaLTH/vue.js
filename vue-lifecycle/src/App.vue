<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>You did it!</h1>
  <p>
    <RouterLink to="/watch">Watch</RouterLink>
    |
    <RouterLink to="/hook">Hook</RouterLink>
    |
  </p>
  <RouterView />
</template>

<style scoped></style>
