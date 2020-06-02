<template>
  <section class="container">
    <main class="row bg-white justify-content-between p-4">
      <h3>{{options[selected]}}</h3>
      <div class="form-group">
        <h5 class="d-inline mr-2">Выберите категорию:</h5>
        <label>
          <select v-model="selected">
            <option v-for="(option, i) in options" :value="i">{{option}}</option>
          </select>
        </label>
      </div>
      <div class="row col-12">
        <v-catalog-card v-for="(e, i) in list" :key="i" :contentObj="e"></v-catalog-card>
      </div>
    </main>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        selected: 0,
        options: [
          "Все", "Языки программирования", "Фреймворки", "OC", "Текстовые редакторы", "Другое"
        ],
        DATA: null,
      }
    },
    mounted() {
      bus.$on("catalogDATA", (DATAs) => {
        this.DATA = DATAs;
      })
    },
    computed: {
      list() {
        let result = [];
        for (let key in this.DATA) {
          let e = this.DATA[key];
          if (this.selected === 0 || this.selected === e.type)
            result.push(e);
          if (!e.frameworks || (this.selected !== 2 && this.selected !== 0)) continue;
          for (let k in e.frameworks) {
            let f = e.frameworks[k];
            result.push(e);
          }
        }
        return result;
      }
    }
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
