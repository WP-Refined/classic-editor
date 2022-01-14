import { createRouter, createWebHistory } from 'vue-router';

import PostPage from './pages/posts/PostPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: PostPage,
    },
    {
      path: '/editor',
      component: () => import('./pages/editor/EditorPage.vue'),
    },
  ],
});
