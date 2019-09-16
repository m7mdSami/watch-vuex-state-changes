import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 'ازيكم يا شباب',
  },
  getters: {
    status: state => state.status,
  },
  mutations: {
    updateStatus(state, status) {
      Vue.set(state, 'status', status);
      console.log(state, status)
    },
  },
  actions: {
    async fetchApi({ commit }) {
      try {
        await api.get();

        commit('updateStatus', ' vuex الداتا اتغيرت باستخدام');
        
      } catch (e) {
        console.error(e);

        commit('updateStatus', 'error');
      }
    },
  },
});
