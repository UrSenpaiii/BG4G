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
              <h3>{{title}}</h3>
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
                  <li class="list-group-item text-capitalize h5 p-2">views: <span class="h4">{{views}}</span></li>
                  <li class="list-group-item text-capitalize h5 p-2">author: <a href="#" class="h4">{{author}}</a></li>
                  <li class="list-group-item text-capitalize h5 p-2">year: <a href="#" class="h4">{{year}}</a></li>
                  <li class="list-group-item text-capitalize h5 p-2">link: <a href="#" class="h4">{{link}}</a></li>
                </ul>
              </div>
            </section>
            <!--Description-->
            <section class="border-top">
              <slot name="description"></slot>
              <!--Video/Book-->
              <section class="d-flex justify-content-center">
                <div class="d-flex align-items-center">
                  <img src="/assets/img/icons/arrow-left.png" class="img-lighter" width="50">
                </div>
                <!--<iframe width="640" height="360" src="https://www.youtube.com/embed/t0_IRViZcHs" allowfullscreen></iframe>-->
                <div class="border inset mx-1 p-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iure obcaecati perspiciatis placeat repellat, velit. Animi
                  asperiores consequatur corporis ex exercitationem ipsam, laudantium magni odio officia qui sequi sit vel, veniam voluptate
                  voluptatem. Distinctio laudantium perspiciatis quam quas quasi reprehenderit. Ab culpa dolor id ipsam laboriosam laborum vero.
                  Accusamus assumenda corporis illum inventore laboriosam magni minima unde veniam vero. A animi, beatae cupiditate eveniet id iste
                  excepturi facilis ipsum laudantium perspiciatis porro similique tenetur? Accusamus fugiat nisi, pariatur quam quibusdam rem
                  temporibus. Aliquid architecto consequuntur deleniti distinctio enim facilis id, illum inventore ipsam itaque laudantium molestiae
                  porro qui quisquam rem repellat totam vel! Assumenda at commodi deserunt dolorem, eaque eius enim, est exercitationem expedita
                  porro qui quisquam rem repellat totam vel! Assumenda at commodi deserunt dolorem, eaque eius enim, est exercitationem expedita
                  accusantium ad aperiam aspernatur at atque culpa cumque cupiditate debitis dicta dolorem doloremque ea earum eos est eveniet, iste
                  modi molestias nam nisi, numquam obcaecati optio quasi quia quibusdam quod repellendus rerum sint suscipit ullam ut velit veritatis
                  ducimus eius expedita fugiat fugit harum magni modi molestias mollitia nisi, nobis perspiciatis possimus provident qui quo quos
                  tempora veritatis! Accusantium aliquam aspernatur, cupiditate delectus dicta dolorum eius eligendi enim eos eum fugiat illum
                  incidunt ipsa molestiae mollitia nemo nobis non obcaecati odio odit praesentium quidem rem sed suscipit ullam ut vitae voluptatem.
                  Ab alias architecto at, cum deleniti deserunt error exercitationem, harum hic incidunt inventore maxime molestiae praesentium qui
                  quidem ratione, repellendus vel? Alias assumenda corporis cumque, debitis ex explicabo fugit hic ipsum laudantium molestias mollitia
                  nam nisi nobis nostrum obcaecati pariatur quam quidem quis quo reiciendis soluta vero voluptas voluptate. Accusantium deleniti dicta
                  ex, fuga fugit iusto laborum libero minus nemo numquam, quia ratione, soluta. Aliquam amet aperiam aspernatur corporis dicta,
                  doloremque ducimus earum eius enim error excepturi fugiat id iure labore magnam maxime modi molestiae, nesciunt, nihil nobis nostrum
                  numquam odit placeat porro praesentium quam repellat sed sequi suscipit temporibus tenetur vitae voluptas voluptatem? Consequuntur.
                  numquam odit placeat porro praesentium quam repellat sed sequi suscipit temporibus tenetur vitae voluptas voluptatem? Consequuntur.
                </div>
                <div class="d-flex align-items-center">
                  <img src="/assets/img/icons/arrow-right.png" class="img-lighter" width="50">
                </div>
              </section>
              <!--Pagination-->
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#">&laquo;</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link active" href="#">2</a></li>
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
<script>
  export default {
    props: {
      title: String, views: Number, author: String, year: Number, link: String
    }
  }
</script>
<style lang="scss" scoped>
  .img-lighter {
    filter: brightness(75%);
    cursor: pointer;
    transition: .2s;
    &:hover {
      filter: brightness(100%);
    }
  }

  .page-link {
    color: $neutral-custom;
  }

  .page-link:hover, .page-link.active {
    color: #fff;
    background-color: $neutral-custom;
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
