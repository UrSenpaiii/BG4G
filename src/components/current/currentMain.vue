<template>
  <div class="row">
    <div class="col-12 p-4">

      <img width="500" class="float-left mr-3" :src="`/assets/img/currentImg/${alias}/main.png`">
      <ul class="list-group">
        <li class="list-group-item text-capitalize">language: <span class="d-inline h5">{{title}}</span></li>
        <li class="list-group-item text-capitalize">invented in: <span class="d-inline h5">{{invented}}</span></li>
        <li class="list-group-item text-capitalize">developer: <span class="d-inline h5">{{developer}}</span></li>
        <li class="list-group-item text-capitalize">for what: <span class="d-inline h5">{{for_what}}</span></li>
        <li class="list-group-item text-capitalize">suitable for beginner: <span id="suitable" class="d-inline h5">{{suit}}</span></li>
      </ul>
      <div class="mt-2">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      alias: String, title: String, invented: String, developer: String, for_what: String, suitable: Boolean,
    },
    mounted() {
      if (this.suitable) {
        this.suit = "yes";
        $('#suitable').classList.add("text-success")
      } else {
        this.suit = "no";
        $('#suitable').classList.add("text-danger")
      }
    },
    data() {
      return {
        suit: "",
      }
    }
  }
</script>

<style lang="scss" scoped>
  .h4 {
    font-weight: $mainFontWeight;
  }

  .h5 {
    margin-bottom: 0;
  }
</style>
