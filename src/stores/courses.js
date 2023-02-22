import { defineStore } from "pinia";

export const useCoursesStore = defineStore({
  id: "courses",
  state: () => ({
    courses: [
      {
        id: 1,
        termId: 1,
        facultyId: 1,
        teacherId: 1,
        code: "COMM101",
        name: "İletişime Giriş",
        mapLocation:
          "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 1,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 2,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 3,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 4,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 5,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
        ],
        totalAttendance: 36,
        minimumAttendance: 27,
        hours: ["1-1", "1-2", "1-3"],
      },
      {
        id: 2,
        termId: 1,
        facultyId: 1,
        teacherId: 2,
        code: "COMM102",
        name: "İletişim Teorileri",
        mapLocation:
          "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 1,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 2,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 3,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 4,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 5,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
        ],
        totalAttendance: 36,
        minimumAttendance: 27,
        hours: ["2-1", "2-2", "2-3"],
      },
      {
        id: 3,
        termId: 1,
        facultyId: 1,
        teacherId: 3,
        code: "COMM103",
        name: "Akademik Araştırma",
        mapLocation:
          "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 1,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 2,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 3,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 4,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 5,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
        ],
        totalAttendance: 36,
        minimumAttendance: 27,
        hours: ["3-1", "3-2", "3-3"],
      },
      {
        id: 4,
        termId: 1,
        facultyId: 1,
        teacherId: 4,
        code: "COMM104",
        name: "Fotoğrafçılığa Giriş",
        mapLocation:
          "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 1,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 2,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 3,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 4,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 5,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
        ],
        totalAttendance: 36,
        minimumAttendance: 27,
        hours: ["3-6", "3-7", "3-8"],
      },
      {
        id: 5,
        termId: 1,
        facultyId: 1,
        teacherId: 5,
        code: "COMM105",
        name: "Gazeteciliğe Giriş",
        mapLocation:
          "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 1,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 2,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 3,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 4,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
          {
            studentNumber: 5,
            attendance: 0,
            grades: {
              quiz1: null,
              midTerm: null,
              quiz2: null,
              final: null,
              project: null,
              totalGrade: function () {
                if (
                  quiz1 === 0 &&
                  midTerm === 0 &&
                  quiz2 === 0 &&
                  final === 0 &&
                  project === 0
                ) {
                  return null;
                } else {
                  return quiz1 + midTerm + quiz2 + final + this.project;
                }
              },
            },
          },
        ],
        totalAttendance: 36,
        minimumAttendance: 27,
        hours: ["5-6", "5-7", "5-8"],
      },
    ],
  }),
});
