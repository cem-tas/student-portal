<template>
  <div>
    <div class="table-container" style="overflow-y: auto; height: 80vh">
      <table>
        <tr>
          <th>Club ID</th>
          <th>Club Name</th>
          <th>Actions</th>
        </tr>
        <tr v-for="club in store.clubs" :key="club.id">
          <td>{{ club.id }}</td>
          <td>{{ club.name }}</td>
          <td>
            <button>Başvur</button>
            <button>İptal</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useClubsStore } from "@/stores/clubs";

const store = useClubsStore();
</script>

<style>
.table-container {
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
