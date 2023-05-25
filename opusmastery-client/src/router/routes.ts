import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    },
    {
        path: '/about',
        component: () => import('pages/landing/HelloWorldPage.vue'),
        meta: {
            title: 'About us'
        }
    },
    {
        path: '/sign-in',
        component: () => import('pages/identity/LoginPage.vue'),
        meta: {
            title: 'Sign-in to explore your Company'
        }
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('pages/notFound/NotFoundPage.vue'),
        meta: {
            title: '404 Not Found'
        }
    }
];

export default routes;
