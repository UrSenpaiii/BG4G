<template>
  <section class="container">
    <main class="bg-white row justify-content-center">
      <aside class="col-3 border-right">
        <div class="p-3">
          <h3 class="mb-3">Фильтры</h3>
          <ul class="mb-2">
            <li class="h5">Group Title</li>
            <li class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
              <label class="form-check-label" for="defaultCheck1">
                Default checkbox
              </label>
            </li>
            <li class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
              <label class="form-check-label" for="defaultCheck2">
                Disabled checkbox
              </label>
            </li>
          </ul>
          <ul class="mb-2">
            <li class="form-group">
              <h5 class="d-inline mr-2">Выберите категорию:</h5>
              <label>
                <select v-model="selected">
                  <option v-for="option in options" :value="option.text">
                    {{option.text}}
                  </option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </aside>
      <article class="col-9 p-4">
        dolorum error eveniet ipsum iure
        laudantium mollitia odio perferendis porro suscipit ullam veniam, voluptates.
      </article>
    </main>
  </section>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      },
      filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
