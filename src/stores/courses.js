import { defineStore } from "pinia";

export const useCoursesStore = defineStore({
  id: "courses",
  state: () => ({
    courses: [
      {
        id: 0001,
        termId: 001,
        facultyId: 001,
        teacherId: 001,
        code: "COMM101",
        name: "İletişime Giriş",
        mapLocation: "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 0000001,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000002,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000003,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000004,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000005,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          }
        ],
        totalAttendance: 36,
        requiredAttandance: 27,
        hours: ["1-1", "1-2", "1-3"],
      },
      {
        id: 0002,
        termId: 001,
        facultyId: 001,
        teacherId: 001,
        code: "COMM102",
        name: "İletişim Teorileri",
        mapLocation: "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 0000001,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000002,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000003,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000004,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000005,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          }
        ],
        totalAttendance: 36,
        requiredAttandance: 27,
        hours: ["2-1", "2-2", "2-3"],
      },
      {
        id: 0003,
        termId: 001,
        facultyId: 001,
        teacherId: 001,
        code: "COMM103",
        name: "Akademik Araştırma",
        mapLocation: "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 0000001,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000002,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000003,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000004,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000005,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          }
        ],
        totalAttendance: 36,
        requiredAttandance: 27,
        hours: ["3-1", "3-2", "3-3"],
      },
      {
        id: 0004,
        termId: 001,
        facultyId: 001,
        teacherId: 001,
        code: "COMM104",
        name: "Fotoğrafçılığa Giriş",
        mapLocation: "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 0000001,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000002,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000003,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000004,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000005,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          }
        ],
        totalAttendance: 36,
        requiredAttandance: 27,
        hours: ["3-6", "3-7", "3-8"],
      },
      {
        id: 0005,
        termId: 001,
        facultyId: 001,
        teacherId: 001,
        code: "COMM105",
        name: "Gazeteciliğe Giriş",
        mapLocation: "https://www.google.com/maps/d/u/0/viewer?mid=1DIyqssAjHttz61jhDbyF8D2oY5s&hl=en_US&ll=35.14299021864583%2C33.91119349156598&z=18",
        students: [
          {
            studentNumber: 0000001,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000002,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000003,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000004,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          },
          {
            studentNumber: 0000005,
            attendance: 0,
            grades: {
              quiz1: 0,
              midTerm: 0,
              quiz2: 0,
              final: 0,
              project: 0,
              totalGrade: quiz1 + midTerm + quiz2 + final + project
            }
          }
        ],
        totalAttendance: 36,
        requiredAttandance: 27,
        hours: ["5-6", "5-7", "5-8"],
      },
    ],
  }),
});
