import { ADD_FRACTION, CHANGE_INPUT, DELETE_FRACTION } from './constants';

const mutations = {
  [CHANGE_INPUT](state, payload) {
    state.fractions.forEach((el) => {
      const item = el;
      if (item.id === payload.id) {
        item[payload.key] = payload[payload.key];
      }
    });
  },
  [ADD_FRACTION](state) {
    state.fractions.push({
      id: state.fractions.length + 1,
      numerator: 0,
      denominator: 0,
    });
  },
  [DELETE_FRACTION](state, id) {
    state.fractions.forEach((el, i) => {
      if (el.id === id) {
        state.fractions.splice(i, 1);
      }
    });
  },
};

export default mutations;
