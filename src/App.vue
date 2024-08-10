<template>
  <!-- <router-link to="/">Home</router-link> -->
  <FirstComponent />
  <SecondComponent message="test12" />
  <router-view />
</template>

<script setup lang="ts">
import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';
</script>

<style scoped></style>
