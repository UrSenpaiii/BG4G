<template>
  <div class="card mb-4 text-left">
    <div class="card-body p-5">
      <div class="row">
        <div class="col-8"><a href="#" class="text-uppercase">{{name}}</a>
          <h2 class="mb-3 mt-1 text-capitalize">
            <a href="/pages/current.html">{{alias}}</a>
          </h2>
          <p class="text-muted">
            <slot></slot>
          </p>
          <div class="row my-4">
            <div class="col-4 text-nowrap">
              <div class="d-flex mb-1">
                <div class="mr-3"><i class="fas fa-book "></i></div>
                <span><b>32</b> книги</span></div>
              <div class="d-flex mb-1">
                <div class="mr-3"><i class="fas fa-video"></i></div>
                <span style="margin-left: -4px;"><b>8</b> видео-курсов</span></div>
            </div>
            <div class="col text-nowrap">
              <div class="d-flex mb-1">
                <div class="mr-3"><i class="far fa-calendar-times"></i></div>
                <span><b>32</b> месяца</span></div>
              <div class="d-flex mb-1">
                <div class="mr-3"><i class="fa fa-cat"></i></div>
                <span><b>N</b> щегота потом придумаю</span></div>
            </div>
          </div>
          <a title="PHP" class="btn btn-dark" href="/pages/current.html">Узнать больше</a>
        </div>
        <div class="col-4 d-flex align-items-center">
          <img width="400" :src="'/assets/img/indexImg/'+alias+'.svg'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const NAMES = ['Program language', 'Framework', 'OS', 'Text Editor', 'Other'];
  export default {
    props: {
      alias: String, type: String
    },
    computed: {
      name() {
        return NAMES[this.type];
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
