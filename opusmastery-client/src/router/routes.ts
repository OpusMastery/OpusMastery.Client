import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/LandingLayout.vue'),
        meta: {
            isAuthRequired: false,
        },
        children: [
            {
                path: '',
                name: 'LandingPage',
                component: () => import('pages/IndexPage.vue'),
                meta: {
                    title: 'Genuine Employee Management System | OpusMastery'
                }
            },
            {
                path: '/about',
                name: 'AboutPage',
                component: () => import('pages/landing/HelloWorldPage.vue'),
                meta: {
                    title: 'About us | OpusMastery'
                }
            },
            {
                path: '/sign-up',
                name: 'SignUpPage',
                component: () => import('pages/identity/RegistrationPage.vue'),
                meta: {
                    title: 'Sign-up to start building Company | OpusMastery'
                }
            },
            {
                path: '/sign-in',
                name: 'SignInPage',
                component: () => import('pages/identity/LoginPage.vue'),
                meta: {
                    title: 'Sign-in to explore your Company | OpusMastery'
                }
            },
        ]
    },
    {
        path: '/portal',
        component: () => import('layouts/PortalLayout.vue'),
        meta: {
            isAuthRequired: true,
        },
        children: [
            {
                path: '',
                name: 'PortalPage',
                component: () => import('pages/IndexPage.vue'),
                meta: {
                    title: 'OpusMastery Dashboard'
                }
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('pages/notFound/NotFoundPage.vue'),
        meta: {
            title: '404 - Please be mindful!'
        }
    },
];

export default routes;
