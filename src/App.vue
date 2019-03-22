<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { Header },
  mounted () {
    this.$store.dispatch('loadCoins')
  },
  computed: mapState([
    'coins'
  ])
}
</script>

<style></style>
