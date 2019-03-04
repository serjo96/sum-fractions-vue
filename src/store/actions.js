import {ADD_FRACTION, CHANGE_INPUT, DELETE_FRACTION } from './constants';

const actions = {
  addFraction: ({ commit }) => { commit(ADD_FRACTION); },
  changeInput: ({ commit }, value) => { commit(CHANGE_INPUT, value); },
  deleteFraction: ({ commit }, id) => { commit(DELETE_FRACTION, id); },
};

export default actions;
