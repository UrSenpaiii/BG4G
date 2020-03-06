<template>
  <section class="container">
    <main class="row bg-white justify-content-between p-4">
      <h3>{{selected}}</h3>
      <div class="form-group">
        <h5 class="d-inline mr-2">Chose category:</h5>
        <label>
          <select v-model="selected" class="form-control">
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
        selected: 'All',
        options: [
          {text: 'All', value: 0},
          {text: 'Program languages', value: 1},
          {text: 'Frameworks', value: 2},
          {text: 'OS', value: 3},
          {text: 'Text Editors', value: 4},
          {text: 'Other', value: 5}
        ],
      }
    },
    //   this.selected = option.value;
    //   switch (this.selected) {
    //     case 1:
    //       this.curr = 'Program languages';
    //       break;
    //     case 2:
    //       this.curr = 'Frameworks';
    //       break;
    //     case 3:
    //       this.curr = 'Text Editors';
    //       break;
    //     case 4:
    //       this.curr = 'Other';
    //       break;
    //     default:
    //       this.curr = 'All'
    //   }
  }
</script>
