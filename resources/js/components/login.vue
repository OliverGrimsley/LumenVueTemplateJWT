<template>
  <div class="h-full flex justify-center items-center">
    <div style="margin-top: 15em;" class="w-full max-w-xs">
      <div v-if="getAppInitializedStatus == 0">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
            <p class="font-bold">Note</p>
            <p class="text-sm">
              The Application must be initialized with a new User, who will be the Application admin
            </p>
          </div>

          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="initialusername">
              Enter the User's Name:
            </label>
            <input
              v-model="initialUser.name"
              id="initialusername"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
              type="text"
              placeholder="User name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="initialemail">
              Email address
            </label>
            <input
              v-model="initialUser.email"
              id="initialemail"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
              type="text"
              placeholder="email"
            />
          </div>
          <div class="mb-6">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="initialpassword">
              Password
            </label>
            <input
              v-model="initialUser.password"
              :class="{ 'border-red': initialUser.password.length == 0 }"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight"
              id="password"
              type="initialpassword"
              placeholder="******************"
            />
            <p v-if="initialUser.password.length == 0" class="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              @click="initializeUser"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Initialize Application User
            </button>
          </div>
        </form>
      </div>
      <form v-else class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
            type="text"
            placeholder="email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="password"
            :class="{ 'border-red': password.length == 0 }"
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p v-if="password.length == 0" class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="submitLogin"
            class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-grey text-xs">
        Access to this site is restricted to authorized users
      </p>
    </div>
  </div>
</template>

<script>
import { store } from './../store/apistore'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      email: '',
      password: '',
      rememberme: '',
      initialUser: { name: '', email: '', password: '' },
      loginError: false
    }
  },

  mounted() {
    console.log('Login Component mounted.')
  },

  computed: {
    ...mapGetters(['getAppInitializedStatus', 'getIsUserLoggedIn'])
  },

  methods: {
    ...mapActions(['actionSubmitLogin', 'actionInitializeFirstUser']),
    submitLogin() {
      this.actionSubmitLogin({ email: this.email, password: this.password })
        .then(response => {
          // login user, store the token and redirect to dashboard
          console.log(response)
          store.commit('loginUser')
          localStorage.setItem('token', response.data.token)
          // window.axios.defaults.headers.common = {
          //   'Authorization': 'Bearer ' + response.data.access_token
          // }
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
          // axios.defaults.headers.common['Content-Type'] = 'application/json'
          this.$router.push({ name: 'dashboard' })
        })
        .catch(error => {
          console.log('there was an error', error)
          this.loginError = true
        })
    },

    initializeUser() {
      this.actionInitializeFirstUser(this.initialUser)
    }
  }
}
</script>
