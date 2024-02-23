<template>
    <div id="materialInRecipe">
        <img :src="props.Material.img" :alt="props.Material.name">
        <h1>{{ props.Material.name }}</h1>
        <h3>Quantity: {{ quantity }}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
  Material: Object,
  quantity: Number,
});

</script>

<style scoped>
img {
  width: 9rem;
  height: 9rem;
  object-fit: cover;
  border: 2px solid black;
  margin: 1rem;
}
</style>