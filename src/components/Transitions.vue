<template>
  <!--
        Transitions w Vue pozwalają na łatwe dodawanie animacji 
        do elementów podczas ich pojawiania się, znikania lub 
        podczas zmiany ich pozycji w DOM. Vue automatycznie 
        dodaje odpowiednie klasy CSS do elementów w różnych 
        etapach animacji, dzięki czemu możemy łatwo definiować 
        style dla tych klas w celu kontrolowania wyglądu animacji.
    -->

  <!--  
        Używamy elementu <transition> do opakowania elementu, 
        który ma mieć animowane przejście. Atrybut name określa 
        nazwę przejścia, która będzie używana do generowania 
        klas CSS dla różnych etapów animacji.
    -->

  <transition name="fade">
    <div v-if="show" class="box"></div>
  </transition>
  <button @click="toggleShow">Pokaż/ukryj</button>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
/* 
        Definiujemy style dla przejścia "fade" 
        W sekcji <style>, definiujemy style CSS dla przejścia "fade". 
        Klasy .fade-enter-active i .fade-leave-active określają style dla 
        całego procesu wejścia/wyjścia. Klasy .fade-enter-from i 
        .fade-leave-to określają początkowe stany animacji, natomiast 
        klasy .fade-enter-to i .fade-leave-from określają końcowe stany animacji.  
        
        Kiedy używasz atrybutu name w dyrektywie transition, Vue generuje odpowiednie 
        nazwy klas CSS na podstawie podanej wartości.

        Dla name="fade", Vue będzie szukać i stosować następujące klasy CSS 
        w odpowiednich momentach animacji:

        fade-enter-active: Klasa stosowana podczas całego procesu wejścia. 
            W tym czasie możesz zdefiniować styl CSS dla trwania i opóźnienia animacji.
        fade-leave-active: Klasa stosowana podczas całego procesu wyjścia.
        fade-enter-from (w Vue 3)  Klasa definiująca początkowy stan animacji wejścia.
        fade-enter-to (w Vue 3)  Klasa definiująca końcowy stan animacji wejścia.
        fade-leave-from (w Vue 3)  Klasa definiująca początkowy stan animacji wyjścia.
        fade-leave-to (w Vue 3)  Klasa definiująca końcowy stan animacji wyjścia.
    */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
