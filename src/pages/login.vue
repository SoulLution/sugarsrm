<template>
  <div class="col login h_100 color_input_color j-start">
    <img class="logo" src="@/assets/static/logo.svg">
    <form class="login-content col md-4 w_auto b-radius_15 bgcolor_input_active_bg j-sb p_12" style="background-color: var(--dark)">
      <div class="title fs_2rem">Вход</div>
      <div>
        <v-input style="margin: 16px 0" position="under" placeholder="E-mail" icon="email" type="email" :errno="error" v-model="email.data" @error="e => email.check = e" required/>
        <v-input style="margin: 16px 0" position="under" placeholder="Пароль" type="password" v-model="password .data" @error="e => password.check = e" required/>
      </div>
      <v-button style="margin: 16px 0" title="Войти" :load="loading ? 1 : 0" :disabled=" email.check || password.check ? true : false" @click="setLogin()" />
    </form>
  </div>
</template>

<script>
export default {
  data(){
  	return {
      email: {
        data: '',
        check: true
      },
      password: {
        data: '',
        check: true
      },
      loading: false,
      error: ''
  	}
  },
  methods:{
    setLogin(){
      let data = {
        method: "signin",
        login: this.email.data,
        password: this.password.data
      }
      this.$axios.post('users', data)
      .then( res => {
        // this.$setCookie(res.data.cook, res.data.token, 365)
        if(res.data.cook === 'SIS')
          this.$router.push('/student/calendar/')
        else
          this.$router.push('/teacher/calendar/')
      })
      .catch( err => {
        this.error = 'Неверный логин или пароль'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    height: 100vh;
  }
  .login-content{
    padding: 12px;
    height: 50vh;
    flex-wrap: nowrap;
  }
  .logo{
    max-width: 300px;
    margin: 5% 0 32px;
  }
</style>
