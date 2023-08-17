import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
  //namespaced evita que se configure de manera global
  namespaced: true,

  state,

  //No permiten hacer peticiones al BackEnd porque son síncronas (funcionan en el entorno cliente)
  mutations,

  //Permiten hacer peticiones al BackEnd al ser Asíncronas
  actions,

  //Pueden ser llamados en cualquier parte de la aplicación
  getters,
};

export default counterStore;
