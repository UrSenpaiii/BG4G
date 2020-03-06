<template>
  <div class="tab-pane fade" id="basics">
    <!--Tabs for basics-->
    <ul class="nav nav-tabs" id="myTab">
      <li class="nav-item">
        <a class="nav-link border-left-0 active" style="border-top-left-radius: 0;" data-toggle="tab" href="#videos-basic">Videos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#books-basic">Books</a>
      </li>
    </ul>
    <div class="tab-content">
      <!--Videos-->
      <div class="tab-pane fade show active" id="videos-basic">
        <slot name="basicVideos"></slot>
      </div>
      <!--Books-->
      <div class="tab-pane fade" id="books-basic">
        <slot name="basicBooks"></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tabContent"
    }
</script>

<style scoped>

</style>
