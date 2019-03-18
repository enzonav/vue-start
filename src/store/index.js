import Vue form 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import authStore from './modules/authStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authStore
  }
})
