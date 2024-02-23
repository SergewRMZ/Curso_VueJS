const app = Vue.createApp({
  // template: `
  // <h1>Hola Mundo</h1>
  // <p>Desde app.js</p>
  // `

  data () {
    return {
      author: 'Serge Eduardo',
      message: 'Hola Mundo'
    }
  },

  // Definición de métodos en Vue
  methods: {
    changeMsg () {
      this.message = 'Si puedes imaginarlo, puedes programarlo.'
    }
  }

})

app.mount('#myApp');