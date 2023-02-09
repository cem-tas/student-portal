<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
// import Home from "./components/Home.vue";
</script>

<style scoped>
* {
  box-sizing: border-box;
  text-align: center;
}

nav {
  position: relative;
  top: 10px;
}

a {
  margin: 0 10px;
  margin-top: 100px;
  text-decoration: none;
  font-size: 2rem;
  font-family: "Arial Narrow Bold", sans-serif;
  color: black;
  padding: 10px;
  background-color: grey;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
