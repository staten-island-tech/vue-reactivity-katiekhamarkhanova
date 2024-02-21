<template>
        <div id="card">
            <h1>{{ Ingredient.name }}</h1>
            <img :src = "Ingredient.img" alt="">
            <button>Add to Recipe</button>
        </div>
</template>

<script setup>
const props = defineProps({
    Ingredient: Object,
});
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
  width: 20%;
  margin: 1rem;
}
button {
  margin: 1rem;
}
</style>