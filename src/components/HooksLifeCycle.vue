<template>
  <div>
    <p>Przykład demonstrujący hooki cyklu życia w Vue 3.</p>
  </div>
</template>

<script>
export default {
  name: "LifecycleDemo",
  // Hook wywoływany przed tworzeniem instancji komponentu
  // Komponent jest w trakcie tworzenia, ale jeszcze nie został zainicjowany
  beforeCreate() {
    console.log(
      "beforeCreate() wywołane przed utworzeniem instancji komponentu"
    );
  },

  // Hook wywoływany po utworzeniu instancji komponentu
  // Komponent został utworzony i zainicjowany, ale jeszcze nie został zamontowany w DOM
  created() {
    console.log(
      "created() utworzony i zainicjowany komponent ale nie dodany do DOM"
    );
  },

  // Hook wywoływany przed montażem komponentu w DOM
  // Komponent jest gotowy do montażu w DOM, ale jeszcze nie został zamontowany
  beforeMount() {
    console.log(
      "beforeMount() komponent gotowy do zamontowania do DOM ale jeszcze nie został dodany"
    );
  },

  // Hook wywoływany po zamontowaniu komponentu w DOM
  mounted() {
    console.log("mounted() - komponent dodany do drzewa DOM");
  },

  // Hook wywoływany przed aktualizacją komponentu
  // Komponent jest gotowy do aktualizacji, ale jeszcze nie został zaktualizowany
  beforeUpdate() {
    console.log(
      "beforeUpdate() - komponent gotowy do aktualizacji ale jeszcze nie został zaktualizowany"
    );
  },

  // Komponent został pomyślnie zaktualizowany
  updated() {
    console.log("updated() - komponent został zaktualizowany");
  },

  // Hook wywoływany przed zniszczeniem komponentu
  beforeUnmount() {
    console.log("beforeUnmount() - wywołane przed skasowaniem komponentu");
  },

  // Hook wywoływany po zniszczeniu komponentu
  unmounted() {
    console.log("unmounted() - po skasowaniu komponentu");
  },
};
</script>
