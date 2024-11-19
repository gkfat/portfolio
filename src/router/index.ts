import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/about',
        component: () => import('@/layouts/app/AppLayout.vue'),
        children: [
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/about/About.vue'),
            },
            {
                path: '/career',
                name: 'Career',
                component: () => import('@/views/career/Career.vue'),
            },
            {
                path: '/projects',
                name: 'Projects',
                component: () => import('@/views/project/Project.vue'),
            },
        ],
    },
    {
        path: '/:catchAll(.*)*',
        redirect: '/about',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
