require('./bootstrap');

window.Vue = require('vue').default;

//setting router
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

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
