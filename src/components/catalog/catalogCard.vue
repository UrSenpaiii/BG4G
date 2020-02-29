<template>
  <div class="col-3 p-3">
    <div class="card">
      <a href="/pages/current.html">
        <img class="card-img-top" :src="'/assets/img/catalogImg/' + alias + '.png'" >
      </a>
      <div class="card-body pt-0">
        <h3 class="mb-2"><a href="#">{{title}}</a></h3>
        <a href="#">Видео: <b>{{videos}}</b> шт.</a>
        <br>
        <a href="#">Книги: <b>{{books}}</b> шт.</a>
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
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>

</style>
