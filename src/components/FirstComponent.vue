<template>
  <p>{{ data }}</p>
  <p>{{ title }}</p>
  <p class="counter">Stan licznika: {{ counter }}</p>
</template>

<script lang="ts" setup>
 const props = withDefaults(
    defineProps<{
      title?: string,
      counter?: number
    }>(),
    {
      title: 'Default Title'
    }
  );

  const { title } = props;

  const data = 'Test';
</script>

<style scoped>
p {
  color: red;
}

.counter {
  color: aquamarine;
}
</style>
