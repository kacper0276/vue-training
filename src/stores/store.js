// npm install vuex@next --save

// Vuex to biblioteka do zarządzania stanem w aplikacjach Vue.js.
// W tym przykładzie stworzymy prostą aplikację do zarządzania listą zadań.

// Importujemy funkcję createStore z biblioteki Vuex.
// Jest to główna funkcja, która pozwala na stworzenie nowego sklepu Vuex.
import { createStore } from "vuex";

// Tworzymy nowy sklep Vuex za pomocą funkcji createStore.
export default createStore({
  // state przechowuje stan naszej aplikacji, czyli dane, które będą
  // współdzielone pomiędzy różnymi komponentami.
  state: {
    // Przykładowy stan, który przechowuje listę zadań.
    tasks: [],
  },
  // mutations to funkcje, które zmieniają stan aplikacji.
  // Wszystkie zmiany stanu powinny odbywać się za pośrednictwem mutacji.
  mutations: {
    // Dodajemy nowe zadanie do listy zadań.
    // state to obecny stan aplikacji, task to argument przekazany do mutacji.
    addTask(state, task) {
      // Dodajemy nowe zadanie do listy zadań.
      state.tasks.push(task);
    },
    // Usuwamy zadanie z listy zadań.
    // taskIndex to indeks zadania na liście, które chcemy usunąć.
    removeTask(state, taskIndex) {
      // Usuwamy zadanie z listy zadań.
      state.tasks.splice(taskIndex, 1);
    },
  },
  // actions to funkcje, które wykonują operacje asynchroniczne lub inne
  // operacje, które nie zmieniają bezpośrednio stanu.
  // Po zakończeniu operacji asynchronicznej, actions mogą
  // commitować mutacje, aby zmienić stan.
  actions: {
    // Dodajemy nowe zadanie.
    // { commit } to destrukturyzacja kontekstu, dzięki czemu mamy
    // bezpośredni dostęp do funkcji commit.
    // task to argument przekazany do akcji.
    addTask({ commit }, task) {
      // Commitujemy mutację addTask, przekazując do niej zadanie.
      commit("addTask", task);
    },
    // Usuwamy zadanie.
    // taskIndex to indeks zadania na liście, które chcemy usunąć.
    removeTask({ commit }, taskIndex) {
      // Commitujemy mutację removeTask, przekazując do niej indeks zadania.
      commit("removeTask", taskIndex);
    },
  },
});
