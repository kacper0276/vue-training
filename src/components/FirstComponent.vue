<template>
  <p v-if="visible && counter !== 5">{{ data }}</p>
  <p v-else-if="visible && counter === 5">Counter 5</p>
  <p v-else>Visible na false</p>

  <h4 v-show="visible">v-show zawsze w dom i zmienia tylko display</h4>

  <p>{{ title }}</p>
  <p class="counter">Stan licznika: {{ counter }}</p>
</template>

<script lang="ts" setup>
 const props = withDefaults(
    defineProps<{
      title?: string,
      counter?: number,
      visible: boolean
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
