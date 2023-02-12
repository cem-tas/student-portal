import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PersonalInfo from "@/components/PersonalInfo.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("personal-info", PersonalInfo);
app.mount("#app");
