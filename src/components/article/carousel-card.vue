<template>
  <div class="col-4">
    <div class="card">
      <img class="card-img-top" src="/assets/img/catalog/c/videos/c4hour.png" alt="Card image cap">
      <div class="card-body p-1 text-center">
        <a href="#" class="card-title my-1 h5">{{title}}</a>
        <br>
        <a href="#" class="card-text small">{{author}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {title: String, author: String}
  }
</script>
