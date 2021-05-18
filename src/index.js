/* Bootstrap*/
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
/* SCSS*/
import './assets/scss/index.scss'
/* JS*/
import './js/'
/* Vue.js*/
window.Vue = require('vue');
global.$ = function (selector, startNode) {
  if (selector.length < 1) return null;
  let node = (startNode) ? startNode : document;
  let pref = selector[0], value = selector.substr(1);
  if (pref === "#") return node.getElementById(value); else if (pref === ".") return node.getElementsByClassName(value); else if (pref === "^") return node.getElementsByName(value); else if (pref === "_") return node.getElementsByTagName(value); else return node.getElementById(selector);
};
Vue.prototype.bus = global.bus = new Vue();
const components = require.context("./", true, /\w+\.(vue)$/);
components.keys().forEach(filename => {
  const config = components(filename);
  const name = filename.split("/").pop().replace(/\.\w+$/, "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  Vue.component("v-" + name, config.default || config);
  /* console.log(filename, "mapped by", "v-" + name);*/
});
const DATA = {
  c: {
    alias: "c",
    title: "C",
    type: 1,
    time: 6,
    for_what: "Драйвера, микроконтроллеры, ОС и ПО",
    level_type: 1,
    need: false,
    videos: {
      1: {
        alias: "c4hour",
        title: "Изучение Си за час",
        author: "Гоша Дударь",
        link: "https://www.youtube.com/watch?v=t0_IRViZcHs",
        description: "Данное видео предназначено для тех, что хочет пощупать Си не вникая в него, понравится или нет, стоит ли учить. Естественно ничего более видео вам не даст, вы не будете профи или человеком, который знает Си на уровне, как сказал автор. Но на русско-язычком YouTube'е это максимум что можно найти, язык слишком стар, что бы по нему снимали годные видосы. Зато литературы хоть отбавляй",
      },
    },
    books: {
      1: {
        alias: "programmingOnC4beginners",
        title: "Программирование на Си для начинающих",
        author: "Майк МакГрат",
        dateOfPub: 2016,
        description: "В этой книге с помощью примеров программ и иллюстраций, показывающих результаты работы кода, разбираются все ключевые аспекты языка С. В этой книге описано даже то. как установить бесплатный компилятор для языка С и работать в нем, – у вас просто не будет шансов ошибиться! Книга идеально подойдет программистам, переключающимся па работу с другим языком, студентам, изучающим язык С, а также чем. кто только начинает свою профессиональную деятельность и хочет научиться основам процедурного программирования",
      },
    },
    indexDescription: "Си — компилируемый статически типизированный язык программирования общего назначения. Это устоявшийся в IT язык. Он широко используется в desktop программах, для микроконтролеров, а в некоторых случаях на нем можно писать игры",
  },
};
const enterApp = new Vue({
  el: '#app',
  data() {
    return DATA;
  },
  mounted() {
    bus.$emit("catalogDATA", DATA)
  }
});
