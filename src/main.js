import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HoldingPage from "./HoldingPage.vue";
import "./index.css";
import { createHead } from "@vueuse/head";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: "auto" };
    },
});

const head = createHead();

createApp(HoldingPage).use(router).use(head).mount("#app");
