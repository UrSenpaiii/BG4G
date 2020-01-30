<template>
    <div class="col-3 p-3">
      <div class="card shadow-sm">
        <div class="border-bottom">
          <a href="/pages/current.html">
            <img class="card-img-top" :src="'/assets/img/catalogImg/' + alias + '.png'" height="137">
          </a>
        </div>
        <div class="card-body">
          <div class="h3 text-capitalize"><a href="#">{{alias}}</a></div>
          <div>
            <a href="#">Видео: <b>{{videos}}</b> шт.</a>
            <br>
            <a href="#">Книги:<b>{{books}}</b> шт.</a>
            <br>
            <a href="/pages/current.html" class="btn btn-dark btn-block mt-3" @click="">Дай посмотрю</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      alias: String, videos: String, books: String,
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
