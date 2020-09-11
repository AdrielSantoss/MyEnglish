<template>
  <div class="login-wrapper mt-5">
      <div class="login">
<div class="hello">
          <span class="icon icon--circle">
                <svg width="30" height="30" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#uk-flag)"><path d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z" fill="#fff"></path><path d="M5.788 10.953a27.898 27.898 0 00-4.823 9.743H15.53l-9.743-9.743zM55.035 20.696a27.901 27.901 0 00-4.823-9.743l-9.743 9.743h14.566zM.965 35.304a27.9 27.9 0 004.823 9.743l9.743-9.742H.965zM45.047 5.788A27.9 27.9 0 0035.304.965V15.53l9.743-9.743zM10.953 50.212a27.9 27.9 0 009.743 4.823V40.47l-9.743 9.743zM20.696.965a27.9 27.9 0 00-9.743 4.823l9.743 9.743V.965zM35.304 55.035a27.9 27.9 0 009.743-4.823l-9.743-9.743v14.566zM40.47 35.304l9.742 9.743a27.9 27.9 0 004.823-9.742H40.47z" fill="#154CCF"></path><path d="M55.763 24.348h-24.11V.237a28.28 28.28 0 00-7.305 0v24.11H.237a28.28 28.28 0 000 7.305h24.11v24.111a28.285 28.285 0 007.305 0v-24.11h24.111a28.285 28.285 0 000-7.305z" fill="#E74A3F"></path><path d="M35.304 35.304L47.8 47.8a28.082 28.082 0 001.646-1.797L38.748 35.303h-3.444zM20.696 35.304L8.2 47.8a28.077 28.077 0 001.798 1.646l10.697-10.697v-3.444zM20.696 20.696L8.2 8.2a28.07 28.07 0 00-1.646 1.798l10.697 10.697h3.444zM35.304 20.696L47.8 8.2a28.068 28.068 0 00-1.797-1.646L35.304 17.253v3.443z" fill="#E74A3F"></path><path d="M55.5 28c0 15.188-12.312 27.5-27.5 27.5S.5 43.188.5 28 12.812.5 28 .5 55.5 12.812 55.5 28z" stroke="#000" stroke-opacity=".1" fill="none"></path></g><defs><clipPath id="uk-flag"><path fill="#fff" d="M0 0h56v56H0z"></path></clipPath></defs></svg>
            </span>
            <h1 class="hello-title">Hello</h1>
      </div>
       <center>Wellcome again to MyEnglish, por favor entre com sua conta</center> 
       <hr>
      <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="digite seu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Senha" label-for="input-3">
         <b-form-input
          id="input-2"
          type="password"
          v-model="password"
          required
          placeholder="Digite sua senha"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4">
             Não possui uma conta? <router-link to="/register"> clique aqui</router-link>  <br>
            <span class="msg">{{msg}}</span>
      </b-form-group>
      <b-button class="mr-2" type="submit" variant="primary">Logar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
      </div>
  </div>
</template>

<script>
import UserService from '../services/users'

export default {
    name: "Login",
    data: function(){
        return {
            msg: '',
            name: '',
            password: '',
            email: ''
        }
    },
    methods: {
      onReset(evt) {
        evt.preventDefault()
        this.email = ''
        this.name = ''
        this.password = ''
        this.confirmPassword = ''

        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onSubmit(evt){
        evt.preventDefault()
        this.msg = ''
            const funcAsync = async()=>{
            try {
              await UserService.login({email: this.email, password: this.password})
              this.$router.push('/')
            } catch (err) {
              if(err == "Error: Request failed with status code 401"){
                  this.msg = 'Email ou senha incorretas'
              }
               
            }
          }
          funcAsync()
      }

    },
    mounted(){
        if(localStorage.getItem('user_MyEnglish')){
             this.$router.push('/')
        }
  }
}
</script>

<style>
.login-wrapper{
    background-color: white;
    color:black;
    height: 450px;
    width: 450px;
    padding: 10px;
    box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);
    margin-left: 70px;

}
.hello{
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 5px;
}
.hello-title{
    font-size: 25px;
    margin-top: 5px;
    margin-left: 10px;
}
.msg{
  color: red
}
</style>