//  Bootstrap
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// Vue.js
window.Vue = require('vue');

// SCSS
import './assets/scss/index.scss'

// JS
import './js/'

global.$ = function (selector, startNode) {
  if (selector.length < 1) return null;
  let node = (startNode) ? startNode : document;
  let pref = selector[0], value = selector.substr(1);
  if (pref === "#") return node.getElementById(value);
  else if (pref === ".") return node.getElementsByClassName(value);
  else if (pref === "^") return node.getElementsByName(value);
  else if (pref === "_") return node.getElementsByTagName(value);
  else return node.getElementById(selector);
};

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

// let data = JSON.parse($("#data").innerHTML);

const app = new Vue({
  el: '#app',
  filter: {
    cut: function (text) {
      return text.slice(0, 210) + "...";
    },
  },
  data() {
    return {
      card: {
        alias: "c", title: "C",
        videos: [{
          alias: "c4hour",
          title: "Изучение Си за час",
          author: "Гоша Дударь",
          link: "https://www.youtube.com/watch?v=t0_IRViZcHs",
          description: "Данное видео предназначено для тех, что хочет пощупать Си не вникая в него, понравится или нет, стоит ли учить. Естественно ничего более видео вам не даст, вы не будете профи или человеком, который знает Си на уровне, как сказал автор. Но на русско-язычком YouTube'е это максимум что можно найти, язык слишком стар, что бы по нему снимали годные видосы. Зато литературы хоть отбавляй"
        },],
        books: [{
          alias: "programmingOnC4beginners",
          title: "Программирование на Си для начинающих",
          author: "Майк МакГрат",
          dateOfPub: 2016,
          link: "",
          description: "В этой книге с помощью примеров программ и иллюстраций, показывающих результаты работы кода, разбираются все ключевые аспекты языка С. В этой книге описано даже то. как установить бесплатный компилятор для языка С и работать в нем, – у вас просто не будет шансов ошибиться! Книга идеально подойдет программистам, переключающимся па работу с другим языком, студентам, изучающим язык С, а также чем. кто только начинает свою профессиональную деятельность и хочет научиться основам процедурного программирования."
        },],
        invented: 1972,
        developer: "Dennis Ritchie",
        forWhat: "drivers, OS, microcontroller",
        suitable: false,
        globalDescription: "Си — компилируемый статически типизированный язык программирования общего назначения, разработанный в 1969—1973 годах сотрудником Bell Labs Деннисом Ритчи как развитие языка Би. Первоначально был разработан для реализации операционной системы UNIX, но впоследствии был перенесён на множество других платформ." +
        "C — живой язык в том смысле, что он активно применяется в настоящее время. Он был придуман, использовался и используется для написания существенных частей программного кода Unix-подобных операционных систем. Также на нем пишут утилиты, компиляторы и реже прикладные программы. Поэтому C называют системным языком программирования." +
        "Его живучесть можно объяснить тем, что принципы работы операционных систем относительно универсальны, они не подвержены тому прогрессу и разнообразию, которые можно наблюдать в среде десктопного и мобильного ПО, Web-приложений. C не является языком достаточно высокого уровня, он ближе к архитектуре компьютера. В результате программы на C получаются компактными и быстрыми." +
        "C не поддерживает объектно-ориентированного программирования. Поддержка ООП реализована в C++. Хотя последний возник на основе языка C, он не является его \"продолжением\", а представляет собой отдельный язык, который можно изучать, не зная C. Однако изучение C полезно перед знакомством с его \"продвинутым младшим братом\", т.к. синтаксис языков похож, C не перегружает мозг начинающего программиста сверхвозможностями и приучает к пониманию сути происходящего." +
        "Подходит ли C для первого знакомства с программированием? Если вы не обучаетесь в вузе по специальности, связанной с IT, то нет. C предполагает понимание организации и принципов работы аппаратного обеспечения, в частности – памяти. Здесь многое делается с помощью указателей, они играют ключевую роль; эта тема достаточно сложная для понимания и обычно не изучается в школе." +
        "Конечно, с помощью C можно изучать основы программирования и не изучать при этом указатели. Однако человек будет думать, что знает C, мало зная о нем по существу. Язык C был создан разбирающимися в устройстве «железа» профессиональными программистами для написания операционной системы UNIX. Его не задумывали как язык для обучения начинающих. Но это не значит, что с него нельзя начать, можно начать с чего угодно.",
      },
    }
  },
// data: Object.assign(data, {"name": "vasya"})
});

// (function(timer) {
//   window.addEventListener('load', function() {
//     var el = document.body;
//     el.addEventListener('scroll', function(e) {
//       (function(el){
//         el.classList.add('scroll');
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//           el.classList.remove('scroll');
//         }, 100);
//       })(el);
//     })
//   })
// })();
// https://stackoverflow.com/questions/43737303/only-show-scrollbar-when-page-scrolls-in-css
