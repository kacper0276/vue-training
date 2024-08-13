<template>
  <div>
    <!-- 
        Przekazujemy atrybuty `type` i `disabled` do komponentu CustomButton 
        Te atrybuty nie są zdefiniowane jako `props` w komponencie CustomButton, 
        więc są traktowane jako atrybuty przepuszczające tzw Fallthrough Attributes
        -->

    <FallthroughAttributesCustomButton type="submit" disabled>
      Wyślij dane na serwer
    </FallthroughAttributesCustomButton>
  </div>
</template>

<script>
import FallthroughAttributesCustomButton from "./FallthroughAttributesCustomButton.vue";

export default {
  components: {
    CustomButton,
  },
};
</script>
