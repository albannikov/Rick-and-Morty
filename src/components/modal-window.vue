<script>
export default {
    name: "ModalWindow",
    data: function () {
        return {
            show: false
        }
    },
    methods: {
        closeModal: function () {
            this.show = false
        }
    }
}
//Регистрация
window.store = function(){
    
// login
// name
// surname

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
    alert('Please fill in email');

}else if(pass.value.length == 0){
    alert('Please fill in password');

}else if(email.value.length == 0 && pass.value.length == 0){
    alert('Please fill in email and password');

}else if(pass.value.length > 8){
    alert('Max of 8');

}else if(!pass.value.match(numbers)){
    alert('please add 1 number');

}else if(!pass.value.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');

}else if(!pass.value.match(lowerCaseLetters)){
    alert('please add 1 lovercase letter');

} else if (pass.value != pass_retry.value) {
    alert('Пароли не совпадают');

}else{  //Если все проверки успешны
    localStorage.setItem('email', email.value);
    localStorage.setItem('login', login.value);
    localStorage.setItem('name', name.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('pass', pass.value);
    alert('Пользователь успешно зарегистрирован');
}
}


//Вход
window.check = function(){
var storedName = localStorage.getItem('name');
var storedPw = localStorage.getItem('pw');

var userName = document.getElementById('userName');
var userPw = document.getElementById('userPw');
var userRemember = document.getElementById("rememberMe");

if(userName.value == storedName && userPw.value == storedPw){
    alert('You are logged in.');
}else{
    alert('Error on login');
}
}
</script>


<template>
 <div v-if="show" class="modal-shadow" @click.self="closeModal">
  <div class="modal">           
   <slot name="body"></slot>  
  </div>
 </div>
</template>    
    
<style scoped lang="scss">       
       
       .modal-shadow {
              position: absolute;
              top: 0;
              left: 0;
              min-height: 100%;
              width: 100%;
              background: rgba(0, 0, 0, 0.39);
       }

       .modal {
              box-sizing: border-box;
              position: absolute;
              display: inline-block;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 370px;
              height: 637px;
              background: #FFFFFF;
              border: 1px dashed rgba(162, 162, 162, 0.6);
              box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.3);
              border-radius: 5px;
              padding: 20px;
              text-align:center;


              &-title {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 36px;
              line-height: 44px;             
              color: #000000;
              margin: 30px;
              text-align: center;
              }

              &-content {
                     margin-bottom: 20px
              }

              &-footer {
                     &__button {
                     background-color: #0971c7;
                     color: #fff;
                     border: none;
                     text-align: center;
                     padding: 8px;
                     font-size: 17px;
                     font-weight: 500;
                     border-radius: 8px;
                     min-width: 150px;
                     }
              }
       }       
</style>