<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/"><img src="/assets/img/logo.png" alt="logo"></a>
        <!--media btn-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--#########-->
        <!--header list-->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="pages/catalog.html">All courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">By filters</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" aria-disabled="true">Forum</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
                Help
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">FAQ</a>
                <a class="dropdown-item" href="#">About as</a>
                <a class="dropdown-item" href="#">Feedback</a>
              </div>
            </li>
          </ul>
          <!--############-->
          <!--search block-->
          <form class="form-inline input-group search-block-weight mr-4">
            <input type="search" class="form-control border-dark search-block-height" placeholder="Search">
            <div class="input-group-append">
              <button class="btn btn-outline-dark fa fa-search search-block-height" type="submit"></button>
            </div>
          </form>
          <!--############-->
          <slot></slot>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        showPass: true,
      }
    },
    methods: {
      showPas() {
        if (this.showPass) {
          document.getElementById('showPass').className = 'icoPos eyeSlash';
          document.getElementById('password').type = 'text';
        } else {
          document.getElementById('showPass').className = 'icoPos eye';
          document.getElementById('password').type = 'password';
        }
        this.showPass = !this.showPass;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-block-height {
    height: 30px;
  }

  .search-block-weight {
    width: 170px;
  }
</style>
