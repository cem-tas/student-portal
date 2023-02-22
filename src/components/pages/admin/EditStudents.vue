<template>
  <div>
    <table class="zebra-table">
      <thead>
        <tr>
          <th @click="store.sortBy('number')">Student Number</th>
          <th @click="store.sortBy('name')">Name</th>
          <th @click="store.sortBy('faculty')">Faculty</th>
          <th @click="store.sortBy('department')">Department</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(student, index) in store.sortedStudents"
          :key="index"
          :class="index % 2 === 0 ? 'even' : 'odd'"
        >
          <td>{{ student.studentNumber }}</td>
          <td>{{ student.name + " " + student.surname }}</td>
          <td>{{ student.faculty }}</td>
          <td>{{ student.department }}</td>
          <td><button @click="store.loadStudents">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useAdminStudentsStore } from "@/stores/adminstudents.js";
import { onBeforeMount } from "vue";

const store = useAdminStudentsStore();

// function editStudent(std) {
//     this should contain edit student logic.
// }
onBeforeMount(() => {
  store.loadStudents();
});
</script>

<style scoped>
.zebra-table {
  border-collapse: collapse;
  width: 100%;
}

.zebra-table th,
.zebra-table td {
  border: 1px solid #ddd;
  padding: 1px;
  text-align: left;
}

.zebra-table th {
  background-color: #f2f2f2;
}

.zebra-table th:hover {
  background-color: #ddd;
}

.zebra-table .odd {
  background-color: #f9f9f9;
}
</style>
