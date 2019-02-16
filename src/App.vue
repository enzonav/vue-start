<template>
<div id="app">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <TestComponent />
</div>
</template>

<script>
import HelloWorld from './components/Component.vue'
import TestComponent from './components/TestComponent.vue'

export default {
  name: 'app',
  components: { 
    HelloWorld, 
    TestComponent 
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
