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
  // console.log(filename, "mapped by", "v-" + name);
});

function getUrlParams() {
  let vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => vars[key] = value);
  return vars;
}

global.PARAMS = Vue.prototype.PARAMS = getUrlParams();

global.DATA = Vue.prototype.DATA = {
  atom: {
    alias: "atom", title: "Atom", type: 4, for_what: "Высоко и среднеуровневые языки", level_type: 1, suitable: true, need: false,
    videos: {
      atomGoshDudar: {
        alias: "atom/videos/atomGoshDudar",
        title: "Обзор редактора Atom (от создателя Linux и GitHub)",
        author: "Гоша Дударь",
        year: 2016,
        dificult: 1,
        link: "https://www.youtube.com/embed/1rMMV98ybn4",
        description: "Автор данного видео расскажет и покажет основную информацию о редакторе Atom. Данная информация отлично подойдет для того, что бы начать использовать Atom в повседневной работе."
      },
    },
    books: {},
    mainDescription: "<p>Atom — бесплатный текстовый редактор с открытым исходным кодом для Linux, macOS, Windows с поддержкой плагинов, написанных на Node.js, и встраиваемых под управлением Git. Большинство плагинов имеют статус свободного программного обеспечения, разрабатываются и поддерживаются сообществом.</p>" +
    "<p>Из коробги поддерживает C/C++, C#, Clojure, CSS, CoffeeScript, Go, Git, HTML, JavaScript, Java, JSON, Less, Make, Mustache, Objective-C, PHP, Perl, Property List (Apple), Python, Ruby on Rails, Ruby, Sass, Shell script, Scala, SQL, XML</p>" +
    "<p>Краткой строкой проекта является слоган a hackable text editor for the 21st Century. Именно это его особенность наверное является ключевой. Atom не только обладает мощным инструментарием для нужд технического писателя и разработчика, но и обладает возможностью изменить и настроить под себя все, что угодно. Можно изменить даже внешний вид редактора, если вы знаете JavaScript.</p>" +
    "<p>В общем данный редактор очень хорош. Это некая смесь <a href='/pages/current.html?alias=sublime'>Sublime</a> и <a href='/pages/current.html?alias=jetBrains'>JetBrains. Большая база комьюнити обеспечивает программе хороший фундамент.</a></p>"
  },
  brackets: {
    alias: "brackets", title: "Brackets", type: 4, for_what: "Высоко и среднеуровневые языки", need: false,
    videos: {},
    books: {},
  },
  sublime: {
    alias: "sublime", title: "Sublime", type: 4, for_what: "Низко и среднеуровневые языки", need: true,
    videos: {},
    books: {},
  },
  c: {
    alias: "c", title: "C", type: 1, time: 6, for_what: "Драйвера, микроконтроллеры, ОС и ПО", level_type: 1, need: false,
    videos: {
      alias: "c4hour",
      title: "Изучение Си за час",
      author: "Гоша Дударь",
      link: "https://www.youtube.com/watch?v=t0_IRViZcHs",
      description: "Данное видео предназначено для тех, что хочет пощупать Си не вникая в него, понравится или нет, стоит ли учить. Естественно ничего более видео вам не даст, вы не будете профи или человеком, который знает Си на уровне, как сказал автор. Но на русско-язычком YouTube'е это максимум что можно найти, язык слишком стар, что бы по нему снимали годные видосы. Зато литературы хоть отбавляй",
    },
    books: {
      alias: "programmingOnC4beginners",
      title: "Программирование на Си для начинающих",
      author: "Майк МакГрат",
      dateOfPub: 2016,
      description: "В этой книге с помощью примеров программ и иллюстраций, показывающих результаты работы кода, разбираются все ключевые аспекты языка С. В этой книге описано даже то. как установить бесплатный компилятор для языка С и работать в нем, – у вас просто не будет шансов ошибиться! Книга идеально подойдет программистам, переключающимся па работу с другим языком, студентам, изучающим язык С, а также чем. кто только начинает свою профессиональную деятельность и хочет научиться основам процедурного программирования",
    },
    indexDescription: "Си — компилируемый статически типизированный язык программирования общего назначения. Это устоявшийся в IT язык. Он широко используется в desktop программах, для микроконтролеров, а в некоторых случаях на нем можно писать игры",
  },
  cpp: {
    alias: "cpp", title: "C++", type: 1, time: 6, need: true,
    videos: {},
    books: {},
    indexDescription: "Си++ (англ. C++) — компилируемый строго типизированный язык программирования общего назначения. Поддерживает разные парадигмы программирования: процедурную, обобщённую, функциональную; наибольшее внимание уделено поддержке объектно-ориентированного программирования",
  },
  cSharp: {
    alias: "cSharp", title: "C#", type: 1, time: 6, need: true,
    videos: {},
    books: {},
    frameworks: {
      aspNet: {
        alias: "cSharp/frameworks/aspNet", title: "Asp.Net", type: 2, time: 3, need: false,
        videos: {},
        books: {},
      }
    },
    indexDescription: "C# — объектно-ориентированный язык программирования.  C# один из самых мощных, быстро развивающихся и востребованных языков в ИТ-отрасли. В настоящий момент на нем пишутся самые различные приложения: от небольших десктопных программок до крупных веб-сервисов",
  },
  php: {
    alias: "php", title: "PHP", type: 1, time: 4, need: false,
    videos: {},
    books: {},
    frameworks: {
      laravel: {
        alias: "php/frameworks/laravel", title: "Laravel", type: 2, time: 3, need: false,
        videos: {},
        books: {},
      }
    },
    indexDescription: "PHP — это серверный язык программирования. Создан специально для бэкэнд-разработки. PHP популярен и проще для новичков, чем большинство других серверных языков. Slack, Wikipedia, Вконтакте используют PHP",
  },
  java: {
    alias: "java", title: "Java", type: 1, time: 6, need: true,
    videos: {},
    books: {},
    frameworks: {
      spring: {
        alias: "java/frameworks/spring", title: "Spring", type: 2, time: 3, need: false,
        videos: {},
        books: {},
        indexDescription: "Spring Framework (или коротко Spring) — универсальный фреймворк с открытым исходным кодом для Java-платформы. Что делает Spring, так это связывает классы с помощью XML файла или аннотаций, таким образом все объекты создаются и инициализируются Spring и внедряются в нужных местах",
      },
      kotlin: {
        alias: "java/frameworks/kotlin", title: "Kotlin", type: 2, time: 4, need: true,
        videos: {},
        books: {},
        indexDescription: "Spring Framework (или коротко Spring) — универсальный фреймворк с открытым исходным кодом для Java-платформы. Что делает Spring, так это связывает классы с помощью XML файла или аннотаций, таким образом все объекты создаются и инициализируются Spring и внедряются в нужных местах",
      },
    },
    indexDescription: "Java — универсальный язык программирования. Работает на любой архитектуре и может встраиваться в веб-приложения. Широко используется в разработке десктоп-, веб- и мобильных приложений, в банковской, научной и промышленной областях. А еще без него не работает Minecraft :)",
  },
  jetBrains: {
    alias: "jetBrains", title: "JetBrains", type: 4, time: 2, need: true,
    videos: {},
    books: {},
  },
  js: {
    alias: "js", title: "JavaScript", type: 1, time: 4, need: true,
    videos: {},
    books: {},
    frameworks: {
      angular: {
        alias: "js/frameworks/angular", title: "Angular", type: 2, time: 3, need: true,
        videos: {},
        books: {},
      },
      jquery: {
        alias: "js/frameworks/jquery", title: "JQuery", type: 2, time: 3, need: false,
        videos: {},
        books: {},
        indexDescription: "Фронтенд фреймворк JavaScript — вездесущий jQuery, это набор функций JS, фокусирующаяся на взаимодействии с HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов, манипулировать ими. Предоставляет API для работы с AJAX",
      },
      node: {
        alias: "js/frameworks/node", title: "Node.js", type: 2, time: 4, need: true,
        videos: {},
        books: {},
        indexDescription: "Бэкэнд JavaScript — он же Node.js, расширил возможности JavaScript и сделал его также серверным языком программирования. Он помогает фронтэнду эффективно взаимодействовать с базой данных. Netflix, Uber, eBay используют Node.js в своих платформах",
      },
      react: {
        alias: "js/frameworks/react", title: "React", type: 2, time: 5, need: true,
        videos: {},
        books: {},
      },
      symfony: {
        alias: "js/frameworks/symfony", title: "Symfony", type: 2, time: 4, need: false,
        videos: {},
        books: {},
      },
      vue: {
        alias: "js/frameworks/vue", title: "Vue", type: 2, time: 4, need: false,
        videos: {},
        books: {},
      },
    },
    indexDescription: "JavaScript — главный язык программирования всех фронтэнд-разработчиков. Позволяет делать сайты динамичными и «живыми». Самый востребованный и наиболее простой язык новичкам для входа в индустрию",
  },
  python: {
    alias: "python", title: "Python", type: 1, time: 2, need: true,
    videos: {},
    books: {},
    frameworks: {
      django: {
        alias: "python/frameworks/django", title: "Django", type: 2, time: 4, need: true,
        videos: {},
        books: {},
        indexDescription: "Django — свободный фреймворк для веб-приложений на языке Python, использующий шаблон проектирования MVC. Django является чрезвычайно популярным и полнофункциональным серверным веб-фреймворком, написанным на Python. В основном используется для бекенда на Python",
      }
    },
    indexDescription: "Python - один из самых популярных языков программирования. На нём разрабатывают искусственный интеллект, web-сайты, игры. Трудно найти другой язык, настолько широко используемый и при этом несложный в освоении - не зря Python используют в Google, Yandex, Dropbox!",
  },
  html: {
    alias: "html", title: "HTML", type: 5, time: 2, need: true,
    videos: {},
    books: {},
    indexDescription: "HTML - это язык разметки гипертекста. По сути, HTML довольно простой язык, состоящий из элементов, которые могут быть применены к частям текста, чтобы придавать им различные значения, разделять документ на логические секции и добавлять контент на Вашу страницу, такой как фото и видео. Это каркас, который должен пройти каждый программист, связанный с WEB",
  },
  css: {
    alias: "css", title: "CSS", type: 5, time: 3, need: true,
    videos: {},
    books: {},
    frameworks: {
      bootstrap: {
        alias: "css/frameworks/bootstrap", title: "Bootstrap", type: 2, time: 2, need: false,
        videos: {},
        books: {},
        indexDescription: "Bootstrap — свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML и CSS шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов веб-интерфейса, включая JS, вчастности jQuery, Но с 5 версии его уберут",
      },
      sass: {
        alias: "css/frameworks/sass", title: "SASS", type: 2, time: 1, need: false,
        videos: {},
        books: {},
        indexDescription: "Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей. Язык Sass имеет два синтаксиса: sass — отличается отсутствием фигурных скобок, в нём вложенные элементы реализованы с помощью отступов",
      },
    },
    indexDescription: "Какой же HTML без CSS. CSS - это каскадная таблица стилей. Преимущественно используется как средство описания, оформления внешнего вида веб-страницы. Это лицо сайта, с его помощью мы можем сверстать красивый и современный сайт. Цвета и позиционирование лишь необходимый минимум того, что может CSS",
  },
  ruby: {
    alias: "ruby", title: "Ruby", type: 1, time: 4, need: false,
    videos: {},
    books: {},
    frameworks: {
      rails: {
        alias: "ruby/frameworks/rails", title: "Ruby on Rails", type: 2, time: 3, need: true,
        videos: {},
        books: {},
        indexDescription: "Rails - это фреймворк, написанный на Ruby, реализует архитектурный шаблон Model-View-Controller для веб-приложений, а также обеспечивает их интеграцию с веб-сервером и сервером баз данных. Rails используют все — от стартапов и некоммерческих организаций до крупного бизнеса"
      },
    },
    indexDescription: "Ruby — динамический, рефлективный, интерпретируемый высокоуровневый язык программирования. Язык обладает независимой от операционной системы реализацией многопоточности, сильной динамической типизацией, сборщиком мусора и многими другими возможностями. Имеет замечательный фреймворк - Rails"
  },
  swift: {
    alias: "swift", title: "Swift", type: 1, time: 4, need: false,
    videos: {},
    books: {},
  },
};

const enterApp = new Vue({
  el: '#app',
  filter: {
    cut(text) {
      return text.slice(0, 210) + "...";
    },
  },
  data() {
    return DATA;
  },
});
