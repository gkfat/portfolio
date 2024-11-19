import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/home',
        component: () => import('@/layouts/app/AppLayout.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/home/Home.vue'),
            }, {
                path: '/career',
                name: 'Career',
                component: () => import('@/views/career/Career.vue'),
            },
        ],
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
