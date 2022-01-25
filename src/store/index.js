import { createStore } from 'vuex'
import authToken from "./modules/authToken";
import createPersistedState from "vuex-persistedstate";

let timer;
export default createStore({
  state: {
    addPlanModal: false,
    thisPlanModal: false,
    addProductModal: false,
    otpPhoneNumberModal: false,
    phoneNo: "",
    signupEmail: "",
    sidebarMenu: false,
    globaAlert: { show: false, text: "", type: "" },

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
    setPhoneNo(state, payload) {
      state.phoneNo = payload;
    },
    setSidebarMenu(state, payload) {
      state.sidebarMenu = payload;
    },
    setGlobalAlert(state, payload) {
      // Clear previous timer
      clearTimeout(timer);
      // update alert state
      state.globaAlert = payload;
      // set new timer
      timer = setTimeout(() => {
        const alert = document.getElementById("globalAlert");
        state.globaAlert = { show: false, text: "", type: "" }
        alert.click();
      }, 5000)
    },
  },
  actions: {
  },
  modules: {
    authToken
  },
  plugins: [createPersistedState()],

})
