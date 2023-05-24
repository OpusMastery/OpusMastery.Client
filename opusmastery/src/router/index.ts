import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/about',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFoundPage',
        component: () => import('../views/NotFoundPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
