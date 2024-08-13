<template>
  <div>
    <!-- 
            Używamy komponentu ChildComponent, ale nie przekazujemy 
            do niego żadnych danych 
        -->
    <ProvideInjectChildComponent />
  </div>
</template>

<script>
import ProvideInjectChildComponent from "./ProvideInjectChildComponent.vue";

export default {
  name: "MiddleComponent",
  components: {
    ProvideInjectChildComponent,
  },
};
</script>
