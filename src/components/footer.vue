<template>
  <footer class="page-footer stylish-color-dark pt-4">
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-4">Footer Content</h5>
          <p>Thank you for visit our site. If you need extra-information or back links there below.</p>
        </div>
        <hr class="clearfix w-100 d-md-none">
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-4">useful links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </div>
        <hr class="clearfix w-100 d-md-none">
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-3">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>

        </div>
        <hr class="clearfix w-100 d-md-none">
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-3">Donate</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <ul class="list-unstyled list-inline text-center mb-3">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fab fa-facebook-f"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fab fa-dribbble"> </i>
        </a>
      </li>
    </ul>
    <div class="footer-copyright text-center py-3 bg-custom">© 2020 Copyright:
      <a href="https://BG4G.boots/" class="underlined">BG4G.com</a>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .bg-custom {
    background-color: $neutral-custom
  }

  a {
    color: $neutral-placeholder;
  }
</style>
