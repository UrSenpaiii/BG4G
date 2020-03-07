<template>
  <footer class="page-footer stylish-color-dark pt-4">
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <div class="row">
        <div class="col-5">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-4">Авторские права</h5>
          <p>Вся представленная информация на сайте была взята из свободного доступа в интернете. Если ваши АП были нарушены, обратитесь на почту sd103e@mail.ru</p>
        </div>
        <hr>
        <div class="col-2">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-4">useful links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="underlined">Link 1</a>
            </li>
            <li>
              <a href="#" class="underlined">Link 2</a>
            </li>
            <li>
              <a href="#" class="underlined">Link 3</a>
            </li>
          </ul>
        </div>
        <hr>
        <div class="col-2">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-3">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="underlined">Link 1</a>
            </li>
            <li>
              <a href="#" class="underlined">Link 2</a>
            </li>
            <li>
              <a href="#" class="underlined">Link 3</a>
            </li>
          </ul>
        </div>
        <hr class="clearfix w-100 d-md-none">
        <div class="col-2">
          <h5 class="font-weight-bold text-uppercase mt-1 mb-3">Donate</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="underlined">Link 1</a>
            </li>
            <li>
              <a href="#" class="underlined">Link 2</a>
            </li>
            <li>
              <a href="#" class="underlined">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <!--Soc networks-->
    <ul class="list-unstyled list-inline text-center mb-3">
      <li class="list-inline-item">
        <a class="fab fa-facebook-f" title="FACEBOOK"></a>
      </li>
      <li class="list-inline-item">
        <a class="fab fa-soundcloud" title="SoundCloud"></a>
      </li>
      <li class="list-inline-item">
        <a class="fab fa-twitter" title="Twitter"></a>
      </li>
      <li class="list-inline-item">
        <a class="fab fa-vk" title="vk"></a>
      </li>
    </ul>
    <!--Copyright-->
    <div class="footer-copyright text-center py-3 bg-custom">
      <p>© 2020 Copyright: <a href="https://BG4G.boots/" class="underlined">BG4G.com</a></p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .bg-custom {
    background-color: $neutral-custom
  }

  a {
    color: $neutral-placeholder;
    &:hover {
    color: #fff;
  }
  }
</style>
