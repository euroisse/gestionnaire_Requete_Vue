import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    { path: '/', component: () => import('../views/Home.vue') },
    { path: '/requests', component: () => import('../views/Requests.vue') },
    { path: '/submit', component: () => import('../views/SubmitRequest.vue') },
    { path: '/subject', component: () => import('../views/SubjectManagement.vue') },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;