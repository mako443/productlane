import { init } from 'commandbar';
init('3ac34534');
import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Insights from '/src/components/Insights.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/insights',
        name: 'Insights',
        component: Insights,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router