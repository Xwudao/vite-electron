import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './assets/app.scss';
import i18n from './plugins/i18n';

const app = createApp(App);
app.use(i18n);
app.use(router).mount('#app');
