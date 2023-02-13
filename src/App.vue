<template>
  <div class="parent">
  <the-header class="div1"></the-header>
  <nav-bar class="div2"></nav-bar>

  <RouterView class="div3" />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/layout/NavBar.vue";
import TheHeader from "@/components/ui/TheHeader.vue";

</script>

<style scoped>
* {
  box-sizing: border-box;
}


.parent {
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(11, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 8; }
.div2 { grid-area: 2 / 1 / 12 / 2; }
.div3 { grid-area: 2 / 2 / 12 / 8; }

</style>
