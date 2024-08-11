<template>
  <!-- Sekcja szablonu definiująca strukturę HTML komponentu -->
  <div>
    v-model text: <input :value="inputValue" @input="updateValue" type="text" />
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  computed: {
    inputValue: {
      get() {
        return this.modelValue; // zwraca wartość z nadrzędnego komponentu
      },
      set(value) {
        // emituje zdarzenie update:modelValue z nową wartością
        // nie trzeba subskrybować się na to zdarzenie bo
        // Vue 3 automatycznie robi to za nas
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    updateValue(event) {
      // Aktualizuje inputValue i wywołuje jego setter co powoduje emisje
      // zdarzenia do App i aktualizacje wartości w text
      this.inputValue = event.target.value;
    },
  },
};
</script>
