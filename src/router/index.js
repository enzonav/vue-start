import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Test from '../components/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/test', component: Test }
  ]
})
