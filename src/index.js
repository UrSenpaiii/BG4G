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

global.$ = function (selector, startNode) {
  if (selector.length < 1) return null;
  let node = (startNode) ? startNode : document;
  let pref = selector[0], value = selector.substr(1);
  if (pref === "#") return node.getElementById(value);
  else if (pref === "^") return node.getElementsByName(value);
  else if (pref === ".") return node.getElementsByClassName(value);
  else if (pref === "@") return node.getElementsByTagName(value);
  else return node.getElementById(selector);
};

// Vue.js
window.Vue = require('vue');

Vue.prototype.bus = global.bus = new Vue();

const components = require.context("./", true, /\w+\.(vue)$/);
components.keys().forEach(filename => {
  const config = components(filename);
  const name = filename.split("/").pop().replace(/\.\w+$/, "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  Vue.component("v-" + name, config.default || config);
  console.log(filename, "mapped by", "v-" + name);
});

Vue.filter('cut', function (text) {
  return text.slice(0, 210) + "...";
});

let data = JSON.parse($("#data").innerHTML);

const app = new Vue({
  el: '#app',
  filter: {
    cut: function (text) {
      return text.slice(0, 210) + "...";
    },
  },
  data: Object.assign(data, {"name": "vasya"})
});

