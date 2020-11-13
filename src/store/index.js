import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import User from "@/modules/User"

const modules = {
  User
}

const store = new Vuex.Store({
  modules
})

export default store

