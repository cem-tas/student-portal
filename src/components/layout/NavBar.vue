<template>
    <div class="side-nav">
      <button class="nav-header" @click="toggleNavBody">
        <h3>Kişisel Bilgi</h3>
        <i :class="['fa', isNavBodyOpen ? 'fa-caret-down' : 'fa-caret-right']"></i>
      </button>
      <div class="nav-body" :class="{ active: isNavBodyOpen }">
        <RouterLink class="nav-button" to="/personal">Kişisel Bilgiler</RouterLink>
        <RouterLink class="nav-button" to="/password">Şifre Değiştirme</RouterLink>
        <RouterLink class="nav-button" to="/clubs">Kulüp Üyelikleri</RouterLink>
      </div>
    </div>  
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        isNavBodyOpen: false
      };
    },
    methods: {
      toggleNavBody() {
        this.isNavBodyOpen = !this.isNavBodyOpen;
      }
    }
  };
  </script>
  
  <style>
  .side-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
  }
  
  .nav-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border: 1px solid #ddd;
    background-color: #f7f7f7;
    cursor: pointer;
  }
  
  .nav-header h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .nav-header i {
    font-size: 1.2rem;
    transform: rotate(90deg);
    transition: all 0.3s;
  }
  
  .nav-header.active i {
    transform: rotate(0deg);
  }
  
  .nav-body {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s;
    padding: 0 2rem;
  }
  
  .nav-body.active {
    max-height: 500px;
    padding: 1rem 2rem;
  }
  
  .nav-button {
    display: block;
    width: 100%;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
    text-decoration: none;
    color: #333;
    cursor: pointer;
  }
  
  .nav-button:hover {
    background-color: #f7f7f7;
  }
  </style>
  