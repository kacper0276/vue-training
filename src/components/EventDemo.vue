<template>
  <div>
    <button v-on:click="doThis('test', $event)">Klik</button>

    <input
      type="text"
      v-model="message"
      v-on:input="updateMessage"
      placeholder="Wpisz coś"
    />

    <label>
      <input type="checkbox" v-model="isChecked" v-on:change="toggleCheckbox" />
      Zaznacz mnie
    </label>

    <select v-model="selectedOption" v-on:change="selectOption">
      <option value="">Wybierz opcję</option>
      <option value="option1">Opcja 1</option>
      <option value="option2">Opcja 2</option>
      <option value="option3">Opcja 3</option>
    </select>

    <input type="text" @keyup.enter="onEnter" />

    <button v-on="{ mousedown: doThis, mouseup: doThis }">
      Więcej eventów
    </button>

    <p>Bieżąca wiadomość: {{ message }}</p>
    <p>Stan checkboxa: {{ isChecked ? "Zaznaczony" : "Niezaznaczony" }}</p>
    <p>Wybrana opcja: {{ selectedOption }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      eventName: "click",
    };
  },
  setup() {
    const message = ref("");
    const isChecked = ref(false);
    const selectedOption = ref("");

    const doThis = (msg: string, event: Event) => {
      console.log(`Wywołano ${event} - ${msg}`);
      console.log(event);
    };

    const updateMessage = (event: Event) => {
      console.log(
        "Wprowadzono tekst:",
        (event.target as HTMLInputElement).value
      );
    };

    const toggleCheckbox = (event: Event) => {
      console.log(
        "Stan checkboxa:",
        (event.target as HTMLInputElement).checked
      );
    };

    const onEnter = (event: Event) => {
      console.log(event);
    };

    const selectOption = (event: Event) => {
      console.log("Wybrana opcja:", (event.target as HTMLSelectElement).value);
    };

    return {
      message,
      isChecked,
      selectedOption,
      doThis,
      updateMessage,
      toggleCheckbox,
      selectOption,
      onEnter,
    };
  },
});
</script>

<style scoped>
/* Stylowanie dla lepszej wizualizacji */
input,
select,
button {
  display: block;
  margin: 10px 0;
}
</style>
