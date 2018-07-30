const state = {
    
    loginError: false
  
  }
  
  const getters = {
  
    getLoginError: state => {
      return state.loginError
    },
  
  }
  
  const mutations = {
  
    setLoginError (state, payload) {
      state.loginError = payload
    },

  }

const actions = {

    actionSubmitLogin: async ({commit},payload) => {
        const res = await axios.post('/login', {email: payload.email, password: payload.password})
        commit('setLoginError', false)
        return res 
    }
}

export default {
    state,
    mutations,
    getters,
    actions
  }