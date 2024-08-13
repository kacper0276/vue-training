<template>
  <!--
        Composables pozwalają na tworzenie wielokrotnie używanych 
        funkcji i logiki, które można łatwo importować i wykorzystywać 
        w różnych komponentach, co prowadzi do czystszego 
        i bardziej modularnego kodu.

        W komponencie CounterComponent.vue importujemy i używamy 
        Composable useCounter. Dzięki temu mamy dostęp do zmiennej 
        count oraz funkcji increment i decrement, które możemy 
        wykorzystać w szablonie.
    -->
  <div>
    <p>Wartość licznika {{ count }}</p>

    <button @click="increment">Zwiększ</button>
    <button @click="decrement">Zmniejsz</button>
  </div>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  setup() {
    const { count, increment, decrement } = useCounter();

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
