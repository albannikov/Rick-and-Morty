import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import Toaster from '@meforma/vue-toaster';

const app = createApp(App);
app.use(router);
app.use(Toaster);
app.mount('#app');

