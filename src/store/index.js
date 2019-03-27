import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fractions: [
      {
        id: 1,
        numerator: 0,
        denominator: 0,
      },
      {
        id: 2,
        numerator: 0,
        denominator: 0,
      },
    ],
  },
  mutations,
  getters,
});
