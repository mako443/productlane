import { init } from 'commandbar';
init('3ac34534');
import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
