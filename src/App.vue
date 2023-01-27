<script>
// import Dashboard from './components/Dashboard.vue';
// import Auth from './components/Auth.vue';
export default {
  
}
</script>

<template>
<!-- Header -->
<div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="./img/logo.png" class="logo">
      </a>

      <ul class="nav col-12 col-md-auto mb-2 d-flex flex-row mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Главная</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Избранное</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">О проекте</a></li>
      </ul>

      <div class="col-md-3 text-end">
    Кнопки
      </div>
    </header>
  </div>
 <!-- Header --> 
  <router-view></router-view>  
  Футер
</template>

<style scoped>


header {
width: 1170px;
height: 112px;
left: 132px;
top: 38px;
}
.logo {
width: 112px;
height: 112px;
left: 132px;
top: 38px;
}
</style>
