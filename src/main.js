import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Posts from './posts/ui/Posts.vue';
import Editor from './editor/ui/Editor.vue';
import App from './app/ui/App.vue';
import SettingsModel from './settings/ui/SettingsModal.vue';
import './app/assets/app.css';

const routes = [
    { path: '/', name: 'Posts', component: Posts },
    { path: '/create', name: 'Create Post', component: Editor },
];

const router = createRouter({
    // We are using the hash history for simplicity
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

// Make the app router-aware
app.use(router);

// Registering global domain components
// app.component('SettingsModel', SettingsModel);

// Mount the top-level UI component
app.mount('#app');
