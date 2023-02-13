import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PersonalInfo from "@/components/pages/personal-info/PersonalInfo.vue";
import ChangePassword from "@/components/pages/personal-info/ChangePassword.vue";
import ClubMemberships from "@/components/pages/personal-info/ClubMemberships.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("personal-info", PersonalInfo);
app.component("change-password", ChangePassword);
app.component("club-memberships", ClubMemberships)
app.mount("#app");
