<template>
  <div id="card">
    <img :src="Material.img" :alt="Material.name">
    <h1>{{ Material.name }}</h1>
    <h2> Obtain via: {{ Material.obtainFrom }}</h2>
    <div id="quantitySelect">
      <p>Quantity: {{ quantity }}</p>
      <button id="quantityButton" @click="quantity++">+</button>
    </div>
    <button @click="addToRecipeClick">Add to Recipe</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const quantity = ref(1)
const props = defineProps({
  Material: Object,
});
const emits = defineEmits(['add-to-recipe']);

const addToRecipeClick = () => {
  const data = { material: props.Material, quantity: quantity.value };
  emits('add-to-recipe', data);
}
</script>

<style scoped>
img {
  width: 9rem;
  height: 9rem;
  object-fit: cover;
  border: 2px solid black;
  margin: 1rem;
}

#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 19%;
  margin: 1rem;
  border: 2px solid black;
  padding: 1rem;
}

button {
  margin: 0.5rem;
  padding: 0.2rem;
}

#quantityButton {
  display: inline;
}
</style>