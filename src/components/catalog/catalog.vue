<template>
  <section class="container">
    <main class="row bg-white justify-content-between p-4">
      <h3>{{selected}}</h3>
      <div class="form-group">
        <h5 class="d-inline mr-2">Выберите категорию:</h5>
        <label>
          <select v-model="selected">
            <option v-for="option in options" :value="option.text">
              {{option.text}}
            </option>
          </select>
        </label>
      </div>
      <div class="row col-12">
        <slot></slot>
      </div>
    </main>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'Все',
        options: [
          {text: 'Все', value: 0},
          {text: 'Языки программирования', value: 1},
          {text: 'Фреймворки', value: 2},
          {text: 'ОС', value: 3},
          {text: 'Текстовые редакторы', value: 4},
          {text: 'Другое', value: 5}
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  select {
    padding: 5px 5px 2px 5px;
    border: 0;
    border-bottom: 1px solid silver;
    border-radius: 0;
  }
</style>
