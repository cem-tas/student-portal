import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import PersonalInfo from "@/components/pages/personal-info/PersonalInfo.vue";
import ChangePassword from "@/components/pages/personal-info/ChangePassword.vue";
import ClubMemberships from "@/components/pages/personal-info/ClubMemberships.vue";

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
  ],
});

export default router;
