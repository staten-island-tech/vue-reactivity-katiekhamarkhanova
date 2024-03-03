<template>
  <div id="card">
    <img :src="Material.img" :alt="Material.name">
    <h1>{{ Material.name }}</h1>
    <h2> Obtain via: {{ Material.obtainFrom }}</h2>
    <div id="quantitySelect">
      <p>Quantity: {{ quantity }}</p>
      <button id="quantityButton" @click="quantity++">+</button>
    </div>
    <button @click="addToRecipe(Material, quantity)">Add to Recipe</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '/src/store.js'

const quantity = ref(1)
const props = defineProps({
  Material: Object,
});

const addToRecipe = (material) => {
  store.increment(material, quantity.value);
};
</script>

<style scoped>
img {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border: 6px solid rgb(253, 162, 87);
  margin: 1rem;
  border-radius: 10px;
}

#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 19%;
  margin: 1rem;
  border: 8px solid rgba(253, 162, 87, 0.377);
  padding: 1rem;
  background-color: rgb(255, 221, 177);
  border-radius: 10px;
}
h1 {
  font-weight: bold;
}
button {
  margin: 0.3rem;
  padding: 0.6rem;
  color: rgb(250, 130, 32);
  border-color: rgb(250, 130, 32);
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  border-radius: 30px;
}

#quantityButton {
  border-radius: 40px;
  padding: 0rem;
  width: 1.9em;
  height: 2.3rem;
}
</style>