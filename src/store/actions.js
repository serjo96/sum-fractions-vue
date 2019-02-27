const actions = {
  addFraction: ({ commit }) => { commit('addFraction'); },
  deleteFraction: ({ commit }, id) => { commit('deleteFraction', id); },
};

export default actions;
