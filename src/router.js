import { createRouter, createWebHashHistory } from 'vue-router';
import About from "./components/About.vue";
import Dashboard from "./components/Dashboard.vue";
import Characters from "./components/Characters.vue";
import Notfound from "./components/404.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes : [
        { path: '/', component: Dashboard },
        { path: '/about', component: About },
        { path: '/characters', component: Characters },
        { path: '/:pathMatch(.*)*', component: Notfound }
    ]
});