const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  appInitializedStatus: false
}

const getters = {

  getIsUserLoggedIn: state => {
    return state.isLoggedIn
  },

  getAppInitializedStatus: state => {
    return state.appInitializedStatus
  }

}

const mutations = {

  SET_APP_STATUS (state,payload) {
    state.appInitializedStatus = payload
  },

  SET_NEW_USER (state,payload) {
    console.log(payload)
  },
  
  loginUser (state) {
    state.isLoggedIn = true
  },

  logoutUser (state) {
    state.isLoggedIn = false
  }
}

const actions = {

  actionCheckIfAppInitialized: async ({commit}) => {
    const res = await axios.get('/appStatus')
    commit('SET_APP_STATUS', res.data)
  },

  actionInitializeFirstUser: async ({commit},payload) => {
    console.log(payload)
    const res = await axios.post('/appInitialize',{ payload })
    commit('SET_NEW_USER', res.data)
  }
  
}

export default {
  state,
  mutations,
  getters,
  actions
}

