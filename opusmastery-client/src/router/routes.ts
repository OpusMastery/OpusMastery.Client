import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        meta: {
            isAuthRequired: false,
        },
        children: [
            {
                path: '',
                name: 'LandingPage',
                component: () => import('pages/IndexPage.vue'),
                meta: {
                    title: 'OpusMastery Landing'
                }
            },
            {
                path: '/about',
                name: 'AboutPage',
                component: () => import('pages/landing/HelloWorldPage.vue'),
                meta: {
                    title: 'About us'
                }
            },
            {
                path: '/sign-in',
                name: 'SignInPage',
                component: () => import('pages/identity/LoginPage.vue'),
                meta: {
                    title: 'Sign-in to explore your Company'
                }
            }
        ]
    },
    {
        path: '/some-portal-route',
        component: () => import('layouts/MainLayout.vue'),
        meta: {
            isAuthRequired: true,
        },
        children: []
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('pages/notFound/NotFoundPage.vue'),
        meta: {
            title: '404 - Please be mindful!'
        }
    }
];

export default routes;
