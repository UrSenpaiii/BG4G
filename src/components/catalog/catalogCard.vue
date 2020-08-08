<template>
  <div class="col-3 p-3">
    <div class="card">
      <a href="/pages/current.html">
        <img class="card-img-top border-bottom" :src="'/assets/img/catalog/' + contentObj.alias + '/catalog.png'" height="133">
      </a>
      <div class="card-body pt-0">
        <h3 class="my-1"><a href="/pages/current.html">{{contentObj.title}}</a></h3>
        <a href="/pages/current.html">Видео: <b>{{Object.keys(contentObj.videos).length}}</b> шт.</a>
        <br>
        <a href="/pages/current.html">Книги: <b>{{Object.keys(contentObj.videos).length}}</b> шт.</a>
        <br>
        <a href="/pages/current.html" class="btn btn-dark btn-block mt-3">Дай посмотрю</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      contentObj: Object
    },
  }
</script>
