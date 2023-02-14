const routes = [
    { path: '/output-products/month', component: outputProductsMonth },
    { path: '/output-products/week', component: outputProductsWeek }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});