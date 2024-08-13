<template>
  <div>Jestem asynchronicznym komponentem!</div>
</template>

<script>
export default {
  name: "AsyncChildComponent",
  mounted() {
    console.log("Komponent załadowany!");
  },
};
</script>
