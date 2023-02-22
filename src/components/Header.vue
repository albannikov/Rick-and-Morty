<script>
import ModalWindow from './modal-window.vue' 
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });

export default {
    name: 'App',  
    components: {
        ModalWindow         
    },
    methods: {
        showModalReg: function () {
            this.$refs.modalreg.show = true  
        },
        showModalTwo: function () {
            this.$refs.modalenter.show = true
          },
        userName(){
          if (localStorage.getItem('authStatus') && localStorage.getItem('name') && localStorage.getItem('surname')) {
            let userName = localStorage.getItem('name') + " " + localStorage.getItem('surname').split('')[0] + ".";
          return userName;
        } else {return 0}
        },
        userLogout() {
          localStorage.removeItem('authStatus');
          this.$forceUpdate(); 
        },
        check () {
          //Авторизация
          let storedLogin = localStorage.getItem('login');
          let storedPass = localStorage.getItem('pass');
          let userName = document.getElementById('userName');
          let userPw = document.getElementById('userPw');
          let userRemember = "";          
          if(userName.value == storedLogin && userPw.value == storedPass){
              localStorage.setItem('authStatus', true);
              document.getElementById("modal-shadow").hidden = true; 
              document.getElementById("modal").hidden = true;        
              toaster.success('Вы успешно авторизовались', {position:"bottom-right", duration: 4000});       
              this.$forceUpdate();  
                  if (document.getElementById("rememberMe").checked == true) {
                      localStorage.setItem('remember', "yes");} 
                      else { localStorage.setItem('remember', "no");}   
          }else{
              toaster.error('Укажите корректные данные для входа', {position:"bottom-right", duration: 4000});
          }
          },
          //Регистрация
          store(){
          let email = document.getElementById('email');
          let login = document.getElementById('login');
          let name = document.getElementById('name');
          let surname = document.getElementById('surname');
          let pass = document.getElementById('pass');
          let pass_retry = document.getElementById('pass_retry');
          let lowerCaseLetters = /[a-z]/g;
          let upperCaseLetters = /[A-Z]/g;
          let numbers = /[0-9]/g;

          if(email.value.length == 0){
              toaster.error('Заполните поле email', {position:"bottom-right", duration: 4000});

          }else if(pass.value.length == 0){
              toaster.error('Введите пароль', {position:"bottom-right", duration: 4000});

          }else if(pass.value.length < 6 || pass.value.length > 50){
              toaster.error('Пароль может быть от 6 до 50 символов', {position:"bottom-right", duration: 4000});

          }else if(!pass.value.match(numbers)){
              toaster.error('Пароль должен содержать цифры', {position:"bottom-right", duration: 4000});

          }else if(!pass.value.match(upperCaseLetters)){
              toaster.error('Пароль должен содержать латинские символы верхнего регистра', {position:"bottom-right", duration: 4000});

          }else if(!pass.value.match(lowerCaseLetters)){
              toaster.error('Пароль должен содержать латинские символы нижнего регистра', {position:"bottom-right", duration: 4000});

          } else if (pass.value != pass_retry.value) {
              toaster.error('Пароли не совпадают', {position:"bottom-right", duration: 4000});

          }else{  
              localStorage.setItem('email', email.value);
              localStorage.setItem('login', login.value);
              localStorage.setItem('name', name.value);
              localStorage.setItem('surname', surname.value);
              localStorage.setItem('pass', pass.value);
              
              document.getElementById("modal-shadow").hidden = true; 
              document.getElementById("modal").hidden = true;     
              toaster.success('Пользователь успешно зарегистрирован', {position:"bottom-right", duration: 4000});              
          }
          }
      }
  }
</script>



