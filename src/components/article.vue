<template>
  <section class="container">
    <div class="row justify-content-center ">
      <div class="col-11 shadow-sm bg-white">
        <div class="row">
          <!--SideBar-->
          <aside class="col-3 border">
            <!--Lang Title-->
            <section class="h3 border text-center">LANG NAME</section>
            <!-------------->
            <!--Content-->
            <section class="border pl-3">
              <ul>
                <li class="h4">SIDE CONTENT</li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
              </ul>
            </section>
            <!----------->
          </aside>
          <!----------->
          <!--Main block-->
          <main class="col-9 p-4 border">
            <!--Current Title-->
            <div class="d-flex justify-content-between">
              <div class="btn btn-outline-dark h4"><</div>
              <div class="h3">TITLE</div>
              <div class="btn btn-outline-dark h4">></div>
            </div>
            <!----------------->
            <div class="row">
              <div class="col-3 border">IMG</div>
              <div class="col-7 border">Disc</div>
            </div>
            <!--Pagination-->
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">&laquo;</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">&raquo;</a>
              </li>
            </ul>
            <!-------------->
          </main>
          <!-------------->
        </div>
      </div>
    </div>
  </section>
</template>
<script> export default {
  data() {
    return {}
  }
}</script>
<style lang="scss" scoped>
  .page-link {
    color: $neutral-custom;
    &:hover {
      background-color: $neutral-custom;
      color: #fff;
    }
  }
</style>
