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
      <div class="tab-content col-10 p-0" v-for="card in data">
        <div class="tab-pane fade show active" id="main">
          <div class="row">
            <div class="col-12 p-4">
              <img class="float-left mr-2" :src="`/img/currentImg/${card.alias}/${card.alias}.png`"
                   width="500">
              <ul class="list-group">
                <li class="list-group-item text-capitalize h5">language: <h4 class="d-inline">
                  {{card.title}}</h4></li>
                <li class="list-group-item text-capitalize h5">invented in: <h4 class="d-inline">
                  {{card.invented}}</h4></li>
                <li class="list-group-item text-capitalize h5">Developer: <h4 class="d-inline">
                  {{card.developer}}</h4></li>
                <li class="list-group-item text-capitalize h5">For what: <h4 class="d-inline">
                  {{card.forWhat}}</h4></li>
                <li class="list-group-item text-capitalize h5" v-if="card.suitable == 'yes'">suitable for
                  beginner: <h4 class="d-inline text-success">{{card.suitable}}</h4></li>
                <li class="list-group-item text-capitalize h5" v-else="card.suitable == 'no'">suitable for
                  beginner: <h4 class="d-inline text-danger">{{card.suitable}}</h4></li>
              </ul>
              <p>{{card.globalDescription}}</p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="basics">
          <ul class="nav nav-tabs" id="myTab">
            <li class="nav-item">
              <a class="nav-link active  border-left-0" style="border-top-left-radius: 0;" data-toggle="tab"
                 href="#videos-basic">Videos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#books-basic">Books</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="videos-basic">
              <div class="card m-3 px-3" v-for="video in card.videos">
                <div class="card-body">
                  <div class="row">
                    <img width="150" :src="`/img/currentImg/${card.alias}/videos/${video.alias}.png`">
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
            <div class="tab-pane fade" id="books-basic">
              <div class="card m-3 px-3" v-for="book in card.books">
                <div class="card-body">
                  <div class="row">
                    <img height="110" :src="`/img/currentImg/${card.alias}/books/${book.alias}.png`">
                    <div class="col-6">
                      <h3 class="text-capitalize">
                        <a href="#">{{book.title}}</a>
                      </h3>
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
        <div class="tab-pane fade" id="frameworks">
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
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
    export default {
        data() {
          return {

          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/utils/vars";

  .nav-link.active {
    background-color: $neutral-custom
  }
</style>
