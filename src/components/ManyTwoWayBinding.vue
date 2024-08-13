<template>
  <div>
    <div>
      <input
        type="text"
        :value="name"
        @input="(event) => $emit('update:name', (event.target as HTMLInputElement).value)"
        placeholder="Wpisz imię"
      />
      <!-- 
                W Vue, $event to specjalna zmienna, która 
                odnosi się do natywnego zdarzenia DOM 
                wywołanego przez użytkownika lub 
                przez przeglądarkę
            -->
    </div>

    <div>
      <input
        type="text"
        :value="surname"
        @input="(event) => $emit('update:surname', (event.target as HTMLInputElement).value)"
        placeholder="Wpisz nazwisko"
      />
    </div>

    <label>
      <input
        type="checkbox"
        :checked="accepted"
        @change="(event) => $emit('update:accepted', (event.target as HTMLInputElement).checked)"
      />
      Akceptuję
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    surname: {
      type: String,
      default: "",
    },
    accepted: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
