<template>
  <!-- <router-link to="/">Home</router-link> -->
  <FirstComponent title="data" :counter="counter" />
  <SecondComponent message="test12" />
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';

let counter = ref(0);

let intervalId: number | undefined;

onMounted(() => {
  intervalId = setInterval(() => {
    counter.value += 1;
  }, 1000);
});

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped></style>
