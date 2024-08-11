<template>
  <!-- <router-link to="/">Home</router-link> -->
  <FirstComponent title="data" :counter="counter" :visible="true" />
  <SecondComponent message="test12" />

  <ForProductList />

  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';
import ForProductList from '@/components/ForProductList.vue';

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
