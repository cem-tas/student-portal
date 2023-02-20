<template>
  <header>
    <div class="header-content">
      <h1 class="header-title">My App</h1>
      <div class="header-right">
        <button v-if="store.user === 'student'" @click="store.userIsAdmin" class="header-user-btn">Admin Mode</button>
        <button v-else @click="store.userIsStudent" class="header-user-btn">Student Mode</button>
        <button class="header-user-btn">
          {{ userName }}
        </button>
        <button class="header-logout-btn" @click="report">Logout</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from "@/stores/user.js";

const store = useUserStore();

const userName = "John Doe";

function report() {
  console.log(store.user);
}
</script>

<style>
header {
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header-title {
  margin: 0;
  font-size: 1.5rem;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-user-btn,
.header-logout-btn {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}

.header-user-btn:hover,
.header-logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
