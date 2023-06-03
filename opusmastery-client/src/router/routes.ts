import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/LandingLayout.vue'),
        meta: {
            isAuthenticationRequired: false,
        },
        children: [
            {
                path: '',
                name: 'LandingPage',
                component: () => import('pages/landing/HelloWorldPage.vue'),
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
        path: '/dashboard',
        component: () => import('layouts/PortalLayout.vue'),
        meta: {
            isAuthenticationRequired: true,
        },
        children: [
            {
                path: '',
                name: 'DashboardPage',
                component: () => import('pages/portal/DashboardPage.vue'),
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
