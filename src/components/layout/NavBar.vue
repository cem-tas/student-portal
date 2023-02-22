<template>
  <div>
    <div class="side-nav" v-if="userStore.user === 'student'">
      <button class="nav-header" @click="store.toggleNavBody1">
        <h3>Kişisel Bilgi</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen1 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen1 }">
        <RouterLink class="nav-button" to="/personal"
          >Kişisel Bilgiler</RouterLink
        >
        <RouterLink class="nav-button" to="/password"
          >Şifre Değiştirme</RouterLink
        >
        <RouterLink class="nav-button" to="/clubs">Kulüp Üyelikleri</RouterLink>
      </div>
      <button class="nav-header" @click="store.toggleNavBody2">
        <h3>Akademik</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen2 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen2 }">
        <RouterLink class="nav-button" to="/courses">Alınan Dersler</RouterLink>
        <RouterLink class="nav-button" to="/password"
          >Not Döküm Belgesi</RouterLink
        >
        <RouterLink class="nav-button" to="/clubs">Akademik Karne</RouterLink>
        <RouterLink class="nav-button" to="/password"
          >Bütünleme Sınavı Zaman Çizelgesi</RouterLink
        >
        <RouterLink class="nav-button" to="/timetable"
          >Ders Programı</RouterLink
        >
      </div>
      <button class="nav-header" @click="store.toggleNavBody3">
        <h3>Finansal</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen3 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen3 }">
        <RouterLink class="nav-button" to="/personal">Borç Durumu</RouterLink>
      </div>
      <button class="nav-header" @click="store.toggleNavBody4">
        <h3>Başvurular</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen4 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen4 }">
        <RouterLink class="nav-button" to="/personal"
          >Kayıt Dondurma Talebi</RouterLink
        >
      </div>
      <button class="nav-header" @click="store.toggleNavBody5">
        <h3>Akademik İletişim</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen5 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen5 }">
        <RouterLink class="nav-button" to="/personal"
          >Akademik İletişim Bilgileri</RouterLink
        >
      </div>
    </div>
    <div class="side-nav" v-else-if="userStore.user === 'admin'">
      <button class="nav-header" @click="store.toggleNavBody1">
        <h3>Öğrenciler</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen1 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen1 }">
        <RouterLink class="nav-button" to="/add-student"
          >Öğrenci Ekle</RouterLink
        >
        <RouterLink class="nav-button" to="/edit-students"
          >Öğrenci Düzenle</RouterLink
        >
      </div>
      <button class="nav-header" @click="store.toggleNavBody2">
        <h3>Akademik</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen2 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen2 }">
        <RouterLink class="nav-button" to="/courses">Dönem Ekle</RouterLink>
        <RouterLink class="nav-button" to="/password">Fakülte Ekle</RouterLink>
        <RouterLink class="nav-button" to="/clubs">Bölüm Ekle</RouterLink>
        <RouterLink class="nav-button" to="/password">Ders Ekle</RouterLink>
      </div>
      <button class="nav-header" @click="store.toggleNavBody3">
        <h3>Finansal</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen3 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen3 }">
        <RouterLink class="nav-button" to="/personal">Borç Durumu</RouterLink>
      </div>
      <button class="nav-header" @click="store.toggleNavBody4">
        <h3>Başvurular</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen4 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen4 }">
        <RouterLink class="nav-button" to="/personal"
          >Kayıt Dondurma Talebi</RouterLink
        >
      </div>
      <button class="nav-header" @click="store.toggleNavBody5">
        <h3>Akademik İletişim</h3>
        <i
          :class="[
            'fa',
            store.isNavBodyOpen5 ? 'fa-caret-down' : 'fa-caret-right',
          ]"
        ></i>
      </button>
      <div class="nav-body" :class="{ active: store.isNavBodyOpen5 }">
        <RouterLink class="nav-button" to="/personal"
          >Akademik İletişim Bilgileri</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavStore } from "@/stores/navbar.js";
import { useUserStore } from "@/stores/user.js";

const store = useNavStore();
const userStore = useUserStore();
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
