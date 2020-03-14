<template>
  <!--User block-->
  <div>
    <!--Buttons-->
    <ul class="navbar-nav">
      <li class="nav-btn">
        <a href="#" class="btn btn-sm btn-dark mr-2" @click="modalTitle='Вход', loginPlaceholder='', showPass=true, btnText='Войти', showModal=!showModal">Вход</a>
      </li>
      <li class="nav-btn">
        <a href="#" class="btn btn-sm btn-outline-secondary" @click="modalTitle='Регистрация', loginPlaceholder=' или email', showPass=true, btnText='Зарегистрироваться', showModal=!showModal">Регистрация</a>
      </li>
    </ul>
    <!--Modal-->
    <transition name="modal-fade">
      <div class="modal-backdrop" v-if="showModal" @click="close()"></div>
    </transition>
    <transition name="modal-fade">
      <div class="v-modal" v-if="showModal">
        <!--Modal Content-->
        <div class="modal-content">
          <!--Header-->
          <div class="modal-header">
            <!--Title-->
            <h4 class="modal-title">{{modalTitle}}</h4>
            <!--Close button-->
            <button type="button" class="close" @click="close()">&times;</button>
          </div>
          <!--Body-->
          <div class="modal-body">
            <!--Form-->
            <form method="post" action="">
              <!--Login-->
              <div class="form-group">
                <label for="SignUpLogin" class="h5">Login</label>
                <input type="text" id="SignUpLogin" class="form-control login-ico" name="username" :placeholder="'Enter login' + loginPlaceholder" required>
              </div>
              <!--Email-->
              <div class="form-group" v-if="modalTitle === 'Регистрация'">
                <label for="email">Email адрес</label>
                <input type="email" class="form-control email-ico" id="email" name="email" placeholder="Введите email" required>
              </div>
              <!--Password-->
              <div class="form-group">
                <label for="password1" class="h5">Пароль</label>
                <!--First pass-->
                <div class="mb-2">
                  <i class="ico-pos fas fa-eye" id="showPass" @click="showPas"></i>
                  <input type="password" class="form-control password-ico" id="password1" name="password1" placeholder="Введите пароль" required>
                </div>
                <!--Second pass-->
                <input type="password" v-if="modalTitle === 'Sign up'" class="form-control password-ico" id="password2" name="password2" placeholder="Введите пароль еще раз" required>
              </div>
              <!--Remember-->
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe" name="rememberMe">
                <label class="form-check-label" for="rememberMe">Запомнить меня</label>
              </div>
              <!--Button-->
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-secondary mr-2" @click="close()">Отмена</button>
                <button type="submit" class="btn btn-dark" name="authorization">{{btnText}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script> export default {
  data() {
    return {showModal: false, modalTitle: "", loginPlaceholder: "", btnText: "", showPass: true,}
  },
  methods: {
    close() {
      this.showModal = !this.showModal;
    },
    showPas() {
      if (this.showPass) {
        $('showPass').className = 'ico-pos fas fa-eye-slash';
        $('password1').type = 'text';
      } else {
        $('showPass').className = 'ico-pos fas fa-eye';
        $('password1').type = 'password';
      }
      this.showPass = !this.showPass;
    }
  }
}</script>
<style lang="scss" scoped>
@mixin icon-bg($icon) {
  padding-left: 40px;
  background: url(#{$img-path}icons/#{$icon}.png);
}

.login-ico {
  @include icon-bg(user)
}

.email-ico {
  @include icon-bg(email)
}

.password-ico {
  @include icon-bg(password)
}

.ico-pos {
  position: absolute;
  right: 1.1em;
  width: 24px;
  height: 24px;
  margin: 0.5em;
  cursor: pointer;
  &:hover {
    color: $neutral-regular;
    transition: .4s;
  }
}

.v-modal {
  position: fixed;
  left: calc(50% - 200px);
  z-index: 1050;
  width: 400px;
  overflow: hidden;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-fade-enter, .modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}
</style>
