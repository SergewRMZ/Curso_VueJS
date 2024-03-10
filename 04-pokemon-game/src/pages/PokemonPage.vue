<template>
<h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture 
      v-bind:pokemonId="pokemon.id" 
      v-bind:showPokemon="showPokemon"/>
    <PokemonOptions 
      v-bind:pokemons="pokemonArr"
      @selection="checkAnswer"/>

      <div v-if="showAnswer">
        <h2 class="fade-in">{{message}}</h2>
        <button @click="newGame">
          Nuevo Juego
        </button>
      </div>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '../helpers/getPokemonOptions';

// getPokemonOptions();
export default {
  components: {
    PokemonOptions, PokemonPicture
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },

  methods: {
    async mixPokemonArray () {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },

    checkAnswer (pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;
      (pokemonId === this.pokemon.id)
        ? this.message = `Correct, ${this.pokemon.name}`
        : this.message = `Oops, el pokemon es ${this.pokemon.name}`
    },

    newGame () {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.mixPokemonArray();
    },
  },

  /* mounted: Es un gancho de ciclo de vida que se ejecuta después de que el componente ha 
  sido montado en el DOM*/ 
  mounted () {
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>