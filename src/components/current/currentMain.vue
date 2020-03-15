<template>
  <div class="row">
    <div class="col-12 p-4">
      <img width="500" class="float-left mr-3" :src="'/assets/img/catalog/' + DATA[PARAMS.alias].alias + '/main.png'">
      <ul class="list-group">
        <li class="list-group-item">Язык программирования: <a href="#" class="h5">{{DATA[PARAMS.alias].title}}</a></li>
        <li class="list-group-item">Направленность: <a href="#" class="h5" id="">{{DATA[PARAMS.alias].for_what}}</a></li>
        <li class="list-group-item">Тип: <a href="#" :class="['h5', CLASSES[DATA[PARAMS.alias].level_type]]">{{LEVEL_TYPES[DATA[PARAMS.alias].level_type]}}</a></li>
        <li class="list-group-item">Востребовательность: <a href="#" :class="['h5', DATA[PARAMS.alias].need ? 'text-success' : 'text-warning']">{{DATA[PARAMS.alias].need ? 'Высокая' : 'Средняя'}}</a></li>
        <li class="list-group-item">Подходит новичкам: <a href="#" :class="['h5', DATA[PARAMS.alias].suitable ? 'text-success' : 'text-danger']">{{DATA[PARAMS.alias].suitable ? "Да" : "Нет"}}</a></li>
      </ul>
      <div class="mt-2" v-html="DATA[PARAMS.alias].mainDescription">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
