<template>
  <!-- 
      Główny element korzenia komponentu (button) 
      otrzymuje wszystkie atrybuty przepuszczające 

      Komponent CustomButton nie definiuje żadnych props, 
      więc wszystkie atrybuty przekazane do niego są traktowane 
      jako atrybuty przepuszczające.  
    -->
  <button>
    <slot></slot>
    <!-- w miejsce slot wejdzie tekst "Wyślij dane na serwer" -->
  </button>
</template>

<script>
export default {
  name: "FallthroughAttributesCustomButton",
};
</script>
