<template>
  <!--
        provide/inject pozwala pominąć pośrednie komponenty w przekazywaniu danych.
        W komponencie App używamy metody provide do dostarczenia reaktywnej 
        zmiennej themeColor do komponentów podrzędnych.
    -->
  <div>
    <ProvideInjectMiddleComponent />
  </div>
</template>

<script>
import { ref, provide } from "vue";
import ProvideInjectMiddleComponent from "./ProvideInjectMiddleComponent.vue";

export default {
  name: "ParentComponent",
  components: {
    ProvideInjectMiddleComponent,
  },
  setup() {
    const themeColor = ref("red");

    // przekazujemy dane do komponenetów podrzędnych
    provide("themeColor", themeColor);

    return {};
  },
};
</script>
