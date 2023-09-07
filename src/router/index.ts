import { createRouter, createWebHistory, Router, RouterOptions } from 'vue-router'

const routes = [
    { path: '/', name: 'Welcome', component: () => import('@/components/Welcome.vue') },
    { path: '/Home', name: 'Home', component: () => import('@/components/Home.vue') },
    { path: '/Foo', name: 'Foo', component: () => import('@/components/Foo.vue') },
    { path: '/Bar', name: 'Bar', component: () => import('@/components/Bar.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/welcome' },
]

const router: Router = createRouter(<RouterOptions> {
    history: createWebHistory(),
    routes,
})

export default router
