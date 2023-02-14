<template>
  <div class="side-nav">
    <button class="nav-header" @click="toggleNavBody1">
      <h3>Kişisel Bilgi</h3>
      <i
        :class="['fa', isNavBodyOpen1 ? 'fa-caret-down' : 'fa-caret-right']"
      ></i>
    </button>
    <div class="nav-body" :class="{ active: isNavBodyOpen1 }">
      <RouterLink class="nav-button" to="/personal"
        >Kişisel Bilgiler</RouterLink
      >
      <RouterLink class="nav-button" to="/password"
        >Şifre Değiştirme</RouterLink
      >
      <RouterLink class="nav-button" to="/clubs">Kulüp Üyelikleri</RouterLink>
    </div>
    <button class="nav-header" @click="toggleNavBody2">
      <h3>Akademik</h3>
      <i
        :class="['fa', isNavBodyOpen2 ? 'fa-caret-down' : 'fa-caret-right']"
      ></i>
    </button>
    <div class="nav-body" :class="{ active: isNavBodyOpen2 }">
      <RouterLink class="nav-button" to="/courses">Alınan Dersler</RouterLink>
      <RouterLink class="nav-button" to="/password"
        >Not Döküm Belgesi</RouterLink
      >
      <RouterLink class="nav-button" to="/clubs">Akademik Karne</RouterLink>
      <RouterLink class="nav-button" to="/password"
        >Bütünleme Sınavı Zaman Çizelgesi</RouterLink
      >
      <RouterLink class="nav-button" to="/clubs">Ders Programı</RouterLink>
    </div>
    <button class="nav-header" @click="toggleNavBody3">
      <h3>Finansal</h3>
      <i
        :class="['fa', isNavBodyOpen3 ? 'fa-caret-down' : 'fa-caret-right']"
      ></i>
    </button>
    <div class="nav-body" :class="{ active: isNavBodyOpen3 }">
      <RouterLink class="nav-button" to="/personal">Borç Durumu</RouterLink>
    </div>
    <button class="nav-header" @click="toggleNavBody4">
      <h3>Başvurular</h3>
      <i
        :class="['fa', isNavBodyOpen4 ? 'fa-caret-down' : 'fa-caret-right']"
      ></i>
    </button>
    <div class="nav-body" :class="{ active: isNavBodyOpen4 }">
      <RouterLink class="nav-button" to="/personal">Kayıt Dondurma Talebi</RouterLink>
    </div>
    <button class="nav-header" @click="toggleNavBody5">
      <h3>Akademik İletişim</h3>
      <i
        :class="['fa', isNavBodyOpen5 ? 'fa-caret-down' : 'fa-caret-right']"
      ></i>
    </button>
    <div class="nav-body" :class="{ active: isNavBodyOpen5 }">
      <RouterLink class="nav-button" to="/personal">Akademik İletişim Bilgileri</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavBodyOpen1: false,
      isNavBodyOpen2: false,
      isNavBodyOpen3: false,
      isNavBodyOpen4: false,
      isNavBodyOpen5: false,
    };
  },
  methods: {
    toggleNavBody1() {
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen1 = !this.isNavBodyOpen1;
    },
    toggleNavBody2() {
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen2 = !this.isNavBodyOpen2;
    },
    toggleNavBody3() {
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen3 = !this.isNavBodyOpen3;
    },
    toggleNavBody4() {
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen4 = !this.isNavBodyOpen4;
    },
    toggleNavBody5() {
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen5 = !this.isNavBodyOpen5;
    },
  },
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
