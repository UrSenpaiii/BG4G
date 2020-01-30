<template>
  <section class="container">
    <div class="row bg-white row d-flex justify-content-between p-3">
      <div class="pl-3">
        <div class="h3" v-if="selected === ''">All</div>
        <div class="h3" v-else-if="selected === 1">Program languages</div>
        <div class="h3" v-else-if="selected === 2">Frameworks</div>
        <div class="h3" v-else-if="selected === 3">OS</div>
        <div class="h3" v-else-if="selected === 4">Text Editors</div>
        <div class="h3" v-else-if="selected === 5">Other</div>
      </div>
      <div class="form-group">
        <label class="pr-3">
          <select v-model="selected" class="form-control">
            <option disabled value="">Choose category</option>
            <option v-for="option in options" :value="option.value">
              {{option.text}}
            </option>
          </select>
        </label>
      </div>
      <div class="row col-12 m-0 p-0 ">
        <slot></slot>
      </div>
    </div>
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

<style scoped>

</style>
