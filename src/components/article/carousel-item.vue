<template>
  <div :class="`carousel-item ` + active">
    <div class="row d-flex justify-content-between mx-5">
      <!--Card-->
      <slot name="carouselCard"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type: String,
        default: ""
      }
    }
  }
</script>
