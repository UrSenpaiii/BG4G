window.Vue = require('vue');

// import Header from "./header.vue";
// Vue.component('header-comp', Header);
// https://ru.vuejs.org/v2/guide/components-registration.html

// Vue components (for use in html)
Vue.component('header-comp', require('./header.vue').default);
// main
Vue.component('modal-form', require('./main/modalForm.vue').default);
Vue.component('main-greet', require('./main/mainGreetings.vue').default);
Vue.component('canvas-comp', require('./main/canvas.vue').default);
Vue.component('indexCard', require('./main/indexCard.vue').default);
// catalog
Vue.component('catalog', require('./catalog/catalog.vue').default);
Vue.component('catalogCard', require('./catalog/catalogCard.vue').default);
// current
Vue.component('current', require('./current/current.vue').default);
/////////////////////
Vue.component('footer-comp', require('./footer.vue').default);

// Vue init
const app = new Vue({
  el: '#app'
});
