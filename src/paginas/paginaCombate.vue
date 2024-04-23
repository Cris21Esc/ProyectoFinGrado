<script setup>
import { onMounted, ref } from 'vue';
import servicioAficiones from "../servicios/servicioAficiones";

let pokemon = ref(null);

function obtenerAficiones(username) {
  servicioAficiones
    .getAll(username)
    .then(response => {
      pokemon.value = response.data;
      console.log(pokemon.value);
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  let username = "cris";

  obtenerAficiones(username);
});
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-body d-flex justify-content-center">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 p-1 d-flex justify-content-center" v-for="poke in pokemon">
              <img class="pokecarta" :src="'/src/assets/imgs/cartas/' + poke.num_pokedex + '.jpg'">
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokecarta {
  max-width: 100%;
  height: 50vh;
}
</style>