<template>
  <!--
        Watchers (Obserwator): W Vue, obserwator pozwala na monitorowanie 
        zmian w reaktywnych właściwościach i wykonywanie określonych działań 
        w odpowiedzi na te zmiany. W poniższym przykładzie mamy obserwator 
        dla właściwości text, który monitoruje jej zmiany.

        W momencie, gdy wartość text się zmienia, obserwator jest wywoływany 
        z nową i starą wartością tej właściwości. Wewnątrz obserwatora odwracamy 
        tekst i przypisujemy go do właściwości reversedText.

        Obserwatory są przydatne, gdy chcemy wykonać jakieś działania w odpowiedzi 
        na zmiany w danych, które nie są bezpośrednio związane z renderowaniem. 
        Na przykład w odpowiedzi na nowe dane z serwera je aktualizujemy
        i nastepuje renderowanie nowych danych w komponencie.
    -->
  <div>
    <input v-model="text" />
    <p>Owdrócony tekst: {{ reversedText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      reversedText: "",
    };
  },

  watch: {
    // obserwator dla właściwości text
    text(newVal, oldVal) {
      console.log("newVal:", newVal, "oldVal:", oldVal);
      this.reversedText = newVal.split("").reverse().join("");
    },
  },
};
</script>
