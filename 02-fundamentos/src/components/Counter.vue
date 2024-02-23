<template>
  
    <h2>{{customTittle}}</h2>
    <p data-testid="counter"> {{counter}} </p>
    
    <div class="buttons-container">
      <!-- Escribir @ es equivalente a v-on para escuchar eventos -->
      <button @click="increase"> +1 </button>
      <button data-testid="decrease-button" @click="decrease"> -1 </button>
    </div>
  
</template>

<script>
export default {
  /** Props: Propiedades del componente */
  props: {
    tittle: String,

    /** Podemos modificar propiedades de nuestras props del componente*/
    start: {
      type: Number, // Definir el tipo de nuestra prop
      default: 100, // Definir el valor por defecto de nuestra prop

      /** Podemos validar nuestras props */
      validator (value) {
        return value >= 0
      }
    }
  },

  data() {
    return {
      counter: this.start
    }
  },

  methods: {
    getSquareValue () {
      return this.counter * this.counter
    },

    increase () {
      this.counter++;
    },

    decrease () {
      this.counter--;
    }
  },

/** Las propiedades computadas, son propiedades que se calculan dinámicamente basadas en 
 * propiedades reactivas. 
 */
  computed: {
    squareCounter () {
      return this.counter * this.counter;
    },

    customTittle () {
      return this.tittle || 'Counter';
    }
  }
}
</script>

<style>
  button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    cursor: pointer;
    color: white;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
    margin: 0 5px;
  }

  button:hover {
    background-color: #43885f;
    transition: 0.3s ease-in-out;
  }
</style>