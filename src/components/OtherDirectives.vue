<template>
  <div>
    <div v-text="message"></div>

    <div v-html="rawHtml"></div>

    <div v-pre>
      {{ Nieprzetworzony element }}
    </div>

    <div v-once>
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: "To jest wiadomość",
      rawHtml: "<span style='color: red'>To jest HTML </span>",
    };
  },
};
</script>
