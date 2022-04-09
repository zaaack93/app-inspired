require('./bootstrap');

window.Vue = require('vue').default;

import navbar from "./layouts/navbar.vue"

const app = new Vue({
    el: '#app',
    components: { navbar }
});
