<template>
          <div class="menu-content">
                <h1 class="title"> Melhor software para o aprendizado de inglês - com o melhor ritmo de aprendizado.</h1>
                <p class="mt-4"> ipsum porro vitae ullam quaerat distinctio, labore dolor hic veritatis natus enim quam praesentium, ipsam iusto?</p>

                <div class="login-container" v-show="user">
                    <p class="login-msg">Seja muito bem vindo {{name}}, o que deseja fazer?</p>
                    <div class="buttons-authentication">
                       <router-link to="/start"><b-button  variant="dark" size="lg" class="mr-3">Começar</b-button></router-link>
                       <b-button  variant="dark" size="lg">ChatRoom</b-button>
                    </div>
                </div>
                <div class="login-container" v-show="!user">
                    <p class="login-msg">Faça login para começar</p>
                    <div class="buttons-authentication">
                        <b-button  variant="outline-secondary" class="mr-5 " size='lg' @click="redirect">Login</b-button> 
                        <router-link to="/register"> <b-button  variant="outline-primary" size='lg' @click="formChange">Register</b-button></router-link>
                    </div>
                </div>
          </div>  
</template>

<script>
export default {    
    name:'MenuContainer',
    data: function(){
        return {
            user: false,
            name: ''
        }
    },
    methods: {
        formChange(){
            this.Loginform = !this.Loginform
        },
        redirect(){
            this.$router.push('/login')
        }
    },
    mounted(){
        if(localStorage.getItem('user_MyEnglish')){
             let user = JSON.parse(localStorage.getItem('user_MyEnglish'))
             this.user = user 
             this.name = user.name
        }
  }
}
</script>

<style>
.title{
    font-size: 45px;
}
.menu-content {
   width: 500px;
   margin-left: 50px;
   margin-top: 70px;
}
.menu-content p{
    font-size: 20px;
}
.btn-container{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.login-container{
    background-color: white;
    width: 500px;
    height: 125px;
    margin-top: 80px;
    text-align: center;
    color: black;
    box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);
}
.buttons-authentication{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.login-msg{
    padding: 5px;
    
}
.register-content {
    display: flex;
    align-items: center;
    margin-left: 50px;
}


</style>