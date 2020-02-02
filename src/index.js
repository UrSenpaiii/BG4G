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

// CSS
import './assets/css/main.css'

// Vue.js
window.Vue = require('vue');

const prefix = "v-";
const components = require.context("./", true, /\w+\.(vue)$/);
components.keys().forEach(filename => {
  const config = components(filename);
  const name = filename.split("/").pop().replace(/\.\w+$/, "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  Vue.component(prefix + name, config.default || config);
  console.log(filename, "mapped by", prefix + name);
});

const app = new Vue({
  el: '#app',
});
