<template>
  <div class="pokemon-container">
    <img v-bind:src="imgSrc"
      class="hidden-pokemon" 
      alt="Pokemon">

    <img 
      v-if="showPokemon" 
      v-bind:src="imgSrc" 
      class="fade-in" 
      alt="Pokemon">
  </div>
</template>
<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },

    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
    }
  }
}
</script>

<style scoped> 
  .pokemon-container {
      height: 200px;
  }
  img {
      height: 200px;
      position: absolute;
      right: 42%;
      user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
  }
  .hidden-pokemon {
      filter: brightness(0);
  }
</style>