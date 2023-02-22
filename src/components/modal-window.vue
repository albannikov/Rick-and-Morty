<script>
//Уведомления
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });

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
// //Регистрация
// window.store = function(){

// let email = document.getElementById('email');
// let login = document.getElementById('login');
// let name = document.getElementById('name');
// let surname = document.getElementById('surname');
// let pass = document.getElementById('pass');
// let pass_retry = document.getElementById('pass_retry');
// let lowerCaseLetters = /[a-z]/g;
// let upperCaseLetters = /[A-Z]/g;
// let numbers = /[0-9]/g;

// if(email.value.length == 0){
//     toaster.error('Заполните поле email', {position:"bottom-right", duration: 4000});

// }else if(pass.value.length == 0){
//     toaster.error('Введите пароль', {position:"bottom-right", duration: 4000});

// }else if(pass.value.length < 6 || pass.value.length > 50){
//     toaster.error('Пароль может быть от 6 до 50 символов', {position:"bottom-right", duration: 4000});

// }else if(!pass.value.match(numbers)){
//     toaster.error('Пароль должен содержать цифры', {position:"bottom-right", duration: 4000});

// }else if(!pass.value.match(upperCaseLetters)){
//     toaster.error('Пароль должен содержать латинские символы верхнего регистра', {position:"bottom-right", duration: 4000});

// }else if(!pass.value.match(lowerCaseLetters)){
//     toaster.error('Пароль должен содержать латинские символы нижнего регистра', {position:"bottom-right", duration: 4000});

// } else if (pass.value != pass_retry.value) {
//     toaster.error('Пароли не совпадают', {position:"bottom-right", duration: 4000});

// }else{  //Если все проверки успешны
//     localStorage.setItem('email', email.value);
//     localStorage.setItem('login', login.value);
//     localStorage.setItem('name', name.value);
//     localStorage.setItem('surname', surname.value);
//     localStorage.setItem('pass', pass.value);
    
//     document.getElementById("modal-shadow").hidden = true; 
//     document.getElementById("modal").hidden = true;     
//     toaster.success('Пользователь успешно зарегистрирован', {position:"bottom-right", duration: 4000});
    
// }
// }
</script>


<template>
  
 <div id="modal-shadow" v-if="show" class="modal-shadow" @click.self="closeModal">
    <img class="image8" src="../img/image8.png"> 
    <img class="image9" src="../img/image9.png"> 
    <img class="image10" src="../img/image10.png"> 
  <div id="modal" class="modal">          
   <slot name="body"></slot>    
  </div>
 </div>
</template>    
    
<style scoped lang="scss">     

        .image8 {
        position: absolute;
        width: 205px;        
        top: 12%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        }
       .image9 {
        position: absolute;
        width: 92.79px;
        height: 286.21px;
        left: 60%;
        top: 20%;
        transform: rotate(40deg);
       }

       .image10 {
        position: absolute;
        width: 254px;
        left: 30%;
        top: 20%;        
        transform: rotate(-50deg);
       }
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
              top: 18%;
              left: 50%;
              transform: translate(-50%);
              width: 370px;
              height: fit-content;
              background: #FFFFFF;
              border: 1px dashed rgba(162, 162, 162, 0.6);
              box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.3);
              border-radius: 5px;
              padding: 35px 20px;
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