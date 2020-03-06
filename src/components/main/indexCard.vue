<template>
  <div class="card mb-4 text-left">
    <!--Body-->
    <div class="card-body p-5">
      <div class="row">
        <div class="col-8">
          <!--Type-->
          <a href="#" class="text-uppercase">{{name}}</a>
          <!--Title-->
          <h2 class="mb-3 mt-1 text-capitalize">
            <a href="/pages/current.html">{{alias}}</a>
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
                <span><b>{{books}}</b> книги</span>
              </div>
              <div class="d-flex">
                <i class="mr-3 fas fa-video"></i>
                <span style="margin-left: -4px;"><b>{{videos}}</b> видео-курсов</span></div>
            </div>
            <!---->
            <div class="col">
              <div class="d-flex">
                <i class="mr-3 far fa-calendar-times"></i>
                <span><b>{{time}}</b> месяца</span>
              </div>
              <div class="d-flex">
                <i class="mr-3 fa fa-cat"></i>
                <span><b>N</b> щегота потом придумаю</span>
              </div>
            </div>
          </div>
          <!--More link-->
          <a class="btn btn-dark" href="/pages/current.html">Узнать больше</a>
        </div>
        <!--Logo-->
        <img class="col-4" :src="'/assets/img/indexImg/'+alias+'.svg'">
      </div>
    </div>
  </div>
</template>

<script>
  const NAMES = ['Program language', 'Framework', 'OS', 'Text Editor', 'Other'];
  export default {
    props: {
      alias: String, type: Number, books: Number, videos: Number, time: Number,
    },
    computed: {
      name() {
        return NAMES[this.type];
      }
    }
  }
</script>
