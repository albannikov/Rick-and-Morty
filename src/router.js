import { createRouter, createWebHashHistory } from 'vue-router';
import Auth from "./components/Auth.vue";
import Dashboard from "./components/Dashboard.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes : [
        { path: '/auth', component: Auth },
        { path: '/', component: Dashboard }
    ]
});