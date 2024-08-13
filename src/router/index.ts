import About from "@/components/routesComponents/About.vue";
import Home from "@/components/routesComponents/Home.vue";
import NotFound from "@/components/routesComponents/NotFound.vue";
import Projects from "@/components/routesComponents/Projects.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Obsługa nieznanych ścieżek
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
