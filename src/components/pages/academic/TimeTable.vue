<template>
  <div>
    <table>
      <tr>
        <th>Saatler:</th>
        <th>08:30 - 09:20</th>
        <th>09:30 - 10:20</th>
        <th>10:30 - 11:20</th>
        <th>11:30 - 12:20</th>
        <th>12:30 - 13:20</th>
        <th>13:30 - 14:20</th>
        <th>14:30 - 15:20</th>
        <th>15:30 - 16:20</th>
      </tr>
      <tr>
        <td>Pazartesi</td>
        <td>{{ checkTimeTable("1-1") }}</td>
        <td>{{ checkTimeTable("1-2") }}</td>
        <td>{{ checkTimeTable("1-3") }}</td>
        <td>{{ checkTimeTable("1-4") }}</td>
        <td>{{ checkTimeTable("1-5") }}</td>
        <td>{{ checkTimeTable("1-6") }}</td>
        <td>{{ checkTimeTable("1-7") }}</td>
        <td>{{ checkTimeTable("1-8") }}</td>
      </tr>
      <tr>
        <td>Salı</td>
        <td>{{ checkTimeTable("2-1") }}</td>
        <td>{{ checkTimeTable("2-2") }}</td>
        <td>{{ checkTimeTable("2-3") }}</td>
        <td>{{ checkTimeTable("2-4") }}</td>
        <td>{{ checkTimeTable("2-5") }}</td>
        <td>{{ checkTimeTable("2-6") }}</td>
        <td>{{ checkTimeTable("2-7") }}</td>
        <td>{{ checkTimeTable("2-8") }}</td>
      </tr>
      <tr>
        <td>Çarşamba</td>
        <td>{{ checkTimeTable("3-1") }}</td>
        <td>{{ checkTimeTable("3-2") }}</td>
        <td>{{ checkTimeTable("3-3") }}</td>
        <td>{{ checkTimeTable("3-4") }}</td>
        <td>{{ checkTimeTable("3-5") }}</td>
        <td>{{ checkTimeTable("3-6") }}</td>
        <td>{{ checkTimeTable("3-7") }}</td>
        <td>{{ checkTimeTable("3-8") }}</td>
      </tr>
      <tr>
        <td>Perşembe</td>
        <td>{{ checkTimeTable("4-1") }}</td>
        <td>{{ checkTimeTable("4-2") }}</td>
        <td>{{ checkTimeTable("4-3") }}</td>
        <td>{{ checkTimeTable("4-4") }}</td>
        <td>{{ checkTimeTable("4-5") }}</td>
        <td>{{ checkTimeTable("4-6") }}</td>
        <td>{{ checkTimeTable("4-7") }}</td>
        <td>{{ checkTimeTable("4-8") }}</td>
      </tr>
      <tr>
        <td>Cuma</td>
        <td>{{ checkTimeTable("5-1") }}</td>
        <td>{{ checkTimeTable("5-2") }}</td>
        <td>{{ checkTimeTable("5-3") }}</td>
        <td>{{ checkTimeTable("5-4") }}</td>
        <td>{{ checkTimeTable("5-5") }}</td>
        <td>{{ checkTimeTable("5-6") }}</td>
        <td>{{ checkTimeTable("5-7") }}</td>
        <td>{{ checkTimeTable("5-8") }}</td>
      </tr>
      <tr>
        <td>Cumartesi</td>
        <td>{{ checkTimeTable("6-1") }}</td>
        <td>{{ checkTimeTable("6-2") }}</td>
        <td>{{ checkTimeTable("6-3") }}</td>
        <td>{{ checkTimeTable("6-4") }}</td>
        <td>{{ checkTimeTable("6-5") }}</td>
        <td>{{ checkTimeTable("6-6") }}</td>
        <td>{{ checkTimeTable("6-7") }}</td>
        <td>{{ checkTimeTable("6-8") }}</td>
      </tr>
      <tr>
        <td>Pazar</td>
        <td>{{ checkTimeTable("7-1") }}</td>
        <td>{{ checkTimeTable("7-2") }}</td>
        <td>{{ checkTimeTable("7-3") }}</td>
        <td>{{ checkTimeTable("7-4") }}</td>
        <td>{{ checkTimeTable("7-5") }}</td>
        <td>{{ checkTimeTable("7-6") }}</td>
        <td>{{ checkTimeTable("7-7") }}</td>
        <td>{{ checkTimeTable("7-8") }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useCoursesStore } from "@/stores/courses";

const store = useCoursesStore();

function checkTimeTable(value) {
  for (let i = 0; i < store.courses.length; i++) {
    if (store.courses[i].hours.find((hour) => hour === value)) {
      return store.courses[i].code;
    }
  }
};
</script>

<style scoped>
table {
  margin-top: 30px;
  width: 100%;
}
td {
  border: 1px solid black;
  text-align: center;
  width: 30px;
  color: black;
  font-size: 10px;
}
th {
  border: 1px solid black;
  text-align: center;
  width: 30px;
}
</style>
