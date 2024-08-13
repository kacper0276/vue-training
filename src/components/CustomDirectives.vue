<template>
  <!--
        Niestandardowe dyrektywy w Vue są używane do wykonywania 
        niskopoziomowych operacji bezpośrednio na elementach DOM. 
        Są one szczególnie przydatne, gdy chcemy wykonać operacje, 
        które nie są bezpośrednio związane z danymi komponentu, 
        takie jak manipulacja atrybutami elementów, dodawanie 
        nasłuchiwaczy zdarzeń itp.
    -->

  <div>
    <input v-focus type="text" />
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      // hook jak DOM jest gotowy
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script>
