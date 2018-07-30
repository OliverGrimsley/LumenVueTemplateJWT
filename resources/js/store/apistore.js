import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import admin from './modules/admin'
import login from './modules/login'

Vue.use(Vuex)

Vue.prototype.$http = axios
window.axios = require('axios')
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

export const store = new Vuex.Store({

  modules: {
    admin,
    login
  },

  strict: true
})
