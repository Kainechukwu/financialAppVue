import { createStore } from 'vuex'
import authToken from "./modules/authToken";

export default createStore({
  state: {
    addPlanModal: false,
    thisPlanModal: false,
    addProductModal: false,
    signupEmail: "",
  },
  mutations: {
    setAddPlanModal(state, payload) {
      state.addPlanModal = payload;
    },
    setThisPlanModal(state, payload) {
      state.thisPlanModal = payload;
    },
    setAddProductModal(state, payload) {
      state.addProductModal = payload;
    },
    setSignupEmail(state, payload) {
      state.signupEmail = payload;
    }
  },
  actions: {
  },
  modules: {
    authToken
  }
})
