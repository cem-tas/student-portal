<template>
  <base-card>
    <div class="body">
      <div class="count">
        <p>{{ storeCounter.count }}</p>
      </div>
      <div class="buttons">
        <button @click="storeCounter.increment" id="increment">+</button>
        <button @click="storeCounter.decrement" id="decrement">-</button>
      </div>
      <hr />
      <div class="statement">This count is {{ storeCounter.evenOrOdd }}.</div>
      <hr />
      <div class="editor">
        <h3>Edit count:</h3>
        <input v-model="storeCounter.count" type="number" />
      </div>
    </div>
  </base-card>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>

<style>
* {
  text-align: center;
}

.statement {
  font-size: 3rem;
  font-family: "Arial Narrow Bold", sans-serif;
}

.count p {
  font-size: 5rem;
  font-weight: bold;
  font-family: "Arial Narrow Bold", sans-serif;
}

.buttons button {
  font-size: 4rem;
  border-radius: 5px;
  margin: 0 20px;
  border: 2px solid #000;
}
</style>
