<template>
  <div class="container">
    <!-- <router-link to="/">Home</router-link> -->
    <FirstComponent title="data" :counter="counter" :visible="true" />
    <hr />
    <SecondComponent message="test12" />
    <hr />
    <ForProductList />
    <hr />
    <EventDemo />
    <hr />
    <OtherDirectives />
    <hr />
    <!--
        Sloty: W Vue, sloty umożliwiają tworzenie 
               komponentów z miejscami na zawartość, 
               które mogą być wypełnione przez komponent 
               nadrzędny. Dzięki temu możesz tworzyć 
               bardziej elastyczne i wielokrotnego 
               użytku komponenty.

        Domyślny slot: <slot></slot> jest domyślnym slotem, 
               który będzie wypełniony dowolną zawartością 
               przekazaną przez komponent nadrzędny.

        Sloty nazwane: Możesz również definiować sloty 
               z konkretnymi nazwami, takie jak 
               <slot name="header"></slot>. Aby wypełnić 
               slot nazwany, musisz użyć składni 
               <template v-slot:nazwa> w komponencie nadrzędnym.

        v-slot: Dyrektywa v-slot jest używana w komponencie 
                nadrzędnym do wskazania, która zawartość ma 
                być wstawiona do konkretnego slotu w komponencie 
                podrzędnym. Możesz użyć skróconej składni #nazwa 
                zamiast v-slot:nazwa dla slotów nazwanych.
    -->

    <BaseLayout>
      <!-- Domyślna zawartość dla głównego slotu (main) 
            uwaga nie można odowłać się bezpośrednio do
            domyślnego slotu -->
      <section>
        <h2>Główna treść strony</h2>
      </section>
      <section>
        <h3>Dalsza treść strony</h3>
      </section>

      <!-- Zawartość dla slotu "header" -->
      <template v-slot:header>
        <!-- dodatkowa treść dla header dodana
            na jego koniec -->
        <h5>Nagłówek header</h5>
        <p>Witaj na stronie!</p>
      </template>

      <!-- Zawartość dla slotu "footer" -->
      <template v-slot:footer>
        <p>Dodatkowe informacje w footer</p>
      </template>
    </BaseLayout>
    <hr />
    <ComputedProperties />
    <hr />
    <!-- W komponencie nadrzędnym, używamy dyrektywy 
          v-model do dwukierunkowego wiązania danych 
          z komponentem podrzędnym. Dzięki temu, 
          gdy wartość w komponencie podrzędnym się zmienia, 
          jest ona automatycznie aktualizowana 
          w komponencie nadrzędnym i odwrotnie.
          
          Gdy użyty jest v-model="text" w komponencie nadrzędnym, 
          Vue automatycznie przekazuje wartość text do komponentu 
          podrzędnego jako modelValue i nasłuchuje na zdarzenie 
          update:modelValue w celu aktualizacji wartości 
          text w komponencie nadrzędnym. Czyli modelValue jako
          prop jest przekazywany automatycznie z wartością text.
      -->
    <TwoWayBinding v-model="text" />
    <p>Tekst: {{ text }}</p>
    <hr />
    <ManyTwoWayBinding
      v-model:name="userName"
      v-model:surname="userSurname"
      v-model:accepted="termsAccepted"
    />
    <p>Imię {{ userName }}</p>
    <p>Nazwisko: {{ userSurname }}</p>
    <p>Akceptacja: {{ termsAccepted }}</p>
    <hr />
    <ClassStyleBinding />
    <hr />
    <HooksLifeCycle />
    <hr />
    <Ref />
    <hr />
    <Watcher />
    <hr />
    <AsyncComponent />
    <hr />
    <FallthroughAttributes />
    <hr />
    <ProvideInject />

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import ForProductList from "@/components/ForProductList.vue";
import EventDemo from "./components/EventDemo.vue";
import OtherDirectives from "./components/OtherDirectives.vue";
import BaseLayout from "./components/BaseLayout.vue";
import ComputedProperties from "./components/ComputedProperties.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";
import ManyTwoWayBinding from "./components/ManyTwoWayBinding.vue";
import ClassStyleBinding from "./components/ClassStyleBinding.vue";
import HooksLifeCycle from "./components/HooksLifeCycle.vue";
import Ref from "./components/Ref.vue";
import Watcher from "./components/Watcher.vue";
import AsyncComponent from "./components/AsyncComponent.vue";
import FallthroughAttributes from "./components/FallthroughAttributes.vue";
import ProvideInject from "./components/ProvideInject.vue";

let counter = ref(0);
let text = ref("");

// ManyTwoWayBinding
let userName = ref("");
let userSurname = ref("");
let termsAccepted = ref(false);

let intervalId: number | undefined;

onMounted(() => {
  intervalId = setInterval(() => {
    counter.value += 1;
  }, 1000);
});

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
