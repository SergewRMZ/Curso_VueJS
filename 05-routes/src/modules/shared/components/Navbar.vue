<template>
  <div>
    <!-- 
      Esta forma es la manera de dirigir al usuario por medio de las URL, y por 
      el nombre específicado en la propiedad 'name' del router.

      <router-link to="/">Pokemon List</router-link>
      <router-link to ="/1">Pokemon por id</router-link>
      <router-link to="/about">About</router-link> -->

    <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to ="{ name: 'pokemon-id', params: { id: 10 } }">Pokemon por id</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
</template>

<style scoped>

div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  margin: 0 10px;
  color: #252525;
  text-decoration: none;
  font-size: 20px;
}

div .router-link-exact-active {
  color: #005EA7;
}
</style>