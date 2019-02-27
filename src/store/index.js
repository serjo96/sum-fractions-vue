import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

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
  actions,
  mutations: {
    changeInput(state, payload) {
      state.fractions.forEach((el) => {
        if (el.id === payload.id) {
          el[payload.key] = payload[payload.key];
        }
      });
    },
    addFraction(state) {
      state.fractions.push({
        id: state.fractions.length + 1,
        numerator: 0,
        denominator: 0,
      });
    },
    deleteFraction(state, id) {
      state.fractions.forEach((el, i) => {
        if (el.id === id) {
          state.fractions.splice(i, 1);
        }
      });
    },
  },
  getters: {
    takeSum(state) {
      const sum = state.fractions.reduce((prev, curr) => {
        const newSum = { ...prev };


        if(prev.denominator === curr.denominator) {
            newSum.numerator = prev.numerator + curr.numerator;
            newSum.denominator = prev.denominator + curr.denominator;
        } else {
            console.log(((prev.numerator*prev.denominator) + (curr.numerator* curr.denominator)) / ( curr.denominator*prev.denominator))
        }

        return newSum;
      });

      return sum;
    },
  },

});
