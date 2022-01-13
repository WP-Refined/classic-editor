import { createApp } from 'vue';
import App from './app/ui/App.vue';
import routes from './routes';
import '@/app/assets/sass/main.scss';
// import { VuesticPluginsWithoutComponents } from 'vuestic-ui';

const app = createApp(App);

app.use(routes).mount('#app');
