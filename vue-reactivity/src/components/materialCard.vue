<template>
        <div id="card">
            <img :src = "Material.img" alt="">
            <h1>{{ Material.name }}</h1>
            <h2> Obtain via: {{ Material.obtainFrom }}</h2>
            <button>Add to Recipe</button>
        </div>
</template>

<script setup>
const props = defineProps({
    Material: Object,
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
}
</style>