const routes = [
    { path: '/output-products/month', component: outputProductsMonth },
    { path: '/output-products/week', component: outputProductsWeek },
    { path: '/users', component: UsersPage }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});