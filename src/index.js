// SCSS
import './assets/scss/index.scss'

// Bootstrap JS
import 'jquery'
import 'popper.js'
import 'bootstrap'

//  Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// JS
import './js/'

// Vue.js
window.Vue = require('vue');

const components = require.context("./", true, /\w+\.(vue)$/);
components.keys().forEach(filename => {
  const config = components(filename);
  const name = filename.split("/").pop().replace(/\.\w+$/, "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  Vue.component("v-" + name, config.default || config);
  console.log(filename, "mapped by", "v-" + name);
});

const app = new Vue({
  el: '#app',
});
