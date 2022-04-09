require('./bootstrap');

window.Vue = require('vue').default;

//setting router
import VueRouter from 'vue-router'
const routes = [
  { path: '/', component: require('./views/dashboard.vue') },
  { path: '/products', component: require('./views/products.vue') },
  { path: '/customers', component: require('./views/customers.vue') },
  { path: '/settings', component: require('./views/settings.vue') }
]

const router = new VueRouter({
  routes
})
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
}).$mount('#app');
