import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, data) {
      state.user = data.usuario
      localStorage.setItem('user', JSON.stringify(data.usuario))
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${ data.token }`
    },
    LOGOUT (state) {
      // state.user = null
      // localStorage.removeItem('user')
      // axios.defaults.headers.common['Authorization'] = null
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register({ commit }, credentials) {
        return apiClient
          .post('/api/register', credentials)
          .then(({ data }) => {
            commit('SET_USER_DATA', data.data)
          })
      },
      login({ commit }, credentials) {
        return apiClient
          .post('/api/login', credentials)
          .then(({ data }) => {
            commit('SET_USER_DATA', data.data)
          })
      },
      logout ({ commit }) {
        commit('LOGOUT')
      }
  },
  modules: {
  }
})
