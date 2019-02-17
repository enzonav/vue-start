import Component from './components/Component.vue'
import TestComponent from './components/TestComponent.vue'
const Router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/test1', component: Component },
    { path: '/test2', component: TestComponent }
  ]
})