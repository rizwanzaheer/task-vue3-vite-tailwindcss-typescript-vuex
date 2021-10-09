import { createStore } from "vuex";

export default createStore({
  state: {
    sum: 0,
    // optionA: 0,
    // optionB: 0,
  },
  mutations: {
    CALCULATE_SUM(state, { optionA, optionB }) {
      console.log("CALCULATE_SUM is: ", optionA);
      console.log("CALCULATE_SUM is: ", optionB);
      state.sum = optionA + optionB;
    },
  },
  actions: {
    calculateSum({ commit }, payload) {
      console.log("paylad is: ", payload);
      commit("CALCULATE_SUM", payload);
    },
  },
  modules: {},
});
