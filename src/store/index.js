import { createStore } from 'vuex'

export default createStore({
  state: {
    addProductModal: false
  },
  mutations: {
    setAddProductModal(state, payload) {
      state.addProductModal = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
