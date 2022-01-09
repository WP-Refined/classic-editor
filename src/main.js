import { createApp } from 'vue';
import App from './app/ui/App.vue';
import vuetify from './app/plugins/vuetify';
import { loadFonts } from './app/plugins/webfontloader';
import routes from './routes';

loadFonts();

createApp(App).use(routes).use(vuetify).mount('#app');
