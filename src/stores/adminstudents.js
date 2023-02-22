import { defineStore } from "pinia";

export const useAdminStudentsStore = defineStore({
  id: "admin-students",
  state: () => ({
    students: [],
    sortKey: "number",
    reverse: false,
  }),

  actions: {
    async loadStudents() {
      const response = await fetch(
        `https://std-portal-76539-default-rtdb.europe-west1.firebasedatabase.app/students.json`
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch data!"
        );
        throw error;
      } else {
        const students = [];
        for (const key in responseData) {
          const student = {
            id: key,
            passportId: responseData[key].passportId,
            studentNumber: responseData[key].studentNumber,
            name: responseData[key].name,
            surname: responseData[key].surname,
            pob: responseData[key].pob,
            dob: responseData[key].dob,
            gender: responseData[key].gender,
            nationality: responseData[key].nationality,
            fatherName: responseData[key].fatherName,
            fatherOccupation: responseData[key].fatherOccupation,
            motherName: responseData[key].motherName,
            motherOccupation: responseData[key].motherOccupation,
            faculty: responseData[key].faculty,
            department: responseData[key].department,
            dor: responseData[key].dor,
            address: responseData[key].address,
            phone: responseData[key].phone,
            email: responseData[key].email,
            password: responseData[key].password,
            courses: responseData[key].courses,
            debt: responseData[key].debt,
          };
          students.push(student);
        }
        this.students = students;
      }
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.reverse = !this.reverse;
      } else {
        this.sortKey = key;
        this.reverse = false;
      }
    },
  },

  getters: {
    sortedStudents: (state) => {
      const key = state.sortKey;
      const reverse = state.reverse ? -1 : 1;
      return state.students.sort((a, b) => {
        const x = (a[key] || "").toString().toLowerCase();
        const y = (b[key] || "").toString().toLowerCase();
        return reverse * ((x > y) - (y > x));
      });
    },
  },
});
