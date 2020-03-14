<template>
  <div class="row">
    <div class="col-12 p-4">
      <img width="500" class="float-left mr-3" :src="`/assets/img/currentImg/${alias}/main.png`">
      <ul class="list-group">
        <li class="list-group-item">Язык программирования: <a href="#" class="h5">{{title}}</a></li>
        <li class="list-group-item">Направленность: <a href="#" class="h5" id="">{{for_what}}</a></li>
        <li class="list-group-item">Тип: <a href="#" :class="['h5', CLASSES[level_type]]">{{LEVEL_TYPES[level_type]}}</a></li>
        <li class="list-group-item">Востребовательность: <a href="#" :class="['h5', CLASSES[need]]">{{NEED_TYPES[need]}}</a></li>
        <li class="list-group-item">Подходит новичкам: <a href="#" :class="['h5', suitable ? 'text-success' : 'text-danger']">{{suitable? "Да" : "Нет"}}</a></li>
      </ul>
      <div class="mt-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      alias: String, title: String, need: Number, level_type: Number, for_what: String, suitable: Boolean,
    },
    data() {
      return {
        CLASSES: ["", "text-danger", "text-warning", "text-success"],
        NEED_TYPES: ["", "Низкая", "Средняя", "Высокая"],
        LEVEL_TYPES: ["", "Низкоуровневый", "Среднеуровневый", "Высокоуровневый"]
      }
    },
    mounted() {
      this.$on("lol", console.log(this.title))
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
