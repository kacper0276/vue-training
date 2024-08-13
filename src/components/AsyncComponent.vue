<template>
  <!--
        W poniżsym przykładzie używamy defineAsyncComponent z Vue 3 do 
        zdefiniowania asynchronicznego komponentu.
        Funkcja import zwraca promise, który zwraca komponent Vue po jego załadowaniu.
        Gdy showComponent jest true (po kliknięciu przycisku), Vue próbuje 
        wyrenderować AsyncChildComponent. Ponieważ jest to asynchroniczny 
        komponent, Vue najpierw ładuje go (za pomocą funkcji import()), 
        a następnie renderuje go. Jeśli komponent został już wcześniej 
        załadowany, Vue używa pamięci podręcznej i nie ładuje go ponownie.
        Takie komponenty przyśpieszają ładowanie aplikacji ponieważ komponenty
        są ładowane tylko gdy są potrzebne.
    -->
  <div>
    <button @click="showComponent = !showComponent">
      Pokaż/ukryj asynchroniczny komonent
    </button>

    <AsyncChildComponent v-if="showComponent" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      showComponent: false,
    };
  },
  components: {
    AsyncChildComponent: defineAsyncComponent(() =>
      import("./AsyncComponentChild.vue")
    ),
  },
};
</script>
