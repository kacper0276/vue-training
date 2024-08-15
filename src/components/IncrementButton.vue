<template>
  <button @click="increment">Zwiększ</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const { increment } = counterStore;
</script>
