import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'
import ExampleVuex from '../components/ExampleVuex.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/example', component: ExampleVuex }
]
