<script>
 import ModalWindow from './components/modal-reg.vue'
 
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
<header class="font-header">
<div class="container">
  <div class="row d-flex align-items-center">
  <div class="col-6 col-md-4"> 
    <a href="/"><img src="./img/logo.png" class="logo"></a>
  </div>
  <div class="col-6 col-md-4">
    <ul class="nav col col-xs-12">
        <li><a href="#" class="nav-link px-2 link-secondary">Главная</a></li>
        <!-- <li><a href="#" class="nav-link px-2 link-dark">Избранное</a></li> -->
        <li><a href="#" class="nav-link px-2 link-dark">О проекте</a></li>
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
  <router-view></router-view>  
  Футер
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
}
.logo {
width: 112px;
height: 112px;
left: 132px;
top: 38px;
}

.font-header {
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #000000;
}
</style>
