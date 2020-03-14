<template>
  <div class="col-3 p-3">
    <div class="card">
      <a href="/pages/current.html">
        <!--<i class="fas fa-code position-absolute border"></i><i class="fab fa-diaspora"></i><i class="fas fa-laptop-code"></i><i class="fas fa-terminal"></i>-->
        <img class="card-img-top border-bottom" :src="'/assets/img/catalog/' + alias + '/catalog.png'" height="133">
      </a>
      <div class="card-body pt-0">
        <h3 class="my-1"><a href="/pages/current.html">{{title}}</a></h3>
        <a href="/pages/current.html">Видео: <b>{{videos}}</b> шт.</a>
        <br>
        <a href="/pages/current.html">Книги: <b>{{books}}</b> шт.</a>
        <br>
        <a href="/pages/current.html" class="btn btn-dark btn-block mt-3">Дай посмотрю</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      alias: String, title: String, videos: Number, books: Number,
    },
  }
</script>

<style lang="scss" scoped>

</style>
