<template>
  <section class="container">
    <main class="row bg-white justify-content-between p-4">
      <h3 v-if="selected === ''">All</h3>
      <h3 v-else-if="selected === 1">Program languages</h3>
      <h3 v-else-if="selected === 2">Frameworks</h3>
      <h3 v-else-if="selected === 3">OS</h3>
      <h3 v-else-if="selected === 4">Text Editors</h3>
      <h3 v-else-if="selected === 5">Other</h3>
      <div class="form-group">
        <label>
          <select v-model="selected" class="form-control">
            <option disabled value="">Choose category</option>
            <option v-for="option in options" :value="option.value">
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
        selected: '',
        options: [
          {text: 'Program languages', value: 1},
          {text: 'Frameworks', value: 2},
          {text: 'OS', value: 3},
          {text: 'Text Editors', value: 4},
          {text: 'Other', value: 5}
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
