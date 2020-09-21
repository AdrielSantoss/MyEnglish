import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        question: 'Dialog'
    },
    mutations: {
        changeQuestion(state, questionCurrent){
            state.question= questionCurrent
            console.log(state.question)
        }
    }


})