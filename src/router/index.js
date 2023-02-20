import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import PersonalInfo from "@/components/pages/personal-info/PersonalInfo.vue";
import ChangePassword from "@/components/pages/personal-info/ChangePassword.vue";
import ClubMemberships from "@/components/pages/personal-info/ClubMemberships.vue";
import Courses from "@/components/pages/academic/Courses.vue";
import TimeTable from "@/components/pages/academic/TimeTable.vue";
import AddStudent from "@/components/pages/admin/AddStudent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/personal",
      name: "personal",
      component: PersonalInfo,
    },
    {
      path: "/password",
      name: "password",
      component: ChangePassword,
    },
    {
      path: "/clubs",
      name: "clubs",
      component: ClubMemberships,
    },
    {
      path: "/courses",
      name: "courses",
      component: Courses,
    },
    {
      path: "/timetable",
      name: "timetable",
      component: TimeTable,
    },
    {
      path: "/add-student",
      name: "add-student",
      component: AddStudent,
    },
  ],
});

export default router;
