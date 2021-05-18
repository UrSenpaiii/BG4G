<template>
  <div class="card mb-4 text-left">
    <!--Body-->
    <div class="card-body p-5">
      <div class="row">
        <div class="col-8">
          <!--Type-->
          <a :href="'/pages/catalog.html?type=' + type" class="text-uppercase">{{NAMES[this.type]}}</a>
          <!--Title-->
          <h2 class="mb-3 mt-1">
            <a href="/pages/current.html">{{title}}</a>
          </h2>
          <!--Text-->
          <p class="text-muted">
            <slot></slot>
          </p>
          <!--Statistic-->
          <div class="row my-4">
            <!---->
            <div class="col-4">
              <div class="d-flex">
                <i class="mr-3 fas fa-book "></i>
                <span>Книг: <b>{{books}}</b></span>
              </div>
              <div class="d-flex">
                <i class="mr-3 fas fa-video"></i>
                <span style="margin-left: -5px;">Видео-курсов: <b>{{videos}}</b></span>
              </div>
            </div>
            <!---->
            <div class="col">
              <div class="d-flex">
                <i class="mr-3 far fa-calendar-times"></i>
                <span><b>{{time}}</b> месяца</span>
              </div>
              <div class="d-flex">
                <i class="mr-3 fas fa-comment-dollar"></i>
                <span style="margin-left: -2px;">{{need ? "Высоко" : "Хорошо"}} востребован</span>
              </div>
            </div>
          </div>
          <!--More link-->
          <a class="btn btn-dark" href="/pages/current.html">Узнать больше</a>
        </div>
        <!--Logo-->
        <img class="col-4" :src="'/assets/img/catalog/'+alias+'/index.svg'">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      alias: String, title: String, type: Number, books: Number, videos: Number, time: Number, need: Boolean, link: String
    },
    data() {
      return {
        NAMES: ["", "Языки программирования", "Фреймворки", "OC", "Текстовые редакторы", "Другое"]
      }
    },
  }
</script>
