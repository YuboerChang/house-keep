export default {
    namespaced: true,
    state: {
        userId: '',
        token: ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        removeToken(state) {
            state.token = ''
            localStorage.removeItem('token')
        }
    },
    actions: {

    },
    getters: {
        getToken(state) {
            return state.token || localStorage.getItem('token') || ''
        }
    }
}