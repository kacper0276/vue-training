<template>
  <div class="calculator">
    <input type="text" v-model="currentInput" readonly />
    <div class="buttons">
      <button
        v-for="button in buttons"
        :key="button"
        @click="handleButtonClick(button)"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
import { evaluate } from "mathjs";

export default {
  data() {
    return {
      currentInput: "",
      buttons: [
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        "0",
        ".",
        "=",
        "+",
        "C",
      ],
    };
  },
  methods: {
    handleButtonClick(button) {
      if (button === "C") {
        this.currentInput = "";
      } else if (button === "=") {
        try {
          this.currentInput = evaluate(this.currentInput).toString();
        } catch (e) {
          this.currentInput = "Błąd";
        }
      } else {
        this.currentInput += button;
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  width: 250px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 15px;
  font-size: 18px;
  border: none;
  background: #f5f5f5;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #e0e0e0;
}
</style>
