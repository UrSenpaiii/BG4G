<template>
  <section class="container">
    <main class="row">
      <!--Tabs bar-->
      <aside class="nav flex-column col-2 p-0 border-right">
        <a class="nav-link active" data-toggle="pill" href="#main">Главное</a>
        <a class="nav-link" data-toggle="pill" href="#basics">Основы</a>
        <a class="nav-link" data-toggle="pill" href="#frameworks">{{DATA[PARAMS.alias].type === 4 ? "Плагины" : "Фреймворки"}}</a>
      </aside>
      <div class="tab-content col-10 p-0">
        <!--Main-->
        <div class="tab-pane fade show active" id="main">
          <slot name="main"></slot>
        </div>
        <!--Basic-->
        <div class="tab-pane fade" id="basics">
          <!--Tabs for basics-->
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link border-left-0 active" style="border-top-left-radius: 0;" data-toggle="tab" href="#videos-basic">Видео</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#books-basic">{{DATA[PARAMS.alias].type === 4 ? "Статьи" : "Книги"}}</a>
            </li>
          </ul>
          <div class="tab-content">
            <!--Videos-->
            <div class="tab-pane fade show active" id="videos-basic">
              <v-current-card v-for="(e, i) in listVideos" :key="i" :alias="e.alias" :title="e.title" :author="e.author" :description="e.description" support="videos"></v-current-card>
            </div>
            <!--Books-->
            <div class="tab-pane fade" id="books-basic">
              <v-current-card v-for="(e, i) in listBooks" :key="i" :alias="e.alias" :title="e.title" :author="e.author" :description="e.description" support="books"></v-current-card>
            </div>
          </div>
        </div>
        <!--Frameworks-->
        <div class="tab-pane fade" id="frameworks">
          <!--Tabs for frameworks-->
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active  border-left-0" style="border-top-left-radius: 0;" data-toggle="tab" href="#videos-frameworks">Видео</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#books-frameworks">{{DATA[PARAMS.alias].type === 4 ? "Статьи" : "Книги"}}</a>
            </li>
          </ul>
          <div class="tab-content">
            <!--Videos-->
            <div class="tab-pane fade show active" id="videos-frameworks">
              <slot name="frameworkBlock"></slot>
            </div>
            <!--Books-->
            <div class="tab-pane fade" id="books-frameworks">
              <slot name="frameworkBlock"></slot>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </main>
  </section>
</template>

<script>
  export default {
    mounted() {
      console.log(DATA[PARAMS.alias].videos)
    },
    computed: {
      listVideos() {
        let result = [];
        for (let key in DATA[PARAMS.alias].videos) {
          let e = DATA[PARAMS.alias].videos[key];
          result.push({alias: e.alias, title: e.title, author: e.author, description: e.description});
        }
        return result;
      },
      listBooks() {
        let result = [];
        for (let key in DATA[PARAMS.alias].videos) {
          let e = DATA[PARAMS.alias].videos[key];
          result.push({alias: e.alias, title: e.title, author: e.author, description: e.description});
        }
        return result;
      },
    }
  }
</script>

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
