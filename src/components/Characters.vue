<script setup>
 import { reactive, onMounted } from 'vue';

 let characters = reactive([]);
 
 async function getData() {   
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const result = await response.json();
    characters = result.results;    
    console.log(characters);    
}

onMounted(async () => {
  await getData();  
});

</script>



<template>
  {{ characters.name }}
<div class="container">
  <p class="alert">Персонажи</p>
         <li v-for="character in characters" :key="character.id">  
          <img v-bind:src="character.image" width="90"> 
          {{ character.name }}
         </li>      
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


