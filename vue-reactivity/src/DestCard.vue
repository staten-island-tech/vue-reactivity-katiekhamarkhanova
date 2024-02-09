<template>
    <div id="allCards">
        <div id ="card">
            <h1>{{ Destination.name }}</h1>
            <img :src = "Destination.img" alt="">
            <h2>{{ clicked }}</h2>
            <button @click="increment">Click ME</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
    Destination: Object,
});
// Clicker logic
const clicked = ref(0);
function increment() {
    clicked.value++;
}
</script>

<style scoped>
img {
    width: 250px;
    height: 300px;
    object-fit: cover;
}
#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: block;
  width: 23%;
  height: 50%;
}
#allCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem;
}
</style>