import { defineStore } from "pinia";

export const useNavStore = defineStore({
  id: "navbar",
  state: () => ({
    isNavBodyOpen1: false,
    isNavBodyOpen2: false,
    isNavBodyOpen3: false,
    isNavBodyOpen4: false,
    isNavBodyOpen5: false,
  }),

  actions: {
    toggleNavBody1() {
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen1 = !this.isNavBodyOpen1;
    },

    toggleNavBody2() {
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen2 = !this.isNavBodyOpen2;
    },

    toggleNavBody3() {
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen3 = !this.isNavBodyOpen3;
    },

    toggleNavBody4() {
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen5 = false;
      this.isNavBodyOpen4 = !this.isNavBodyOpen4;
    },

    toggleNavBody5() {
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen3 = false;
      this.isNavBodyOpen4 = false;
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen5 = !this.isNavBodyOpen5;
    },
  },
});
