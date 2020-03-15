<template>
  <div id="app" class="card m-3 px-3">
    <div class="card-body">
      <div class="row">
        <a :href="'/pages/article.html?alias=' + PARAMS.alias + '&current=' + alias + '&support=' + support">
          <img width="200" class="border" :src="'/assets/img/catalog/' + alias + '.png'">
        </a>
        <div class="col-7">
          <a :href="'/pages/article.html?alias=' + PARAMS.alias + '&current=' + alias + '&support=' + support" class="h3">{{title}}</a>
          <div class="text-capitalize h5 mt-2">Автор: {{author}}</div>
        </div>
        <div class="text-muted my-2" v-html="description">
        </div>
        <a class="btn btn-dark" :href="'/pages/article.html?alias=' + PARAMS.alias + '&current=' + alias + '&support=' + support">Узнать больше</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      alias: String, title: String, author: String, description: String, support: String
    }
  }
</script>
