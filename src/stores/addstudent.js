import { defineStore } from "pinia";

export const useAddStudentStore = defineStore({
  id: "addStudent",
  state: () => ({
    // id: new Date().toISOString(),
    passportId: "",
    studentNumber: "",
    name: "",
    surname: "",
    pob: "",
    dob: null,
    gender: "",
    nationality: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    faculty: "",
    department: "",
    dor: null,
    address: "",
    phone: "",
    email: "",
    password: "",
    courses: "",
    debt: null,
    id: crypto.randomUUID(),
  }),

  actions: {
    async addStudent() {
      const newStudent = {
        // id: this.id,
        passportId: this.passportId,
        studentNumber: this.studentNumber,
        name: this.name,
        surname: this.surname,
        pob: this.pob,
        dob: this.dob,
        gender: this.gender,
        nationality: this.nationality,
        fatherName: this.fatherName,
        fatherOccupation: this.fatherOccupation,
        motherName: this.motherName,
        motherOccupation: this.motherOccupation,
        faculty: this.faculty,
        department: this.department,
        dor: this.dor,
        address: this.address,
        phone: this.phone,
        email: this.email,
        password: this.password,
        courses: this.courses,
        debt: this.debt,
      };
      const response = await fetch(
        `https://std-portal-76539-default-rtdb.europe-west1.firebasedatabase.app/students/${this.id}.json`,
        {
          method: "POST",
          body: JSON.stringify(newStudent),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to register student data! Try again."
        );
        throw error;
      }

      newStudent.id = responseData.name;
    },
    
  },

  getters: {
    evenOrOdd: (state) => {
      if (state.count % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    },
  },
});
