<template>
  <section class="container-fluid text-center">
    <div class="row justify-content-center">
      <!--Greets-->
      <section class="col-12">
        <h2 class="my-3">Начни кодить уже сейчас, сидя дома</h2>
        <h5 class="mb-3 font-weight-light">жми на кнопку ниже и погнали</h5>
        <div class="row justify-content-center">
          <div class="col-4">
            <a class="btn btn-dark btn-lg btn-block" href="#">Хочу стать хацкером!</a>
          </div>
        </div>
      </section>
      <!--Main art/Canvas-->
      <!--<slot name="canvas"></slot>-->
      <div class="col-12 my-5"><img src="/assets/img/index-art.png" width="900"></div>
      <!--Block start-->
      <section class="container-fluid bg-white">
        <div class="container">
          <div class="mb-4">
            <h2 class="text-center font-weight-light">Что ты найдешь на сайте?</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-9">
              Если ты зашел на этот сайт, значит ты скорее всего полный ноль, который решил заниматься
              программированием. Поздравляю, ты попал на нужный сайт. Сдесь собрана большая часть информации со всего
              рунета по многим, интересующим тебя темам
            </div>
            <div class="col-6 d-flex justify-content-between py-4">
              <a href="#"><img src="/assets/img/books.png" width="160" title="Книги"></a>
              <a href="#"><img src="/assets/img/article.png" width="100" title="Статьи"></a>
              <a href="#"><img src="/assets/img/video.png" class="mt-2" width="150" title="Видео"></a>
            </div>
          </div>
        </div>
      </section>
      <!--Block w/ cards-->
      <section class="container text-center">
        <h2 class="font-weight-light">Языки программирования</h2>
        <h5 class="font-weight-light mb-4">и не только</h5>
        <!--Cards-->
        <slot name="cards"></slot>
      </section>
      <!--Block start-->
      <section class="container-fluid bg-white">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-6 text-center">
              <h2 class="font-weight-light mb-2">Без понятия что учить?</h2>
              <p>
                Тогда <a href="#" class="underlined">вот страница</a>, на которой можно узнать о современном IT.
                Расскажут о типах, видах и основе программирования, а так же о карьерном росте в данной сфере.
                Подскажут, что нужно учить и помогут не наступить на грабли
              </p>
              <a href="/pages/catalog.html" class="btn btn-outline-dark mt-4">Отстань, дай посмотрю, что у вас тут
                есть</a>
            </div>
            <div class="col-1 justify-content-start">
              <img src="/assets/img/why.png" width="115" height="230">
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
