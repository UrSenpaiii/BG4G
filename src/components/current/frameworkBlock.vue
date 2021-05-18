<template>
  <div class="card">
    <div @click="btnArrow = !btnArrow, show = !show" class="card-header">
      <i :class="'fas fa-caret-' + [btnArrow ? 'up' : 'down']"></i>
      <h3 class="d-inline">Vue</h3>
    </div>
    <div v-if="show" class="card-body">
      <slot name="frameworksVideos"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        btnArrow: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .lighter {

  }
</style>
