import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layouts/app/AppLayout.vue'),
    }, {
        path: '/:catchAll(.*)*',
        redirect: '/home',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
