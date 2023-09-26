import {createRouter, createWebHistory} from 'vue-router';
import Index from '@/Views/Index.vue';
import Preview from '@/Views/Preview.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index,
        },
        {
            path: "/preview",
            name: "Preview",
            component: Preview,
        }
    ],
});

export default router;