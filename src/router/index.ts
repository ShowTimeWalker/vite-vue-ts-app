import { createRouter, createWebHistory, Router, RouterOptions } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('@/components/welcome/index.vue'),
        children: [
            { path: 'home', name: 'Home', component: () => import('@/components/views/Home.vue') },
            { path: 'foo', name: 'Foo', component: () => import('@/components/views/Foo.vue') },
            { path: '', redirect: '/home' }
        ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/home' }
];


const router: Router = createRouter(<RouterOptions> {
    history: createWebHistory(),
    routes,
})

export default router
