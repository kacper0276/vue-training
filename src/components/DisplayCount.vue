<template>
  <div>Aktualna liczba: {{ counterStore.count }}</div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>
