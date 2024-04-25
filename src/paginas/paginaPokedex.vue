<script setup>
import { onMounted, ref } from 'vue';
import servicioAficiones from "../servicios/servicioAficiones";

let pokemon = ref(null);

function obtenerAficiones(username) {
  servicioAficiones
    .getAll(username)
    .then(response => {
      pokemon.value = response.data;
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
  <div class="row mx-0">
    <div class="col d-flex justify-content-center">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="pokecarta col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3" v-for="poke in pokemon">
              <div class="face front">
                <img :src="'/src/assets/imgs/cartas/' + poke.num_pokedex + '.jpg'" loading="lazy">
              </div>
              <div class="face back">
              </div>
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
    height: 60vh;
    perspective: 600px;
}

.pokecarta .face {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    transition: .5s;
    position: relative; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.pokecarta .face {
    transform: rotateY(0deg);
    box-shadow: 0 5px 10px black;
}

.pokecarta .front img {
    width: 100%;
    height: 100%;
}

.pokecarta .back {
    transform: rotateY(180deg);
    background-image: url('/src/assets/imgs/pokeballl.png');
    background-color: hsl(0, 10%, 50%);
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    display: flex;
    padding: 15px;
    position: absolute;
    color: whitesmoke;
    text-shadow: 0 0 0.2em black, 0 0 0.2em black;
    box-shadow: 0 5px 10px black;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.back img {
    width: 30%;
    height: 20%;
}

.pokecarta:hover .front {
    transform: rotateY(180deg);
}

.pokecarta:hover .back {
    transform: rotateY(360deg);
}
</style>