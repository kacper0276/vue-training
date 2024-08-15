<template>
  <button @click="decrement">Zmniejsz</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const { decrement } = counterStore;
</script>
