<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light" @click="bus.$emit('click');">
        <h1><a class="navbar-brand" href="/"><img src="/assets/img/logo.png" alt="logo"></a></h1>
        <!--Media btn-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--Header List-->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!--Items-->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/pages/catalog.html">Все курсы</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/filters.html">Фильтры</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" aria-disabled="true">Форум</a>
            </li>
            <!--Drop down menu-->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">Помощь</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">FAQ</a>
                <a class="dropdown-item" href="#">О нас</a>
                <a class="dropdown-item" href="#">Обратная связь</a>
              </div>
            </li>
          </ul>
          <!--Search Block-->
          <form class="form-inline input-group search-block-weight mr-4">
            <input type="search" class="form-control border-dark search-block-height" placeholder="Поиск">
            <div class="input-group-append">
              <button class="btn btn-outline-dark fa fa-search search-block-height" type="submit" title="Искать"></button>
            </div>
          </form>
          <!--Modal/User block-->
          <slot></slot>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .search-block-height {
    height: 30px;
  }

  .search-block-weight {
    width: 170px;
  }
</style>
