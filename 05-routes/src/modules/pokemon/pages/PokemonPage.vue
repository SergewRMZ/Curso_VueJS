<template>
  <h1>Pokemon Page</h1>
  <h2>Pokemon: <span> #{{id}}</span></h2>

  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: Number,
      required: true
    },

    nombre: {
      type: String
    }
  },

  data () {
    return {
      // id: null
      pokemon: null
    }
  },

  created () {
    // console.log(this.$route); Obtener query parameters
    // const { id } = this.$route.params
    // console.log(id)
    this.getPokemon();
  },

  methods: {
    async getPokemon () {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(res => res.json());
        console.log(pokemon);
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push('/');
        console.log('No hay nada que hacer aquí');
      }
    }
  },

  watch: {
    id () {
      this.getPokemon();
    }
  }
}
</script>
