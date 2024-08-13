<template>
  <div>
    <!--
      Wiązanie klas: W Vue możemy dynamicznie przypisywać klasy 
      do elementów HTML za pomocą dyrektywy :class. W poniższym 
      przykładzie przycisk ma dynamicznie przypisaną klasę na 
      podstawie wartości zmiennej isActive. Jeśli isActive jest 
      true, przycisk otrzymuje klasę btn-active, w przeciwnym 
      razie otrzymuje klasę btn-inactive.
    -->
    <button :class="buttonClasses" @click="toggleActive">Kliknij mnie!</button>

    <!--
      Wiązanie stylów: Podobnie jak w przypadku klas, możemy 
      również dynamicznie przypisywać style do elementów HTML 
      za pomocą dyrektywy :style. W powyższym przykładzie 
      tekst ma dynamicznie przypisany kolor i grubość czcionki 
      na podstawie wartości zmiennej isActive.
    -->
    <p :style="textStyles">Tekst z dynamicznymi stylami</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    // Właściwość obliczeniowa zwracająca obiekt z klasami dla przycisku
    // W przykładzie używamy właściwości obliczeniowych (buttonClasses
    // i textStyles), aby obliczyć, jakie klasy lub style powinny być
    // przypisane do elementów w zależności od wartości zmiennej isActive.
    buttonClasses() {
      return {
        btn: true,
        "btn-active": this.isActive,
        "btn-inactive": !this.isActive,
      };
    },
    // Właściwość obliczeniowa zwracająca obiekt ze stylami dla tekstu
    textStyles() {
      return {
        color: this.isActive ? "green" : "red",
        fontWeight: this.isActive ? "bold" : "normal",
      };
    },
  },
  methods: {
    // Metoda zmieniająca wartość zmiennej isActive
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.btn-active {
  background-color: green;
  color: white;
}

.btn-inactive {
  background-color: grey;
  color: white;
}
</style>
