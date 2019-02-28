<template>
  <div id="app">
    This is Root component
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  components: { Navigation }
}
</script>

<style></style>
