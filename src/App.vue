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
  text-align: center;
}

a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>
