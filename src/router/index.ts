import { createRouter, createWebHistory, Router, RouterOptions } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('@/components/welcome/Welcome.vue'),
        children: [
            { path: 'home', name: 'Home', component: () => import('@/components/views/home/Home.vue') },
            { path: 'home/specification', name: 'Specification', component: () => import('@/components/views/home/Specification.vue') },
            { path: 'resource', name: 'Resource', component: () => import('@/components/views/resources/Resource.vue') },
            { path: 'resource/coupon', name: 'Coupon', component: () => import('@/components/views/resources/Coupon.vue') },
            { path: 'resource/product', name: 'Product', component: () => import('@/components/views/resources/Product.vue') },
            { path: 'apis', name: 'Apis', component: () => import('@/components/views/apis/Apis.vue') },
            { path: 'apis/test', name: 'Test', component: () => import('@/components/views/apis/Test.vue') },
            { path: 'apis/list', name: 'List', component: () => import('@/components/views/apis/List.vue') },
            { path: 'history', name: 'History', component: () => import('@/components/views/history/History.vue') },
            { path: '/', redirect: '/home' }
        ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/home' }
]

const router: Router = createRouter(<RouterOptions> {
    history: createWebHistory(),
    routes,
})

export default router
