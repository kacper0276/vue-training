<template>
  <!--
        W sekcji <template>, używamy elementu <transition-group> do opakowania 
        listy elementów. Atrybut name określa nazwę przejścia, która będzie 
        używana do generowania klas CSS dla różnych etapów animacji. 
        Atrybut tag określa rodzaj elementu, który zostanie wyrenderowany 
        jako kontener dla listy (w tym przypadku ul).
        Używamy elementu <transition-group> do opakowania listy elementów 
    -->
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </transition-group>

    <button @click="addItem">Dodaj element</button>
    <button @click="removeItem">Usuń element</button>
  </div>
</template>

<script>
export default {
  // Definiujemy listę elementów oraz metody do dodawania
  // i usuwania elementów z listy.
  data() {
    return {
      nextId: 4,
      items: [
        { id: 1, text: "Element 1" },
        { id: 2, text: "Element 2" },
        { id: 3, text: "Element 3" },
      ],
    };
  },
  methods: {
    addItem() {
      this.items.push({ id: this.nextId++, text: `Element ${this.nextId}` });
    },
    removeItem() {
      this.items.pop();
    },
  },
};
</script>

<style>
/* 
        Definiujemy style dla przejścia "list" 
        W sekcji <style>, definiujemy style CSS dla przejścia "list". 
        Klasy .list-enter-active i .list-leave-active określają style 
        dla całego procesu wejścia/wyjścia. Klasy .list-enter-from 
        i .list-leave-to określają początkowe stany animacji, 
        natomiast klasy .list-enter-to i .list-leave-from 
        określają końcowe stany animacji.
    */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
