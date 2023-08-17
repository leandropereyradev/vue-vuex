import getRandomInt from "@/helpers/getRandomInt";
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1,
    lastMutation: "none",
    isLoading: false,
  },

  //No permiten hacer peticiones al BackEnd porque son síncronas (funcionan en el entorno cliente)
  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "Increment";
    },
    incrementBy(state, value) {
      state.count += value;
      state.lastMutation = "IncrementBy" + value;
    },
    setLoading(state, value) {
      state.isLoading = value;
      state.lastMutation = "setLoading: " + value;
    },
  },

  //Permiten hacer peticiones al BackEnd al ser Asíncronas
  actions: {
    async incrementRandomInt({ commit }) {
      commit("setLoading", true);
      const randomInt = await getRandomInt();

      commit("incrementBy", randomInt);
      commit("setLoading", false);
    },
  },

  //Pueden ser llamados en cualquier parte de la aplicación
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
});
