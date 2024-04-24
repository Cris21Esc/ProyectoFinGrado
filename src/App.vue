<script setup>
import barraMenu from './components/menu.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ref } from 'vue'
</script>

<template>
  <header>      
     <barraMenu titulo="Menú Principal" :links="['inicio','listar','pokedex']"/>    
  </header>
  
  <main>   
    <RouterView />
  </main>
  
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
