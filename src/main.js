import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
// import { application } from 'express'

const app = createApp(App);
app.use(router);
app.mount('#app');

