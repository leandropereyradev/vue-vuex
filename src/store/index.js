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
    isLoading(state, value) {
      state.isLoading = value;
      console.log(value);
    },
  },

  //Permiten hacer peticiones al BackEnd al ser Asíncronas
  actions: {
    async incrementRandomInt(context) {
      context.commit("isLoading", true);
      const randomInt = await getRandomInt();

      context.commit("incrementBy", randomInt);
      context.commit("isLoading", false);
    },
  },
});
