<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="titleImage">
    <h1>Create Custom ACNH DIY Recipes</h1>
  </div>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
#titleImage {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/public/acnhTitle.png");
  background-repeat: no-repeat;
  height: 11rem;
}
h1 {
  padding: 0.1rem;
  width: 34rem;
  height: 4rem;
  background-color: rgb(253, 162, 87);
  text-align: center;
  border: 4px solid rgb(255, 129, 79);
  border-radius: 20px;
  color: rgb(255, 221, 177);
  font-size: 2rem;
  font-family: "Jost", sans-serif;
  font-weight: 650;
}
nav{
  background-color: rgb(255, 221, 177);
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
}
body {
  text-decoration:none;
}
a {
  background-color: rgb(255, 182, 123);
  width: 10rem;
  text-align: center;
  border-radius: 30px;
  color: rgb(255, 104, 33);
}
a:hover, a:focus {
  background-color: rgba(255, 103, 33, 0.699);
  color: rgb(255, 207, 167);
}

</style>
