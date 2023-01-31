import { createRouter, createWebHashHistory } from 'vue-router';
import About from "./components/About.vue";
import Dashboard from "./components/Dashboard.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes : [
        { path: '/about', component: About },
        { path: '/', component: Dashboard }
    ]
});