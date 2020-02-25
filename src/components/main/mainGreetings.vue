<template>
  <section class="container-fluid text-center">
    <div class="row justify-content-center">
      <!--Greets-->
      <section class="col-12 align-self-center">
        <h2 class="my-3">Начни кодить уже сейчас, сидя дома</h2>
        <h5 class="mb-3 font-weight-light">жми на кнопку ниже и погнали</h5>
        <div class="row justify-content-center">
          <div class="col-4">
            <a class="btn btn-dark btn-lg btn-block" href="#">Хочу стать хацкером!</a>
          </div>
        </div>
        <p class="my-3">
          (<a class="underlined" href="#">не хочу ничего читать, покажи видосы!</a>)
        </p>
      </section>
      <!---------->
      <slot name="canvas"></slot>
      <!--<div class="col-12 my-5"><img src="/assets/img/index-art.png" width="900"></div>-->
      <!--Block start-->
      <section class="container-fluid bg-white">
        <div class="container">
          <div class="row mb-4">
            <div class="col-12 text-center">
              <h2 class="font-weight-light">Что ты найдешь на сайте?</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-9">
              Ну попал ты сюда неслучайно, значит ты скорее всего полный ноль, который решил заниматься
              программированием, Поздравляю,
              ты попал на нужный сайт. Сдесь собрана большая часть информации по многим, интересующим тебя темам.
            </div>
            <div class="col-6 d-flex justify-content-between py-4">
              <a href="#"><img src="/assets/img/books.svg" alt="books" height="160" width="160"></a>
              <a href="#"><img src="/assets/img/videos.svg" alt="books" height="160" width="160"></a>
            </div>
          </div>
        </div>
      </section>
      <!--------------->
      <!--Block start-->
      <section class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="font-weight-light">Языки программирования</h2>
            <h5 class="font-weight-light">и не только</h5>
          </div>
        </div>
      <!--Cards-->
      <slot name="cards"></slot>
      <!--------->
      </section>
      <!--------------->
      <!--Block start-->
      <section class="container-fluid bg-white">
        <div class="container">
          <div class="row justify-content-center px-4">
            <div class="col-7 text-center">
              <h2 class="font-weight-light">Без понятия что учить?</h2>
              <p>
                Тогда <a href="#" class="underlined">вот страница</a>, на которой тебе всё
                объяснят
                о современном IT. Расскажут о типах, видах и фундаментальных темах программирования, а так же о
                професиях и карьерном росте в данной сфере
                <br>
                <a href="/pages/catalog.html" class="btn btn-outline-dark mt-4">Отстань, дай посмотрю, что у
                  вас
                  тут есть</a>
              </p>
            </div>
            <div class="col-2 justify-content-start">
              <img src="/assets/img/why.png" width="115" height="230">
            </div>
          </div>
        </div>
      </section>
      <!--------------->
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

</style>
