<script>
 import ModalWindow from '../components/modal-reg.vue'
 
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
  
 <h2>kjdshkjfhdskfhkjsdh</h2>
 <div class="container">
 <div class="row align-items-center">
    <div class="col">
      Одна из трёх колонок
    </div>
    <div class="col">
      Одна из трёх колонок
    </div>
    <div class="col">
      Одна из трёх колонок
    </div>
  </div>
</div>

 <button сlass="show-modal-button" @click="showModal">Показать модальное окно</button> 
 <modal-window ref="modal"></modal-window>


</template>

<style scoped>

</style>
