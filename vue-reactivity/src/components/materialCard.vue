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
  border: 6px solid rgb(253, 162, 87);
  margin: 1rem;
}

#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 19%;
  margin: 1rem;
  border: 6px solid rgba(253, 162, 87, 0.329);
  padding: 1rem;
  background-color: rgb(255, 221, 177);
  border-radius: 10px;
}
h1 {
  font-weight: bold;
}
button {
  margin: 0.5rem;
  padding: 0.4rem;
  color: rgb(250, 130, 32);
  border-color: rgb(250, 130, 32);
  background-color: rgba(248, 239, 220, 0.979);
}

#quantityButton {
  display: inline;
  border-radius: 40px;
  padding: 0rem;
  width: 1.9em;
  height: 2.3rem;
}
</style>