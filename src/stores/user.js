import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: "student",
  }),

  actions: {
    userIsAdmin() {
      this.user = "admin";
    },
    userIsStudent() {
      this.user = "student";
    },
  },
});
