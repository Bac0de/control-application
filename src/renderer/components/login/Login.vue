<template>
  <div class="login">
    <h2>안녕하세요!</h2>
    <form method="post" action="/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">아이디</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">비밀번호</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          로그인
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style lang="scss">
  @import "../../assets/sass/_variables.scss";
  @import '../../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import '../../../../node_modules/bootstrap/scss/variables';
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>