<script setup>
import barraMenu from './components/menu.vue'
import { ref } from 'vue'
</script>

<template>
  <header>      
     <barraMenu titulo="Menú Principal" :links="['inicio','listar','combate']"/>    
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
