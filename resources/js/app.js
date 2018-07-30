import Vue from 'vue'
import VueRouter from 'vue-router'
import loginForm from './components/login.vue'
import navigation from './components/navigation/navigation.vue'

// import VModal from 'vue-js-modal'
// Vue.use(VModal)

// import Multiselect from 'vue-multiselect'
// Vue.component('Multiselect', Multiselect)

// import axios from 'axios'
import flash from './components/Flash1.vue'
import router from './components/routes'

// Vue.prototype.$http = axios
// window.axios = require('axios')

Vue.use(VueRouter)

import { store } from './store/apistore'
import { mapGetters,mapActions } from 'vuex'

var vm = new Vue({
  created: function () {
    store.dispatch('actionCheckIfAppInitialized')
  },
  computed: {
    ...mapGetters(['getIsUserLoggedIn'])
  },
  el: '#app',
  components: {
    flash: flash,
    loginForm: loginForm, 
    navigation: navigation
  },
  router,
  store
})
