import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let stor = {
    state: {
        loading: false,
    },
    mutations: {
        loadingChange(state, i) {
            state.loading = i
        }
    },
    
    namespaced: true
}
export default stor