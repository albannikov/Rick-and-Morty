<script>
 import header from './components/Header.vue';
 

 export default {
     name: 'App',
     components: {
      'webapp-header': header
     },    
         
 }

 window.addEventListener('beforeunload', (event) => {    
    let remember = localStorage.getItem('remember');    
    if (remember != 'yes') {
        localStorage.removeItem('authStatus');  
    }
});

 
</script>


<template>


<webapp-header />
<router-view></router-view>  

</template>

<style scoped>
</style>


