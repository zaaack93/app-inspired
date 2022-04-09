require('./bootstrap');

window.Vue = require('vue').default;

//setting router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import dashboard from './views/dashboard'
import products from './views/products'
import customers from './views/customers'
import settings from './views/settings'
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: dashboard
        },
        {
            path: '/products',
            name: 'products',
            component: products,
        },
        {
            path: '/customers',
            name: 'customers',
            component: customers,
        },
        {
            path: '/settings',
            name: 'settings',
            component: settings,
        },
    ],
});

//Setting vue polaris
import PolarisVue from '@hulkapps/polaris-vue';
import '@hulkapps/polaris-vue/dist/polaris-vue.min.css';
Vue.use(PolarisVue);

//Import navbar globally
import navbar from "./layouts/navbar.vue"
import footerhelp from "./layouts/footerhelp.vue"

const app = new Vue({
    el: '#app',
    router,
    components: { navbar,footerhelp }
});
