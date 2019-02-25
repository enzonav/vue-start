<template>
  <div id="app">
    This is Root component
    <router-link to="/">Home</router-link>
    <router-link to="/test">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
