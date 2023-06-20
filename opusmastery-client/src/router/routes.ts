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
                component: () => import('pages/landing/LandingPage.vue'),
                meta: {
                    title: 'Genuine Employee Management System | OpusMastery'
                }
            },
            {
                path: 'sign-up',
                name: 'SignUpPage',
                component: () => import('pages/identity/RegistrationPage.vue'),
                meta: {
                    title: 'Sign-up to start building Company | OpusMastery'
                }
            },
            {
                path: 'sign-in',
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
        component: () => import('layouts/DashboardLayout.vue'),
        meta: {
            isAuthenticationRequired: true,
        },
        children: [
            {
                path: '/employees',
                name: 'EmployeesPage',
                component: () => import('pages/dashboard/EmployeesPage.vue'),
                meta: {
                    title: 'OpusMastery Dashboard'
                }
            },
            {
                path: '/absence',
                name: 'AbsencePage',
                component: () => import('pages/dashboard/AbsencePage.vue'),
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
