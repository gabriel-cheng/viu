import { createRouter, createWebHistory } from 'vue-router';

function lazyLoad(view) {return import(`../views/${view}.vue`);}

const routes = [
    {
        path: '/',
        name: 'home',
        component: lazyLoad('Home')
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: lazyLoad('Sobre')
    },
    {
        path: '/contato',
        name: 'coantato',
        component: lazyLoad('Contato')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
