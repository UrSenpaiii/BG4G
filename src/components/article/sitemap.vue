<template>
  <div>
    <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Cras justo odio</a></li>
    <ul class="list-block">
      <li class="sitemap-list-item"><i class="fas fa-folder-open lighter-icon"></i> <a href="#">Lorem ipsum dolor sit.</a></li>
      <ul class="sub-list">
        <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Cras justo odio</a></li>
        <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Lorem ipsum dolor</a></li>
      </ul>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .sitemap-list-item {
    padding: .1em;
  }

  .sub-list {
    margin-left: 1.1em;
  }
</style>
