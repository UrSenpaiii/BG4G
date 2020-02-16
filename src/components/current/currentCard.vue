<template>
  <div id="app" class="card m-3 px-3">
    <div class="card-body">
      <div class="row">
        <img width="200" class="border"
             :src="`/assets/img/currentImg/${alias}/videos/${card_alias}.png`">
        <div class="col-6">
          <a href="#" class="h3">{{title}}</a>
          <div class="text-capitalize h5 mt-2">Автор: {{author}}</div>
        </div>
        <div class="text-muted my-2">
          <slot name="description"></slot>
        </div>
        <a class="btn btn-dark" href="#">Узнать больше</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      alias: String, card_alias: String, title: String, author: String,
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
