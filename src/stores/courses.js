import { defineStore } from "pinia";

export const useCoursesStore = defineStore({
  id: "courses",
  state: () => ({
    courses: [
      {
        id: 0001,
        code: "COMM101",
        name: "İletişime Giriş",
        attendance: {
          0000001: 0,
          0000002: 0,
          0000003: 0,
          0000004: 0,
          0000005: 0,
        },
        requiredAttendance: 15,
        students: [0000001, 0000002, 0000003, 0000004, 0000005],
        hours: ["1-1", "1-2"],
      },
      {
        id: 0002,
        code: "COMM102",
        name: "İletişim Teorileri",
        attendance: {
          0000001: 0,
          0000002: 0,
          0000003: 0,
          0000004: 0,
          0000005: 0,
        },
        requiredAttendance: 15,
        students: [0000001, 0000002, 0000003, 0000004, 0000005],
        hours: ["1-7", "1-8"],
      },
      {
        id: 0003,
        code: "COMM103",
        name: "İletişim Teorileri",
        attendance: {
          0000001: 0,
          0000002: 0,
          0000003: 0,
          0000004: 0,
          0000005: 0,
        },
        requiredAttendance: 15,
        students: [0000001, 0000002, 0000003, 0000004, 0000005],
        hours: ["1-7", "1-8"],
      },
    ],
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
