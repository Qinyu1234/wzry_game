import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import apiVuex from './modules/apiVuex'

const state = {}
const mutations = {}
const actions = {}
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        apiVuex
    }
})