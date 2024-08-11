<template>
  <!--
        Właściwości obliczeniowe (computed properties) 
        to specjalny typ właściwości w Vue, które są używane 
        do obliczania wartości na podstawie innych reaktywnych 
        zmiennych. Są one "leniwe" przez naturę, co oznacza, 
        że są obliczane tylko wtedy, gdy jedna z ich zależności 
        ulegają zmianie.
    -->
  <div>
    <p>Imię: {{ firstName }}</p>
    <p>Nazwisko: {{ lastName }}</p>
    <p>Imię i nazwisko: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Jan",
      lastName: "Kowalski",
    };
  },
  computed: {
    fullName() {
      // Właściwość obliczeniowa, która zwraca pełne imię i nazwisko użytkownika
      // Gdy jedna z zależności właściwości obliczeniowej (w tym przypadku
      // firstName lub lastName) ulega zmianie, właściwość obliczeniowa jest
      // ponownie obliczana. Jednak jeśli żadna z zależności się nie zmienia,
      // Vue korzysta z wcześniej obliczonej wartości, co czyni właściwości
      // obliczeniowe wydajnymi.
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
