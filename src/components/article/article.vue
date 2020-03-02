<template>
  <section class="container">
    <main class="row justify-content-center">
      <div class="col-12 bg-white">
        <div class="row">
          <!--SideBar-->
          <aside class="col-3 border-right">
            <!--Sitemap-->
            <div class="p-3">
              <h3>All pages</h3>
              <ul class="mt-3">
                <!---->
                <slot name="sitemap"></slot>
                <!---->
              </ul>
            </div>
          </aside>
          <!--Main-->
          <article class="col-9 p-4">
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
                  <slot name="carouselItem"></slot>
                  <!----------------->
                </div>
                <!--Controls-->
                <a class="carousel-control-prev carousel-control-wight d-flex justify-content-start pl-3" href="#carouselId" data-slide="prev">
                  <div class="btn btn-sm btn-outline-dark h4"><</div>
                </a>
                <a class="carousel-control-next carousel-control-wight d-flex justify-content-end pr-3" href="#carouselId" data-slide="next">
                  <div class="btn btn-sm btn-outline-dark h4">></div>
                </a>
              </div>
            </section>
            <!--Comments-->
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
                <slot name="comment"></slot>
              </section>
            </section>
          </article>
        </div>
      </div>
    </main>
  </section>
</template>
<script> export default {
  data() {
    return {
      mounted() {
        console.log(11111111111111111)
      }
    }
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
</style>
