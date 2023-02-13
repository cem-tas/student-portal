import { defineStore } from "pinia";

export const useStudentStore = defineStore({
  id: "student",
  state: () => ({
    student: {
      id: 00001,
      passportId: 1234567,
      studentNumber: 0000001,
      name: "John",
      surname: "Doe",
      pob: "New York",
      dob: "22/01/1991",
      gender: "Erkek",
      nationality: "ABD",
      fatherName: "Jack",
      fatherOccupation: "Author",
      motherName: "Lily",
      faculty: "İletişim",
      department: "Halkla İlişkiler ve Reklam",
      grade: 1,
      dor: "13/09/2022",
      address: "1733 sokak, no 23, Karşıyaka/İzmir",
      phone: "+90 533 8XX XX XX",
      email: "cenkvandal@gmail.com",
      password: "12345678",
      clubApplications: [],
      clubMemberships: [],
      courses: [],
      coursesCompleted: [],
      studentDebt: 500,
      demands: [],
    },
  }),

  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
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
