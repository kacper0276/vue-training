<template>
  <router-link to="/">Home</router-link>
  <FirstComponent />
  <router-view />
</template>

<script setup lang="ts">
import FirstComponent from '@/components/first-component.vue';
</script>

<style scoped></style>
