<template>
  <div id="materialInRecipe">
    <img :src="recipeItem.img" :alt="recipeItem.name">
    <div id="textContainer">
      <h1>{{ recipeItem.name }}</h1>
      <h3>Quantity: {{ quantity }}</h3>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    recipeItem: Object,
    quantity: Number,
  });
</script>
  
<style scoped>
img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border: 6px dashed rgb(255, 129, 79);
    margin: 1.1rem;
}
#materialInRecipe {
    padding: 0.4rem;
    background-color: rgb(247, 242, 225);
    display: flex;
    align-items: center;
}
#textContainer {
    margin-left: 1rem; 
    margin-right: 2rem;
}
h3 {
    margin-bottom: 0.8rem;
}
h1 {
    font-weight: bold;
}
</style>