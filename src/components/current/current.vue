<template>
  <section id="app" class="container w-100">
    <article class="row">
      <!--Tabs bar-->
      <div class="nav flex-column nav-pills col-2 p-0 border-right">
        <a class="nav-link active" data-toggle="pill" href="#main">Main</a>
        <a class="nav-link" data-toggle="pill" href="#basics">Basics</a>
        <a class="nav-link" data-toggle="pill" href="#frameworks">Frameworks</a>
      </div>
      <!------------>
      <div class="tab-content col-10 p-0" v-for="card in contents">
        <!--Main-->
        <div class="tab-pane fade show active" id="main">
          <div class="row">
            <div class="col-12 p-4">
              <img class="float-left mr-3" :src="`/assets/img/currentImg/${card.alias}/${card.alias}.png`" width="500">
              <ul class="list-group">
                <li class="list-group-item text-capitalize h5">language: <span class="d-inline h4">{{card.title}}</span></li>
                <li class="list-group-item text-capitalize h5">invented in: <span class="d-inline h4">{{card.invented}}</span></li>
                <li class="list-group-item text-capitalize h5">Developer: <span class="d-inline h4">{{card.developer}}</span></li>
                <li class="list-group-item text-capitalize h5">For what: <span class="d-inline h4">{{card.forWhat}}</span></li>
                <li class="list-group-item text-capitalize h5" v-if="card.suitable === 'yes'">suitable for beginner: <span class="d-inline text-success h4">{{card.suitable}}</span></li>
                <li class="list-group-item text-capitalize h5" v-else="card.suitable === 'no'">suitable for beginner: <span class="d-inline text-danger h4">{{card.suitable}}</span></li>
              </ul>
              <p class="mt-2">{{card.globalDescription}}</p>
            </div>
          </div>
        </div>
        <!--Basic-->
        <div class="tab-pane fade" id="basics">
          <!--Tabs for basics-->
          <ul class="nav nav-tabs" id="myTab">
            <li class="nav-item">
              <a class="nav-link border-left-0" style="border-top-left-radius: 0;" data-toggle="tab"
                 href="#videos-basic">Videos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#books-basic">Books</a>
            </li>
          </ul>
          <div class="tab-content">
            <!--Videos-->
            <div class="tab-pane fade show active" id="videos-basic">
              <div class="card m-3 px-3" v-for="video in card.videos">
                <div class="card-body">
                  <div class="row">
                    <img width="150" :src="`/assets/img/currentImg/${card.alias}/videos/${video.alias}.png`">
                    <div class="col-6">
                      <h3 class="text-capitalize">
                        <a href="">{{video.title}}</a>
                      </h3>
                      <h6 class="text-capitalize">Автор: {{video.author}}</h6>
                    </div>
                    <p class="text-muted">{{video.description | cut}}</p>
                    <a class="btn btn-dark" href="#">Узнать
                      больше</a>
                  </div>
                </div>
              </div>
            </div>
            <!--Books-->
            <div class="tab-pane fade" id="books-basic">
              <div class="card m-3 px-3" v-for="book in card.books">
                <div class="card-body">
                  <div class="row">
                    <img height="110" :src="`/assets/img/currentImg/${card.alias}/books/${book.alias}.png`">
                    <div class="col-6">
                        <a href="#" class="h3">{{book.title}}</a>
                      <h6 class="text-capitalize">Автор: {{book.author}}</h6>
                    </div>
                    <p class="text-muted">{{book.description | cut}}</p>
                    <a class="btn btn-dark" href="#">Узнать
                      больше</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Frameworks-->
        <div class="tab-pane fade" id="frameworks">
          <!--Tabs for frameworks-->
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active  border-left-0" style="border-top-left-radius: 0;" data-toggle="tab"
                 href="#videos-frameworks">Videos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#books-frameworks">Books</a>
            </li>
          </ul>
          <div class="tab-content">
            <!--Videos-->
            <div class="tab-pane fade show active" id="videos-frameworks">
              <div class="card m-3 px-3">
                <div class="card-body">
                  <div class="row">
                    <img width="70" height="70" src="#">
                    <div class="col-4">
                      <h3><a href="#">Laravel</a></h3>
                    </div>
                    <p class="text-muted">
                      PHP — это серверный язык программирования. Создан специально для
                      бэкэнд-разработки. PHP
                      популярен и проще для
                      новичков, чем большинство других серверных языков. Slack, Wikipedia, Вконтакте
                      используют PHP.
                    </p>
                    <a class="btn btn-dark" href="#">Узнать
                      больше</a>
                  </div>
                </div>
              </div>
            </div>
            <!--Books-->
            <div class="tab-pane fade" id="books-frameworks">
              <div class="card m-3 px-3">
                <div class="card-body">
                  <div class="row">
                    <img width="70" height="80"
                         src="https://www.moscowbooks.ru/image/book/667/w600/i667575.jpg">
                    <div class="col-4">
                      <h3><a href="#">Laravel</a></h3>
                    </div>
                    <p class="text-muted">
                      PHP — это серверный язык программирования. Создан специально для
                      бэкэнд-разработки. PHP
                      популярен и проще для
                      новичков, чем большинство других серверных языков. Slack, Wikipedia, Вконтакте
                      используют PHP.
                    </p>
                    <a class="btn btn-dark" href="">Узнать
                      больше</a>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
        contents: {
          c: {
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
              title: "программирование на c для начинающих",
              author: "Майк МакГрат",
              dateOfPub: 2016,
              link: "",
              description: "В этой книге с помощью примеров программ и иллюстраций, показывающих результаты работы кода, разбираются все ключевые аспекты языка С. В этой книге описано даже то. как установить бесплатный компилятор для языка С и работать в нем, – у вас просто не будет шансов ошибиться! Книга идеально подойдет программистам, переключающимся па работу с другим языком, студентам, изучающим язык С, а также чем. кто только начинает свою профессиональную деятельность и хочет научиться основам процедурного программирования."
            },],
            invented: 1972,
            developer: "Dennis Ritchie",
            forWhat: "drivers, OS, microcontroller",
            suitable: "no",
            globalDescription: "Си — компилируемый статически типизированный язык программирования общего назначения, разработанный в 1969—1973 годах сотрудником Bell Labs Деннисом Ритчи как развитие языка Би. Первоначально был разработан для реализации операционной системы UNIX, но впоследствии был перенесён на множество других платформ." +
            "C — живой язык в том смысле, что он активно применяется в настоящее время. Он был придуман, использовался и используется для написания существенных частей программного кода Unix-подобных операционных систем. Также на нем пишут утилиты, компиляторы и реже прикладные программы. Поэтому C называют системным языком программирования." +
            "Его живучесть можно объяснить тем, что принципы работы операционных систем относительно универсальны, они не подвержены тому прогрессу и разнообразию, которые можно наблюдать в среде десктопного и мобильного ПО, Web-приложений. C не является языком достаточно высокого уровня, он ближе к архитектуре компьютера. В результате программы на C получаются компактными и быстрыми." +
            "C не поддерживает объектно-ориентированного программирования. Поддержка ООП реализована в C++. Хотя последний возник на основе языка C, он не является его \"продолжением\", а представляет собой отдельный язык, который можно изучать, не зная C. Однако изучение C полезно перед знакомством с его \"продвинутым младшим братом\", т.к. синтаксис языков похож, C не перегружает мозг начинающего программиста сверхвозможностями и приучает к пониманию сути происходящего." +
            "Подходит ли C для первого знакомства с программированием? Если вы не обучаетесь в вузе по специальности, связанной с IT, то нет. C предполагает понимание организации и принципов работы аппаратного обеспечения, в частности – памяти. Здесь многое делается с помощью указателей, они играют ключевую роль; эта тема достаточно сложная для понимания и обычно не изучается в школе." +
            "Конечно, с помощью C можно изучать основы программирования и не изучать при этом указатели. Однако человек будет думать, что знает C, мало зная о нем по существу. Язык C был создан разбирающимися в устройстве «железа» профессиональными программистами для написания операционной системы UNIX. Его не задумывали как язык для обучения начинающих. Но это не значит, что с него нельзя начать, можно начать с чего угодно.",
            type: 1,
          },
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .h4 {
    font-weight: $mainFontWeight;
  }

  .h5 {
    margin-bottom: 0;
  }

  .nav-link.active {
    background-color: $neutral-custom;
    color: $default-color  ;
  }
</style>
