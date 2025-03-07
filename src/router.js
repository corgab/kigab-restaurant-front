import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/Home.vue';
import Login from './pages/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
