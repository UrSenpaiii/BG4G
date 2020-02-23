<template>
  <section class="container">
    <div class="row justify-content-center ">
      <div class="col-11 shadow-sm bg-white">
        <div class="row">
          <!--SideBar-->
          <aside class="col-3 border">
            <!--Lang Title-->
            <section class="h3 border text-center">LANG NAME</section>
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
          <!--Main-->
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
            <!--The Same pages-->
            <section class="d-flex justify-content-between border-top">
              <div class="btn btn-sm btn-outline-dark h4"><</div>
              <div class="h3">some</div>
              <div class="h3">some</div>
              <div class="h3">some</div>
              <div class="btn btn-sm btn-outline-dark h4">></div>
            </section>
            <!--Comments Block-->
            <section class="border-top">
              <div class="h4 mb-3">Comments</div>
              <!---->
              <div class="media mb-2">
                <!--User Avatar-->
                <img class="mr-3"
                     src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17071aa67c0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17071aa67c0%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E100x100%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
                <div class="media-body">
                  <!--Comment Header-->
                  <div class="d-flex justify-content-between">
                    <div>
                      <a href="#" class="h5 mr-1">USER NAME</a>
                      <button class="btn-sm btn-outline-secondary">Ответить</button>
                      <div class="text-muted comment-data">08 Фев 14:04</div>
                    </div>
                    <div>
                      <div>
                        <!--Rate-->
                        <i class="fas fa-chevron-up"></i>
                        <i class="fas fa-chevron-down"></i>
                        <!--Complaint-->
                        <i class="ml-2 fas fa-flag"></i>
                      </div>
                    </div>
                  </div>
                  <!--Comment Body-->
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                    purus
                    odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla</p>
                  <!---------------->
                </div>
              </div>
              <button class="btn btn-block btn-outline-dark"><i class="fas fa-caret-down"></i> Answers (4)</button>
            </section>
          </main>
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

  .comment-data {
    margin-top: -5px;
  }

  .fa-flag:hover {
    color: $neutral-regular;
    transition: 150ms;
  }
</style>
