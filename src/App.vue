<template>
  <div class="container">
  <nav-bar class="element1"></nav-bar>
  
  <!-- <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/personal">Kişisel Bilgiler</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView class="element2" />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
// import Home from "./components/Home.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
</script>

<style scoped>
* {
  box-sizing: border-box;
  /* display: inline-block; */
  /* display: flex;
  justify-content: space-around; */
}

/* nav {
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
} */

.container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 11fr 1fr;
  height: 100%;
}

.element1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.element2 {
  grid-column: 2 / 5;
  grid-row: 1 / 2;
}

.header {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  width: 100%;
}
</style>
