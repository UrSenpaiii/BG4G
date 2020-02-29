<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-12 bg-white">
        <div class="row">
          <!--SideBar-->
          <aside class="col-3">
            <!--Content-->
            <div class="p-3">
              <h3>All pages</h3>
              <ul class="mt-3">
                <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Cras justo odio</a></li>
                <ul class="list-block">
                  <li class="sitemap-list-item"><i class="fas fa-folder-open lighter-icon"></i> <a href="#">Lorem ipsum dolor sit.</a></li>
                  <ul class="sub-list">
                    <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Cras justo odio</a></li>
                    <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Lorem ipsum dolor</a></li>
                  </ul>
                </ul>
                <ul class="list-block">
                  <li class="sitemap-list-item"><i class="fas fa-folder-open lighter-icon"></i> <a href="#">Lorem ipsum dolor sit.</a></li>
                  <ul class="sub-list">
                    <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Cras justo odio</a></li>
                    <div class="list-block">
                      <li class="sitemap-list-item"><i class="fas fa-folder-open lighter-icon"></i> <a href="#">Lorem ipsum dolor</a></li>
                      <ul class="sub-list">
                        <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Cras justo odio</a></li>
                        <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Lorem ipsum dolor</a></li>
                      </ul>
                    </div>
                  </ul>
                </ul>
                <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Assumenda atque aut</a></li>
                <li class="sitemap-list-item"><i class="fas fa-folder lighter-icon"></i> <a href="#">Lorestyu dolor ipsumet</a></li>
              </ul>
            </div>
          </aside>
          <!--Main-->
          <main class="col-9 p-4">
            <!--Current Title-->
            <div class="d-flex justify-content-between">
              <div class="btn btn-outline-dark h4"><</div>
              <h3>TITLE</h3>
              <div class="btn btn-outline-dark h4">></div>
            </div>
            <!--Item Preview-->
            <section class="row ml-0 pt-4">
              <!--Poster-->
              <div class="col-4 row">
                <img src="/assets/img/currentImg/c/videos/c4hour.png" class="w-100 border border-bottom-0">
                <button class="small rounded-0 btn-outline-dark text-capitalize text-center p-0 border col line-h">watching</button>
                <button class="small rounded-0 btn-outline-dark text-capitalize text-center p-0 border col line-h">will watch</button>
                <button class="small rounded-0 btn-outline-dark text-capitalize text-center p-0 border col line-h">watched</button>
              </div>
              <!--Specifications-->
              <div class="col-7">
                <ul class="list-group">
                  <li class="list-group-item text-capitalize h5 p-2">views: <span></span></li>
                  <li class="list-group-item text-capitalize h5 p-2">author: <span></span></li>
                  <li class="list-group-item text-capitalize h5 p-2">year: <span></span></li>
                  <li class="list-group-item text-capitalize h5 p-2">link: <span></span></li>
                </ul>
              </div>
            </section>
            <!--Description-->
            <section class="border-top">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet consectetur ducimus earum et exercitationem facilis,
                molestiae molestias omnis reiciendis repudiandae sequi sunt temporibus totam vitae! Ex labore vel voluptatibus!</p>
              <!--Video/Book-->
              <section class="d-flex justify-content-center">
                <iframe width="640" height="360" src="https://www.youtube.com/embed/t0_IRViZcHs" allowfullscreen></iframe>
              </section>
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
            </section>
            <!--The Same pages-->
            <section class="border-top">
              <div id="carouselId" class="carousel slide" data-interval="false">
                <div class="carousel-inner">
                  <!--Carousel Item-->
                  <div class="carousel-item active">
                    <div class="row d-flex justify-content-between mx-5">
                      <!--Card-->
                      <div class="col-4">
                        <div class="card">
                          <img class="card-img-top" src="/assets/img/currentImg/c/videos/c4hour.png" alt="Card image cap">
                          <div class="card-body p-1 text-center">
                            <div class="card-title my-1 h5">Card title</div>
                            <div class="card-text small">Author</div>
                          </div>
                        </div>
                      </div>
                      <!--Card-->
                      <div class="col-4">
                        <div class="card">
                          <img class="card-img-top" src="/assets/img/currentImg/c/videos/c4hour.png" alt="Card image cap">
                          <div class="card-body p-1 text-center">
                            <div class="card-title my-1 h5">Card title</div>
                            <div class="card-text small">Author</div>
                          </div>
                        </div>
                      </div>
                      <!--Card-->
                      <div class="col-4">
                        <div class="card">
                          <img class="card-img-top" src="/assets/img/currentImg/c/videos/c4hour.png" alt="Card image cap">
                          <div class="card-body p-1 text-center">
                            <div class="card-title my-1 h5">Card title</div>
                            <div class="card-text small">Author</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div class="carousel-item">
                    <div class="row d-flex justify-content-between mx-5 ">
                      <!--Card-->
                      <div class="col-4">
                        <div class="card">
                          <img class="card-img-top" src="/assets/img/currentImg/c/videos/c4hour.png" alt="Card image cap">
                          <div class="card-body p-1 text-center">
                            <div class="card-title my-1 h5">Card title</div>
                            <div class="card-text small">Author</div>
                          </div>
                        </div>
                      </div>
                      <!--Card-->
                      <div class="col-4">
                        <div class="card">
                          <img class="card-img-top" src="/assets/img/currentImg/c/videos/c4hour.png" alt="Card image cap">
                          <div class="card-body p-1 text-center">
                            <div class="card-title my-1 h5">Card title</div>
                            <div class="card-text small">Author</div>
                          </div>
                        </div>
                      </div>
                      <!--Card-->
                      <div class="col-4">
                        <div class="card">
                          <img class="card-img-top" src="/assets/img/currentImg/c/videos/c4hour.png" alt="Card image cap">
                          <div class="card-body p-1 text-center">
                            <div class="card-title my-1 h5">Card title</div>
                            <div class="card-text small">Author</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev carousel-control-wight d-flex justify-content-start pl-3" href="#carouselId" data-slide="prev">
                  <div class="btn btn-sm btn-outline-dark h4"><</div>
                </a>
                <a class="carousel-control-next carousel-control-wight d-flex justify-content-end pr-3" href="#carouselId" data-slide="next">
                  <div class="btn btn-sm btn-outline-dark h4">></div>
                </a>
              </div>
            </section>
            <!--Comments Block-->
            <section class="border-top">
              <div class="h4">Comments</div>
              <!--Comments input-->
              <section class="border-top border-bottom">
                <div class="form-group">
                  <label for="comment" class="h5">Write your comment:</label>
                  <textarea class="form-control p-2" rows="4" id="comment" placeholder="Comment's text"></textarea>
                </div>
                <div class="d-flex justify-content-between">
                  <div>[bbcode]</div>
                  <button class="btn btn-dark">Submit</button>
                </div>
              </section>
              <section>
                <!--Other comments-->
                <div class="media mb-2">
                  <!--User Avatar-->
                  <img class="mr-3"
                       src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17071aa67c0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17071aa67c0%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E100x100%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
                  <!--------------->
                  <div class="media-body">
                    <!--Comment Header-->
                    <div class="d-flex justify-content-between">
                      <div>
                        <a href="#" class="h5 mr-1">USER NAME</a>
                        <button class="btn-sm btn-outline-secondary">Add a comment</button>
                        <div class="text-muted comment-data small">08 Feb 14:04</div>
                      </div>
                      <div>
                        <div>
                          <!--Rate-->
                          <i class="fas fa-chevron-up lighter-icon"></i>
                          <i class="fas fa-chevron-down lighter-icon"></i>
                          <!--Complaint-->
                          <i class="ml-2 fas fa-flag lighter-icon"></i>
                        </div>
                      </div>
                    </div>
                    <!--Comment Body-->
                    <p class="comment-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus
                      odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                      fringilla</p>
                    <!---------------->
                  </div>
                </div>
                <!--Answers-->
                <button class="btn btn-block btn-outline-dark p-0"><i class="fas fa-caret-down"></i> Answers (4)</button>
                <div class="pl-5 border-left">
                  <div class="media my-3">
                    <!--User Avatar-->
                    <img class="mr-3"
                         src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17071aa67c0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17071aa67c0%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E100x100%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
                    <div class="media-body">
                      <!--Comment Header-->
                      <div class="d-flex justify-content-between">
                        <div>
                          <a href="#" class="h5 mr-1">USER NAME</a>
                          <button class="btn-sm btn-outline-secondary">Add a comment</button>
                          <div class="text-muted comment-data small">08 Feb 14:04</div>
                        </div>
                        <div>
                          <div>
                            <!--Rate-->
                            <i class="fas fa-chevron-up lighter-icon"></i>
                            <i class="fas fa-chevron-down lighter-icon"></i>
                            <!--Complaint-->
                            <i class="ml-2 fas fa-flag lighter-icon"></i>
                          </div>
                        </div>
                      </div>
                      <!--Comment Body-->
                      <p class="comment-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus
                        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla</p>
                      <!---------------->
                    </div>
                  </div>
                </div>
              </section>
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

  .sitemap-list-item {
    padding: .1em;
  }

  .sub-list {
    margin-left: 1.1em;
  }

  .page-link {
    color: $neutral-custom;
    &:hover {
      background-color: $neutral-custom;
      color: #fff;
    }
  }

  li {
    margin-bottom: 0;
  }

  .line-h {
    height: 1.7rem
  }

  .carousel-item {
    transition: transform .6s ease-in-out;
  }

  .carousel-control-wight {
    width: 65px !important;
  }

  .comment-data {
    margin-top: -5px;
  }

  .lighter-icon:hover {
    color: $neutral-regular;
    transition: .15s;
    cursor: pointer;
  }

  .comment-text {
    line-height: 1.35;
  }
</style>
