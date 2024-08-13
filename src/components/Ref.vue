<template>
  <div>
    <p>Wartość licznika: {{ counterValue }}</p>
    <button @click="increment">Zwiększ licznik</button>
  </div>
</template>

<script>
import { ref } from "vue";
// ref pozwala na tworzenie reaktywnych wartości w Vue 3,
// które automatycznie aktualizują DOM, gdy ich wartość
// się zmienia. Jest to jedno z podstawowych narzędzi
// reaktywności w Vue 3

export default {
  // Metoda setup jest nową funkcją wprowadzoną w Vue 3
  // i stanowi punkt wejścia do nowego API składni Composition API.
  // Jest to miejsce, w którym definiujesz reaktywne dane, obliczenia,
  // funkcje i inne elementy logiki komponentu.
  // Jest wywoływana po inicjalizacji komponentu, ale przed utworzeniem
  // jakichkolwiek innych opcji komponentu, takich jak data, computed, methods itp.
  // W setup() Nie ma dostępu do this!
  setup() {
    // Utworzenie reaktywnej referencji do wartości licznika
    // gdy się zmieni wartość to będzie zaktualizowana tylko
    // ta część Virtual DOM komponentu która jest z nim
    // związana. Tak samo działa z zmiennymi w metodzie data()
    const counterValue = ref(0);

    // Funkcja do zwiększania wartości licznika
    const increment = () => {
      counterValue.value++;
    };

    // Zwrócenie reaktywnej referencji i funkcji do szablonu
    return {
      counterValue,
      increment,
    };
  },
};
</script>
