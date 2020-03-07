<template>
  <section class="container">
    <main class="bg-white row">
      <aside class="col-3 border-right">
        <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at autem consectetur dicta eius excepturi ipsum provident rem ut?
          Atque delectus dolorum earum eius enim facilis iusto quos ut voluptates.
        </section>
      </aside>
      <article class="col-9">
        <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab error ipsam quam quasi. Ad beatae culpa dolorum error eveniet ipsum iure
          laudantium mollitia odio perferendis porro suscipit ullam veniam, voluptates.
        </section>
      </article>
    </main>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  article {
    border-right: 1px solid #DFE3E9;
    border-bottom: 1px solid #DFE3E9;
    border-top: 1px solid #DFE3E9;
    &:before {
      content: "";
      bottom: 0;
      height: 75.6%;
      position: absolute;
      left: 0;
      border-left: 1px solid #DFE3E9;
    }
    &:after {
      content: "";
      height: 0.9%;
      position: absolute;
      left: 0;
      border-left: 1px solid #DFE3E9;
    }
  }
</style>
