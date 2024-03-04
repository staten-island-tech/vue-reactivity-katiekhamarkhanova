<template>
  <div id="container">
  <div id="allCards">
    <materialCard v-for="material in materials" :key="material.name" :Material="material" :quantity="quantity"/>
  </div>
  <div id="recipePreview">
    <h2>RECIPE PREVIEW</h2>
    <div id="recipeCards">
      <recipeMaterial v-for="recipeItem in store.recipe" :key="recipeItem.material.name" :recipeItem="recipeItem.material" :quantity="recipeItem.quantity" />
    </div>
    <button @click="clearRecipe">Clear Recipe</button>
  </div>
</div>
</template>

<script setup>
import materialCard from '@/components/materialCard.vue';
import recipeMaterial from '@/components/recipeMaterial.vue';
import { store } from '/src/store.js';
import { ref } from 'vue';

const quantity = ref(1);

function clearRecipe() {
  store.recipe.splice(0, store.recipe.length);
}

const materials = [
  {
    name: "Tree branch",
    obtainFrom: "Tree",
    img: "tree branch.png",
  },
  {
    name: "Wasp nest",
    obtainFrom: "Tree",
    img: "public/wasp.png",
  },
  {
    name: "Wood",
    obtainFrom: "Tree (axe)",
    img: "public/wood.png",
  },
  {
    name: "Softwood",
    obtainFrom: "Tree (axe)",
    img: "public/softwood.png",
  },
  {
    name: "Hardwood",
    obtainFrom: "Tree (axe)",
    img: "public/hardwood.png",
  },
  {
    name: "Stone",
    obtainFrom: "Rock",
    img: "public/stone.png",
  },
  {
    name: "Iron nugget",
    obtainFrom: "Rock",
    img: "public/iron nugget.png",
  },
  {
    name: "Gold nugget",
    obtainFrom: "Rock",
    img: "public/gold nugget.png",
  },
  {
    name: "Clay",
    obtainFrom: "Rock",
    img: "public/clay.png",
  },
  {
    name: "Bamboo piece",
    obtainFrom: "Bamboo tree (axe)",
    img: "public/bamboo piece.png",
  },
  {
    name: "Bamboo shoot",
    obtainFrom: "Dig spot (near bamboo tree)",
    img: "public/bamboo shoot.png",
  },
  {
    name: "Star fragment",
    obtainFrom: "Meteor Shower (wishing)",
    img: "public/star fragment.png",
  },
  {
    name: "Large star fragment",
    obtainFrom: "Meteor Shower (wishing)",
    img: "public/large star fragment.png",
  },
  {
    name: "Pearl",
    obtainFrom: "Diving",
    img: "public/pearl.png",
  },
  {
    name: "Clump of weeds",
    obtainFrom: "Island (ground)",
    img: "public/clumps.png",
  },
  {
    name: "Apple",
    obtainFrom: "Apple tree",
    img: "public/apple.png",
  },
  {
    name: "Cherry",
    obtainFrom: "Cherry tree",
    img: "public/cherry.png",
  },
  {
    name: "Coconut",
    obtainFrom: "Coconut tree",
    img: "public/coconut.png",
  },
  {
    name: "Orange",
    obtainFrom: "Orange tree",
    img: "public/orange.png",
  },
  {
    name: "Peach",
    obtainFrom: "Peach tree",
    img: "public/peach.png",
  },
  {
    name: "Pear",
    obtainFrom: "Pear tree",
    img: "public/pear.png",
  },
  {
    name: "Turnip",
    obtainFrom: "Daisy Mae",
    img: "public/turnip.png",
  },
  {
    name: "Glowing moss",
    obtainFrom: "Boat tour",
    img: "public/moss.png",
  },
  {
    name: "Vine",
    obtainFrom: "Boat tour",
    img: "public/vine.png",
  },
  {
    name: "Manila clam",
    obtainFrom: "Beach (dig spot)",
    img: "public/clam.png",
  },
  {
    name: "Boot",
    obtainFrom: "Fishing",
    img: "public/boot.png",
  },
  {
    name: "Empty can",
    obtainFrom: "Fishing",
    img: "public/can.png",
  },
  {
    name: "Old tire",
    obtainFrom: "Fishing",
    img: "public/tire.png",
  },
];
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-image: url("/public/image.png");
}
#recipePreview {
  background-color: rgb(255, 182, 123);
  width: 19rem;
  text-align: center;
  padding: 1.1rem;
}
h2 {
  color: rgb(240, 108, 32);
  font-weight: 700;
  font-size: 1.6rem;
  margin: 1rem;
}
#allCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
  flex: 1;
}
button {
  margin: 3rem;
  padding: 0.3rem;
  font-weight: bold;
  color: rgb(97, 218, 207);
  background-color: rgb(255, 241, 210);
  border: 6px solid rgba(255, 241, 210, 0.541);
  border-radius: 10px;
}
</style>