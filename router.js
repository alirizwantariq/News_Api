// src/router.js

import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components for routing
import Home from './components/home.vue';
import Details from './views/details.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
