<template>
  <div class="row">
    <div class="col-12 p-4">
      <img width="500" class="float-left mr-3" :src="`/assets/img/catalog/${alias}/main.png`">
      <ul class="list-group">
        <li class="list-group-item">Язык программирования: <a href="#" class="h5">{{DATA[alias].title}}</a></li>
        <li class="list-group-item">Направленность: <a href="#" class="h5" id="">{{DATA[alias].for_what}}</a></li>
        <li class="list-group-item">Тип: <a href="#" :class="['h5', CLASSES[DATA[alias].level_type]]">{{LEVEL_TYPES[DATA[alias].level_type]}}</a></li>
        <li class="list-group-item">Востребовательность: <a href="#" :class="['h5', DATA[alias].need ? 'text-success' : 'text-warning']">{{DATA[alias].need ? 'Высокая' : 'Средняя'}}</a></li>
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
      alias: String
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
