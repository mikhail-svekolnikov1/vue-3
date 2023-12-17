import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import TableCheckbox from "./views/TableCheckbox.vue";
import SortYourGifts from "./views/SortYourGifts.vue";
import About from "./views/About.vue";

const routes = [
  // { path: "/", component: TableCheckbox },
  { path: "/", component: SortYourGifts },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
