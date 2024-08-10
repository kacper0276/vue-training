<template>
  <p>{{ data }}</p>
  <p>{{ title }}</p>
</template>

<script lang="ts" setup>
 const props = withDefaults(
    defineProps<{
      title?: string
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
</style>
