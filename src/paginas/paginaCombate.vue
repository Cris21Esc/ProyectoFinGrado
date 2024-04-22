<template>
    <div class="combat-screen">
      <!-- Información de los Pokémon -->
      <div class="pokemon-info" v-for="(pokemon, index) in playerTeam" :key="index">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.image" :alt="pokemon.name" />
        <p>Salud: {{ pokemon.health }}</p>
        <p>Ataque: {{ pokemon.attack }}</p>
        <p>Defensa: {{ pokemon.defense }}</p>
      </div>
  
      <!-- Acciones del jugador -->
      <div class="player-actions">
        <button v-for="(move, index) in currentPokemon.moves" :key="index" @click="useMove(move)">
          {{ move.name }}
        </button>
      </div>
  
      <!-- Log de eventos -->
      <div class="event-log">
        <p v-for="(event, index) in eventLog" :key="index">{{ event }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerTeam: [ // Equipo del jugador
          {
            name: 'Pikachu',
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
            health: 100,
            attack: 10,
            defense: 5,
            moves: [
              { name: 'Impactrueno', power: 20 },
              { name: 'Ataque rápido', power: 15 }
              // Agrega más movimientos según sea necesario
            ]
          },
          // Agrega más Pokémon al equipo del jugador
        ],
        currentPokemonIndex: 0, // Índice del Pokémon actualmente en batalla
        eventLog: [] // Registro de eventos de la batalla
      };
    },
    computed: {
      currentPokemon() {
        return this.playerTeam[this.currentPokemonIndex];
      }
    },
    methods: {
      useMove(move) {
        // Lógica para usar un movimiento
        this.eventLog.push(`${this.currentPokemon.name} usó ${move.name}!`);
        // Agrega lógica para calcular el daño, actualizar la salud del objetivo, etc.
      }
      // Agrega más métodos según sea necesario
    }
  };
  </script>
  
  <style scoped>
  .combat-screen {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .pokemon-info {
    text-align: center;
  }
  
  .player-actions {
    text-align: center;
  }
  
  .event-log {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    max-height: 200px;
    overflow-y: auto;
  }
  </style>
  