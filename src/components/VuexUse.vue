<template>
  <div>
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Dodaj zadanie"
      type="text"
    />
    <button @click="addTask">Dodaj</button>
  </div>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}
      <button @click="removeTask(index)">Usuń</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.$store.dispatch("addTask", this.newTask.trim());
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.$store.dispatch("removeTask", index);
    },
  },
};
</script>

<style scoped></style>
