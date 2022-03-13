import { createStore } from 'vuex'
const Store = createStore({
    state() {
        return {
            user: {},
        }
    },
    mutations: {
        setUser(state, payload) {
            console.log(state.user);
            // if (payload) {
            //     state.user = payload.user
            // }
        }
    },
    getters: {
        user: state => state.user
    },
    mutations: {

    }
})
export default Store