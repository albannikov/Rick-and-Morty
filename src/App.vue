<script>

 import header from './components/Header.vue';

 export default {
     name: 'App',
     components: {
      'webapp-header': header
     },    
 }
</script>

<template>


<webapp-header />

<router-view></router-view>  
  Футер
</template>

<style scoped>
</style>


