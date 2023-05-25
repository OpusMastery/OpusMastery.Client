import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    },
    {
        path: '/about',
        component: () => import('pages/HelloWorldPage.vue'),
        meta: {
            title: 'About Page'
        }
    },
    {
        path: '/sign-in',
        component: () => import('pages/LoginPage.vue'),
        meta: {
            title: 'Login Page'
        }
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('pages/ErrorNotFound.vue'),
        meta: {
            title: 'About Page'
        }
    },
];

export default routes;
