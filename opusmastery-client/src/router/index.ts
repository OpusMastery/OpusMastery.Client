import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

export default route(() => {
    const router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,
        history: createWebHistory()
    });

    router.beforeEach((to, _, next) => {
        document.title = `${to.meta?.title || 'OpusMastery Project'}`;
        next();
    });

    return router;
});
