import { createStore } from 'vuex'
import authToken from "./modules/authToken";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    addPlanModal: false,
    thisPlanModal: false,
    addProductModal: false,
    otpPhoneNumberModal: { number: "", open: false },
    signupEmail: "",
    sidebarMenu: false,
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
    },
    setOtpPhoneNumberModal(state, payload) {
      state.otpPhoneNumberModal = payload;
    },
    setSidebarMenu(state, payload) {
      state.sidebarMenu = payload;
    }
  },
  actions: {
  },
  modules: {
    authToken
  },
  plugins: [createPersistedState()],

})
