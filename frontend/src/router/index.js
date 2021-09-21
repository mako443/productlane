import { init } from 'commandbar';
init('3ac34534');
import { createRouter, createWebHistory } from 'vue-router'
import Roadmap from '/src/components/Roadmap.vue'
import Insights from '/src/components/Insights.vue'

const routes = [
    {
        path: '/',
        name: 'Roadmap',
        component: Roadmap,
    },
    {
        path: '/insights',
        name: 'Insights',
        component: Insights,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router