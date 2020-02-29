<template>
  <section class="container">
    <article class="row">
      <!--Tabs bar-->
      <aside class="nav flex-column col-2 p-0 border-right">
        <a class="nav-link active" data-toggle="pill" href="#main">Main</a>
        <a class="nav-link" data-toggle="pill" href="#basics">Basics</a>
        <a class="nav-link" data-toggle="pill" href="#frameworks">Frameworks</a>
      </aside>
      <div class="tab-content col-10 p-0">
        <!--Main-->
        <div class="tab-pane fade show active" id="main">
          <slot name="main"></slot>
        </div>
        <!--Basic-->
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
        <!--Frameworks-->
        <div class="tab-pane fade" id="frameworks">
          <!--Tabs for frameworks-->
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active  border-left-0" style="border-top-left-radius: 0;" data-toggle="tab" href="#videos-frameworks">Videos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#books-frameworks">Books</a>
            </li>
          </ul>
          <div class="tab-content">
            <!--Videos-->
            <div class="tab-pane fade show active" id="videos-frameworks">
              <slot name="frameworksVideos"></slot>
            </div>
            <!--Books-->
            <div class="tab-pane fade" id="books-frameworks">
              <slot name="frameworksVideos"></slot>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  .nav-link.active {
    color: $default-color;
    background: $neutral-custom;
    background: linear-gradient(180deg, rgba(62, 62, 62, 1) 90%, rgba(255, 255, 255, 1) 100%);
  }

  .nav-tabs .nav-link {
    border: 0;
  }
</style>