<template>
<!-- Header -->
<header>  
<div class="container">
  <div class="row d-flex align-items-center">
  <div class="col-6 col-md-2"> 
    <a href="/"><img src="../img/logo.png" class="logo"></a>
  </div>
  <div class="col-6 col-md-6">
    <ul class="nav col col-xs-12">
         <li><router-link to="/" class="nav-link px-2">Главная</router-link></li>
        <li><router-link to="/about" class="nav-link px-2">О проекте</router-link></li>
       </ul>  
  </div>
  <div class="col-6 col-md-4 d-flex justify-content-end"> 
  <!-- Если авторизован  -->
  <div v-if="userName()">  
    {{ userName() }}
    <button class="btn-exit" @click="userLogout">Выйти</button>
  </div>
  <!-- Если не авторизован  -->
  <div v-else>
  <button class="btn-reg" @click="showModalReg">Регистрация</button> 
  <button class="btn-enter" @click="showModalTwo">Вход</button>
</div>
  <!-- Реистрация  -->
  <modal-window ref="modalreg">
    <template v-slot:body>
            <div class="login">
              <form name='form-login'>
                <h2>Регистрация</h2>
                  <input readonly onfocus="this.removeAttribute('readonly');" class="input" type="email" id="email" placeholder="Введите Email" required>
                  <input readonly onfocus="this.removeAttribute('readonly');" class="input" type="text" id="login" placeholder="Придумайте логин" required>
                  <input readonly onfocus="this.removeAttribute('readonly');" class="input" type="text" id="name" placeholder="Введите имя" required>
                  <input readonly onfocus="this.removeAttribute('readonly');" class="input" type="text" id="surname" placeholder="Введите фамилию" required>     
                  <input readonly onfocus="this.removeAttribute('readonly');" class="input" type="password" id="pass" placeholder="Ведите пароль" required>
                  <input readonly onfocus="this.removeAttribute('readonly');" class="input" type="password" id="pass_retry" placeholder="Ведите пароль" required>
                  <input class="rgstr_btn" id="rgstr_btn" type="submit" value="Зарегистрировать" onclick="store()">
              </form>
           </div>
      </template>
  </modal-window>
 <!-- Реистрация  -->

 <!-- Вход  -->
  <modal-window ref="modalenter">      
            <template v-slot:body>
                <div class="login">
                    <form name='form-login'>
                        <h2>Вход</h2>
                        
                        <input readonly onfocus="this.removeAttribute('readonly');" type="text" id="userName" class="input" placeholder="Введите логин или E-mail" required>                        
                        <input readonly onfocus="this.removeAttribute('readonly');" type="password" id= "userPw" class="input" placeholder="Введите пароль" required>

                        <div id="remember" class="remember">
                            <input type="checkbox" value="lsRememberMe" id="rememberMe"
                                  style="display: inline-block;">
                            <label>Запомнить</label>
                        </div>
                        <input class="rgstr_btn" id= "login_btn" type="submit" value="Войти" @click="check">
                    </form>
                </div>
            </template>        
        </modal-window>
<!-- Вход  -->

  </div>
  </div>
</div>
</header>  
 <!-- Header --> 
</template>

<style scoped>

.rgstr_btn {
background: #000000;
border-radius: 5px;
width: 236px;
height: 49px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;
text-align: center;
margin-top: 40px;
}

input::placeholder {
font-family: 'Montserrat';
font-style: bold;
font-weight: 500;
padding: 10px;
font-size: 12px;
color: #686868;

}



label {
margin-left: 10px;
}

h2 { 
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
line-height: 48px;
color: #000000;  
}

.input {
width: 100%;
height: 36px;
background: rgba(162, 162, 162, 0.1);
border: 1px solid rgba(162, 162, 162, 0.6);
border-radius: 5px;
margin-top: 35px;
padding-bottom: 5px;
}
.remember {
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
color: #000000;
text-align: left;
margin-top: 30px;
}

.btn-reg {
box-sizing: border-box;
width: 188px;
height: 49px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius: 5px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #000000;
margin-right: 30px;
}

.btn-exit {
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 10px;
  height: 49px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-right: 30px;
}

.btn-enter {
background: #000000;
border-radius: 5px;
width: 123.57px;
height: 49px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;
margin-left: 10px;
}

header {
height: 112px;
padding-top: 32px;
margin-bottom: 72px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #000000;
}
.logo {
width: 112px;
height: 112px;
left: 132px;
top: 38px;
}

a {
    color: black;
}

.router-link-active {
    color:red;
}



</style>
  