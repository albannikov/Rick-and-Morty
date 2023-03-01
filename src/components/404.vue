<script>

</script>

<template>
<div class="container">

  <div class="alert align-items-center">
  <img src="../img/404.png" alt="">

 <p class="alert">Усп. Кажется вы заблудились. Только без паники!</p>
 <p class="content"> Страница, которую вы ищите не существует, либо была удалена</p>

 <router-link to="/" class="btn-back" >Домой</router-link>
    </div>

</div>

</template>

<style scoped>
.alert {
font-family: Montserrat;
font-size: 24px;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: center;
}

.content {
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #000000;
}

.btn-back {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;
color: #000;
text-decoration: none;
background: #000;
color: white;
background-image: url('../img/home.png');
background-position: 25px 15px !important;
background-repeat: no-repeat;
background-position: left;
padding: 15px 25px 15px 55px;
vertical-align: middle;
border-radius: 5px;
border: 0;

}


</style>
