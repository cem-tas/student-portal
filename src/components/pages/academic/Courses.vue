<template>
  <div>
    <h2>Alınan Dersler</h2>
    <div class="table-container" style="overflow-y: auto; height: 80vh">
      <table>
        <tr>
          <th>Ders Kodu</th>
          <th>Ders Adı</th>
          <th>Yoklama</th>
          <th>Konum</th>
        </tr>
        <tr v-for="course in store.courses" :key="course.id">
          <td>{{ course.code }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.students.find(student => student.studentNumber === stdNumber).attendance }} / {{ course.totalAttendance }}</td>
          <td><a :href="course.mapLocation" target="_blank"><button>Konum</button></a></td>
          <td><button @click="log(course.students.find(student => student.studentNumber === stdNumber).attendance)">Log</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCoursesStore } from "@/stores/courses";
import { useStudentStore } from "@/stores/student";

const store = useCoursesStore();
const stdStore = useStudentStore();

const stdNumber = stdStore.student.studentNumber;

function log(value) {
  console.log(value);
}
</script>
