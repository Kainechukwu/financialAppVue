import { createStore } from 'vuex'

export default createStore({
  state: {
    addPlanModal: false,
    thisPlanModal: false,
    addProductModal: false
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
    }
  },
  actions: {
  },
  modules: {
  }
})
