<template>
  <table class="zebra-table">
    <thead>
      <tr>
        <th @click="sortBy('number')">Student Number</th>
        <th @click="sortBy('name')">Name</th>
        <th @click="sortBy('faculty')">Faculty</th>
        <th @click="sortBy('department')">Department</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(student, index) in sortedStudents"
        :key="index"
        :class="index % 2 === 0 ? 'even' : 'odd'"
      >
        <td>{{ student.number }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.faculty }}</td>
        <td>{{ student.department }}</td>
        <td><button @click="editStudent(student)">Edit</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          number: 1,
          name: "John",
          faculty: "Engineering",
          department: "Computer Science",
        },
        { number: 2, name: "Mary", faculty: "Science", department: "Biology" },
        { number: 3, name: "Bob", faculty: "Arts", department: "English" },
        {
          number: 4,
          name: "Alice",
          faculty: "Business",
          department: "Marketing",
        },
      ],
      sortKey: "number", // default sort key
      reverse: false, // default sort order
    };
  },
  methods: {
    sortBy(key) {
      if (this.sortKey === key) {
        this.reverse = !this.reverse;
      } else {
        this.sortKey = key;
        this.reverse = false;
      }
    },
    editStudent(student) {
      // implement your edit functionality here
    },
  },
  computed: {
    sortedStudents() {
      const key = this.sortKey;
      const reverse = this.reverse ? -1 : 1;
      return this.students.sort((a, b) => {
        const x = (a[key] || "").toString().toLowerCase();
        const y = (b[key] || "").toString().toLowerCase();
        return reverse * ((x > y) - (y > x));
      });
    },
  },
};
</script>

<style scoped>
.zebra-table {
  border-collapse: collapse;
  width: 100%;
}

.zebra-table th,
.zebra-table td {
  border: 1px solid #ddd;
  padding: 8px;
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
