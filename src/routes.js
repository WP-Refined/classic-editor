import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/posts/PostPage.vue'),
    },
    {
      path: '/editor/:id',
      component: () => import('./pages/editor/EditorPage.vue'),
    },
  ],
});
