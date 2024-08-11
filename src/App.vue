<template>
  <div class="container">
    <!-- <router-link to="/">Home</router-link> -->
    <FirstComponent title="data" :counter="counter" :visible="true" />
    <hr />
    <SecondComponent message="test12" />
    <hr />
    <ForProductList />
    <hr />
    <EventDemo />
    <hr />
    <OtherDirectives />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import ForProductList from "@/components/ForProductList.vue";
import EventDemo from "./components/EventDemo.vue";
import OtherDirectives from "./components/OtherDirectives.vue";

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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
