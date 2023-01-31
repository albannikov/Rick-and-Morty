<script>
 import ModalWindow from './modal-reg.vue';

 export default {
     name: 'App',
     components: {
         ModalWindow
     },
     methods: {
         showModal: function () {
             this.$refs.modal.show = true
         }
     },
 }

</script>

<template>
<!-- Header -->
<header>
<div class="container">
  <div class="row d-flex align-items-center">
  <div class="col-6 col-md-4"> 
    <a href="/"><img src="../img/logo.png" class="logo"></a>
  </div>
  <div class="col-6 col-md-4">
    <ul class="nav col col-xs-12">
         <li><router-link to="/" class="nav-link px-2">Главная</router-link></li>
        <li><router-link to="/auth" class="nav-link px-2">О проекте</router-link></li>
      </ul>  
  </div>
  <div class="col-6 col-md-4 d-flex justify-content-end">
    <button class="btn-reg show-modal-button" @click="showModal">Регистрация</button> 
    <button class="btn-enter show-modal-button" @click="showModal">Вход</button> 
  </div>
  </div>
</div>



 

 <modal-window ref="modal"></modal-window>
</header>

  
 <!-- Header --> 
</template>

<style scoped>

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
}

header {
height: 112px;
padding-top: 32px;
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
  