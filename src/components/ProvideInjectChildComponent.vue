<template>
  <!--
        W komponencie ChildComponent używamy metody inject 
        do wstrzyknięcia zmiennej themeColor z komponentu 
        nadrzędnego. Dzięki temu ma on dostęp do tej zmiennej 
        i może ją wykorzystać w swoim szablonie.
    -->
  <div :style="{ color: themeColor }">Tekst w kolorze czerwonym</div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "ChildComponent",
  setup() {
    // Wstrzykujemy zmienną themeColor z komponentu nadrzędnego App.vue
    const themeColor = inject("themeColor");

    return {
      themeColor,
    };
  },
};
</script>
