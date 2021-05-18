<template>
  <div class="row">
    <div class="col-12 p-4">
      <img width="500" class="float-left mr-3" :src="'/assets/img/catalog/c/main.png'">
      <ul class="list-group">
        <li class="list-group-item">Язык программирования: <a href="#" class="h5">{{title}}</a></li>
        <li class="list-group-item">Направленность: <a href="#" class="h5">{{for_what}}</a></li>
        <li class="list-group-item">Тип: <a href="#" :class="['h5', CLASSES[level_type]]">{{LEVEL_TYPES[level_type]}}</a></li>
        <li class="list-group-item">Востребовательность: <a href="#" :class="['h5', need ? 'text-success' : 'text-warning']">{{need ? 'Высокая' : 'Средняя'}}</a></li>
        <li class="list-group-item">Подходит новичкам: <a href="#" :class="['h5', suitable ? 'text-success' : 'text-danger']">{{suitable ? "Да" : "Нет"}}</a></li>
      </ul>
      <slot class="mt-2"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String, for_what: String, level_type: Number, need: Boolean, suitable: Boolean
    },
    data() {
      return {
        CLASSES: ["text-danger", "text-warning", "text-success"],
        LEVEL_TYPES: ["Низкоуровневый", "Среднеуровневый", "Высокоуровневый"]
      }
    },
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
