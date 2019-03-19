import Vue from 'vue'
import Vuex from 'vuex'

import exampleStore from './modules/exampleStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exampleStore
  }
})
