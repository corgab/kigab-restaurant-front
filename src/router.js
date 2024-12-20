import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import Login from './pages/Login.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
